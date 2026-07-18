# Free and Pro Features

This matrix describes the current 2.2 behavior. A check means the feature is implemented by the named edition—not merely that the underlying SCF/ACF field type exists.

## Row sources and widgets

| Feature | Free | Pro |
| --- | :---: | :---: |
| Top-level Repeater as a Loop Grid row source | ✓ | ✓ |
| Current post or queried-object rows | ✓ | ✓ |
| ACF/SCF Options Page rows | ✓ | ✓ |
| Aggregate rows from a Loop widget source query | ✓ | ✓ |
| Multiple repeater-powered Loop widgets on one page |  | ✓ |
| Loop Carousel |  | ✓ |
| Nested Repeater paths |  | ✓ |
| Repeater nested through Group or Flexible Content |  | ✓ |
| Flexible Content layout-to-template mapping |  | ✓ |
| Per-layout row schema and editor preview |  | ✓ |
| Relationship/Post Object query source |  | ✓ |
| Deep Relationship/Post Object paths through structural fields |  | ✓ |

Free supports multiple Loop Item templates, but only one repeater-powered Loop Grid on a rendered page. Pro removes that page-level limitation and keeps each widget's context independent.

## Dynamic data

| Feature | Free | Pro |
| --- | :---: | :---: |
| Repeater Text tag for Text and Textarea subfields | ✓ | ✓ |
| Repeater Image tag | ✓ | ✓ |
| Original source-post title tag | ✓ | ✓ |
| Extended text-compatible field types |  | ✓ |
| File and Gallery tags |  | ✓ |
| URL, Color, and Icon tags |  | ✓ |
| Link Title and Link Target tags |  | ✓ |

The Pro URL tag can convert supported subfields—including Relationship, Post Object, Taxonomy, Link, Image, and File values—into a URL suitable for Elementor link controls. This is different from the [Relationship Query](/relationship-queries), and there is no separate “ACF Repeater Relationship” dynamic tag.

See [Dynamic Tags and Field Types](/field-types) for the exact compatibility matrix.

## Presentation and interaction

| Feature | Free | Pro |
| --- | :---: | :---: |
| User-designed Elementor Loop Item markup | ✓ | ✓ |
| Lightbox that clones the selected Loop Item |  | ✓ |
| Optional previous/next lightbox navigation |  | ✓ |
| Lightbox-only or grid-only element visibility |  | ✓ |
| Lightbox width, height, overlay, padding, and control styles |  | ✓ |
| Taxonomy filter: dropdown, checkbox, or navigation |  | ✓ |
| Elementor Pro native Taxonomy Filter integration |  | ✓ |
| Filter deep links and custom URL parameter |  | ✓ |
| Repeater-aware Elementor display condition |  | ✓ |
| Repeater values as Elementor Form choices |  | ✓ |

The plugin does not inject a visual card, badge, or open button into each Loop Item. Lightbox opening is attached to the rendered item, while normal interactive links and controls inside the item remain usable.

## Context choices

| Context | Free | Pro |
| --- | :---: | :---: |
| Automatic | ✓ | ✓ |
| Current Post | ✓ | ✓ |
| Queried Object | ✓ | ✓ |
| ACF Options | ✓ | ✓ |
| Current User |  | ✓ |
| Explicit ACF Object ID |  | ✓ |

Explicit object IDs can target posts, users, taxonomies, or options using the syntax accepted by SCF/ACF. Learn how resolution works in [Contexts](/contexts).

## Compatibility notes

- Classic Elementor Loop Grid and Loop Carousel widgets are supported.
- Elementor Atomic Elements are not currently supported.
- Existing top-level Repeater configurations continue to work in 2.2.
- Pro features require the paid build and an active license where Freemius requires one.
