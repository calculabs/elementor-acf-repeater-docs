# Taxonomy Filters

> **Pro feature:** Requires Dynamic Elementor ACF Repeater Pro.

The Repeater Filter adds taxonomy-based filtering to a repeater-powered Loop Grid. It does not filter arbitrary text, numbers, or post-meta values.

## Filter sources

The selected taxonomy can be associated in two ways:

- **Repeater taxonomy subfield:** a Taxonomy subfield on each row determines which rows match.
- **Owning post taxonomy:** terms assigned to the post that owns a row determine the match, useful when aggregating rows across posts.

Choose **Use Repeater Taxonomy Field** and the applicable **Repeater Taxonomy Field** when row-level terms should control the result.

## Enable the filter

In the Loop Grid **Repeater Filter** section:

1. Enable **Custom Taxonomy Filter**.
2. Choose **Select Taxonomy**.
3. Select the row taxonomy field when applicable.
4. Choose a **Filter Type**.

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
