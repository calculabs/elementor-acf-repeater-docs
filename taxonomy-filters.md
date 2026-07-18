# Taxonomy Filters

> **Pro feature:** Requires Dynamic ACF Repeater for Elementor Pro.

Taxonomy filtering can use the plugin's built-in controls or, as an opt-in alternative, Elementor Pro's native Taxonomy Filter widget. Both modes filter taxonomy values associated with repeater rows; they do not filter arbitrary text, numbers, or post-meta values.

## Choose a filter interface

| Interface | Use it when |
| --- | --- |
| Built-in custom filter | You want the plugin's dropdown, checkbox, or clickable-navigation controls and styling options. |
| Elementor native filter | You want Elementor's own Taxonomy Filter markup, styles, URL state, multi-select behavior, pagination, and Load More integration. |

The native adapter is disabled by default. Enabling it for a grid suppresses the built-in filter on that grid so the two interfaces cannot compete. Turning it off restores the saved built-in configuration.

## Filter sources

The selected taxonomy can be associated in two ways:

- **Repeater taxonomy subfield:** a Taxonomy subfield on each row determines which rows match.
- **Owning post taxonomy:** terms assigned to the post that owns a row determine the match, useful when aggregating rows across posts.

Choose **Use Repeater Taxonomy Field** and the applicable **Repeater Taxonomy Field** when row-level terms should control the result.

## Enable the built-in filter

In the Loop Grid **Repeater Filter** section:

1. Enable **Custom Taxonomy Filter**.
2. Choose **Select Taxonomy**.
3. Select the row taxonomy field when applicable.
4. Choose a **Filter Type**.

## Enable Elementor's native filter

1. In the Loop Grid **Repeater Filter** section, enable **Native Filter Support**.
2. Choose the taxonomy and the Repeater Taxonomy Field that stores its terms.
3. Add Elementor Pro's **Taxonomy Filter** widget to the page.
4. Connect that widget to the same Loop Grid and choose the same taxonomy.

Elementor owns the visible filter controls and pagination. The plugin supplies row term data before pagination so matching rows on later pages remain discoverable.

## Filter types

| Type | Behavior |
| --- | --- |
| Dropdown | One compact select control |
| Checkbox | Multiple selections with OR matching |
| Clickable Navigation | Link-like term navigation |

Checkbox OR matching means a row remains visible when it matches any selected term.

## URL deep links

**Use Deeplinking** reads and updates the filter state in the URL. Set **Filter Parameter Name** to a unique value such as `team_department` when a page contains more than one filtered widget.

For example:

`?team_department=engineering`

Use distinct parameter names so one widget does not consume another widget's state.

## Options and ordering

The controls also support:

- Show or hide the **All** option and customize its label.
- Include empty taxonomy terms.
- Select a default term when the URL contains no filter.
- Exclude terms from the UI.
- Arrange terms in a custom drag order.
- Display term descriptions.
- Configure direction, alignment, width, dividers, colors, typography, spacing, and borders according to the selected filter type.

## Multiple widgets

Each Pro Loop widget has its own filter instance, render context, and URL parameter setting. Give every deep-linked filter a unique parameter and test the combined URL state when multiple widgets share a page.

## Security and editor rendering

Filter updates use a signed, widget-bound render context. If an old page, cache layer, or copied request calls the endpoint without the current signature, WordPress returns an authorization error instead of rendering arbitrary widget data. Regenerate stale Elementor data and clear page caches after upgrading from an older public-endpoint release.
