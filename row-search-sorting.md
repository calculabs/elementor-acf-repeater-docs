---
order: 585
icon: search
---

# Row Search and Sorting

> **Pro feature:** Requires Dynamic ACF Repeater for Elementor Pro 2.3 or newer.

Row Search & Sorting adds an optional public control group to a repeater-powered Loop Grid or Loop Carousel. It uses the rows and Loop Item you already configured; it does not create a replacement listing widget or change the card design.

## Configure the controls

1. Edit the Loop Grid or Loop Carousel in Elementor.
2. Confirm **Use ACF Rows** is enabled and select the row source.
3. Open **Content → Row Search & Sorting**.
4. Enable **Enable Row Controls**.
5. Configure only the controls the page needs:
   - **Searchable Row Fields:** one or more discovered scalar fields.
   - **Sort Options:** a public label, row field, and default direction for each choice.
   - **Range Filters:** a public label and a number or date field.
   - **Flexible Layout Filter:** an optional content-type selector for Flexible Content sources.
   - **Shareable URL State:** optional isolated query parameters for the current widget.

If no search, sort, range, or layout choice is configured, the plugin does not insert an empty public control group.

## Search behavior

Search combines the selected fields for each row. Typed text is split into tokens, and every token must appear somewhere in that row's combined searchable text. Matching is case-insensitive and happens before pagination.

Choose fields that contain human-readable scalar values such as a title, category label, description, SKU, or edition. Structural Repeater, Group, and Flexible Content fields are not themselves searchable choices.

## Sorting behavior

Each public sort option points to one discovered row field:

- Number and Range fields use numeric comparison.
- Date, Date Time, and Time fields use date comparison.
- Other supported scalar fields use case-insensitive text comparison.
- Missing values remain last.
- Equal values preserve their original row order.

The visitor can choose ascending or descending order. **Original order** restores the SCF/ACF row order.

## Number and date ranges

Each configured range accepts a minimum, maximum, or both. A row must contain a valid comparable value inside the inclusive bounds. Invalid bounds—or a minimum greater than the maximum—return an empty result instead of silently guessing.

## Filtering and pagination order

When features are combined, the plugin resolves the complete virtual-row set and applies:

1. taxonomy filtering,
2. Flexible Content layout filtering,
3. text search,
4. number/date ranges,
5. sorting,
6. one final Elementor pagination step.

That order prevents matching rows on a later unfiltered page from disappearing prematurely.

## URL state and multiple widgets

**Shareable URL State** stores search, sort, direction, layout, and range values in the URL. The configured prefix is combined with the Elementor widget ID, so two grids or carousels do not overwrite each other's state.

Disable URL state when the controls should be temporary and non-shareable. If you intentionally reuse a custom prefix, the widget ID is still appended.

## Styling

Open **Style → Row Search & Sorting** to control:

- gap between fields,
- text color,
- input background,
- Apply button color,
- typography.

The public markup is accessible form markup. Site or Elementor styles can continue to refine it with normal widget-level CSS.

## Verify the setup

- Search for terms that occur in one field and across multiple selected fields.
- Test ascending, descending, and Original order.
- Test minimum-only, maximum-only, and bounded ranges.
- Confirm filters operate on the complete result set before pagination.
- Test the URL in a fresh logged-out browser when URL state is enabled.
- Test every Loop Grid or Loop Carousel independently when several share a page.

Use the [Context Inspector](/context-inspector) to confirm which row-query features the widget currently has enabled. See [Troubleshooting](/troubleshooting#row-search-sorting-or-ranges-return-unexpected-rows) if results differ from the expected source rows.
