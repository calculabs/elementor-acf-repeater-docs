import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { dirname, join, normalize, relative, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const ignored = new Set(['.git', '.retype', 'node_modules']);

function walk(directory) {
  return readdirSync(directory).flatMap((name) => {
    if (ignored.has(name)) return [];
    const path = join(directory, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

const markdownFiles = walk(root).filter((path) => path.endsWith('.md'));
const markdownByRoute = new Map();
const anchorsByFile = new Map();

function routeFor(path) {
  const local = relative(root, path).replaceAll('\\', '/');
  if (local === 'README.md') return '';
  return local.replace(/\.md$/, '').replace(/\/README$/, '');
}

function slug(text) {
  return text
    .toLowerCase()
    .replace(/<[^>]+>/g, '')
    .replace(/[`*_~]/g, '')
    .replace(/[^\p{L}\p{N}\s-]/gu, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

for (const file of markdownFiles) {
  markdownByRoute.set(routeFor(file), file);
  const headings = [...readFileSync(file, 'utf8').matchAll(/^#{1,6}\s+(.+)$/gm)];
  anchorsByFile.set(file, new Set(headings.map((match) => slug(match[1]))));
}

const errors = [];

function report(file, message) {
  errors.push(`${relative(root, file)}: ${message}`);
}

for (const file of markdownFiles) {
  const source = readFileSync(file, 'utf8');
  const linkPattern = /(!?)\[[^\]]*\]\(([^)]+)\)/g;

  for (const match of source.matchAll(linkPattern)) {
    const isImage = match[1] === '!';
    const raw = match[2].trim().replace(/^<|>$/g, '');
    if (!raw || /^(https?:|mailto:|tel:)/i.test(raw)) continue;

    const [withoutFragment, fragment = ''] = raw.split('#', 2);
    const clean = withoutFragment.split('?', 1)[0];

    if (isImage) {
      const target = clean.startsWith('/')
        ? join(root, clean.slice(1))
        : resolve(dirname(file), clean);
      if (!existsSync(target)) report(file, `missing image ${raw}`);
      continue;
    }

    let targetFile = file;
    if (clean) {
      if (clean.startsWith('/')) {
        const route = clean.slice(1).replace(/\/$/, '');
        targetFile = markdownByRoute.get(route);
      } else {
        const candidate = normalize(resolve(dirname(file), clean));
        const routes = [candidate, `${candidate}.md`, join(candidate, 'README.md')];
        targetFile = routes.find((path) => existsSync(path));
      }
      if (!targetFile) {
        report(file, `missing document ${raw}`);
        continue;
      }
    }

    if (fragment && !anchorsByFile.get(targetFile)?.has(fragment)) {
      report(file, `missing anchor #${fragment} in ${relative(root, targetFile)}`);
    }
  }
}

const staleClaims = [
  ['Version: 1.0.2', 'stale documented version'],
  ['WordPress 5.8', 'stale WordPress minimum'],
  ['ACF Repeater Relationship dynamic tag', 'nonexistent dynamic tag claim'],
  ['without pagination', 'incorrect Relationship pagination claim'],
];

for (const file of markdownFiles) {
  const source = readFileSync(file, 'utf8');
  for (const [phrase, label] of staleClaims) {
    if (source.includes(phrase)) report(file, `${label}: ${phrase}`);
  }
}

if (errors.length) {
  console.error(`Documentation validation failed with ${errors.length} issue(s):`);
  errors.forEach((error) => console.error(`- ${error}`));
  process.exit(1);
}

console.log(`Documentation validation passed: ${markdownFiles.length} pages, all local links and images resolved.`);
