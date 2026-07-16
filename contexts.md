---
order: 560
icon: people
---

# Repeater Contexts

The Repeater context identifies the SCF/ACF object that owns the selected row source. It is separate from the Loop Item template and from Elementor's visual preview source.

Find **Repeater Context** in the Loop Grid or Loop Carousel **Query** panel after enabling the ACF row source.

## Available contexts

| Setting | Edition | Resolves to |
| --- | --- | --- |
| Automatic | Free and Pro | Queried term or author, Elementor preview post, current post, or the normal queried object |
| Current Post | Free and Pro | `get_the_ID()` |
| Queried Object | Free and Pro | The current queried post, author, or taxonomy term |
| ACF Options Page | Free and Pro | The SCF/ACF `options` object |
| Current User | Pro | The logged-in user as `user_ID` |
| Explicit ACF Object ID | Pro | A specific post, user, term, or options object |

## Automatic resolution

Automatic is the safe default. It resolves in this order:

1. A queried taxonomy term or author.
2. Elementor's current preview post.
3. The current WordPress post.
4. Another compatible queried object, when available.

When Automatic resolves a normal source object but the selected Repeater has no rows, the row provider preserves the plugin's historical **Options Page fallback**. Choosing a context explicitly does not silently switch to Options.

## Explicit object IDs

Pro accepts the SCF/ACF-compatible forms below:

| Object | Example |
| --- | --- |
| Post | `123` |
| User | `user_12` |
| Taxonomy term | `category_34` or `product_cat_34` |
| Options Page | `options` |

The taxonomy prefix must be the actual taxonomy slug. The object must exist or the context remains unresolved.

## Common uses

### Theme Builder single template

Use **Automatic** or **Current Post**. Set Elementor's preview source to a populated post so the editor can display rows.

### Taxonomy archive

Store the Repeater on the taxonomy term and use **Automatic** or **Queried Object**. The plugin passes `taxonomy_termID` to SCF/ACF.

### Author archive or user profile

Use **Queried Object** on an author archive, **Current User** for the logged-in account, or an explicit `user_#` value for a fixed profile.

### Global site content

Use **ACF Options Page** when rows live in global SCF/ACF options rather than on a post.

## Context and aggregate queries

**Query Current Post Only** controls whether the Loop widget reads one resolved owner or collects rows from Elementor's source-post query.

- Enabled: read only from the resolved context.
- Disabled: allow the widget source query to contribute multiple posts and their rows.

If you are debugging the wrong rows, confirm both settings. A correct context can still appear broad when aggregate querying is enabled.
