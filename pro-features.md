---
order: 650
icon: star
---

# Pro Features

Pro extends the same Loop Item workflow instead of replacing it. Your Elementor template remains the source of the markup and design; Pro adds more row sources, contexts, tags, widgets, and interactions.

## Structured row sources

### Nested Repeaters

Select a Repeater reached through another Repeater, Flexible Content layout, or Group. Pro resolves the nested path and flattens the matching child rows into the Loop widget while retaining their source context.

[Read the Nested Repeater guide →](/nested-repeaters)

### Flexible Content mapping

Use the **ACF Flexible Content** skin to map each layout to a different Loop Item. A hero layout can use one design, a quote layout another, and unmapped layouts can use the default template or be skipped.

[Read the Flexible Content guide →](/flexible-content)

### Relationship queries

Use a Relationship or Post Object field as the source of real WordPress posts. Pro preserves the field order and renders those posts through an ordinary Elementor Loop Item.

[Read the Relationship Query guide →](/relationship-queries)

## Presentation and navigation

### Multiple loop widgets and Loop Carousel

Run independent repeater-powered Loop Grids or Loop Carousels on the same page. Each widget keeps its own row source and rendering context.

[Read the Loop Carousel guide →](/loop-carousel)

### Repeater lightbox

Open the selected Loop Item in an overlay, optionally with previous/next navigation. The lightbox clones the item you designed—it does not add a card surface or visible trigger button to the grid.

[Read the Lightbox guide →](/lightbox)

### Taxonomy filters

Filter repeater rows by either the owning post's taxonomy or a Taxonomy subfield in the row. Choose dropdown, checkbox, or navigation UI and optionally synchronize the state to the URL.

[Read the Taxonomy Filter guide →](/taxonomy-filters)

### Row search and sorting

Add only the public controls a catalog needs: search across selected scalar row fields, stable text/number/date sorting, number/date ranges, and a Flexible Content layout selector. All operations run on the complete matched row set before Elementor paginates it.

[Read the Row Search and Sorting guide →](/row-search-sorting)

## Editor diagnostics

### Context Inspector

Enable the inspector temporarily in a Loop Grid or Loop Carousel's **Troubleshooting** section to see the provider, object context, row source, count, stable paths, mappings, Relationship resolution, row-query state, pagination, and refresh-security status. It stays in Elementor's sidebar and never adds markup to the Loop Item or frontend.

[Read the Context Inspector guide →](/context-inspector)

## Extended dynamic data

Pro adds File, Gallery, URL, Color, Icon, Link Title, and Link Target tags, and expands the field types accepted by the Text tag.

[See the exact field compatibility matrix →](/field-types)

## Elementor integrations

- [Repeater display conditions](/display-conditions) can show or hide an element based on the current row value.
- [Form field options](/form-options) can populate an Elementor Select, Radio, or Checkbox field from Repeater values.
- [Advanced contexts](/contexts) add Current User and explicit SCF/ACF object IDs.

## What Pro does not do

Pro does not create a standalone listing widget, visual card design, custom post type, or database table. It connects SCF/ACF row data to Elementor's classic loop system. Elementor Atomic Elements are not currently supported.
