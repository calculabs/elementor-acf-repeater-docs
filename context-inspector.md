# Context Inspector

The Context Inspector is an opt-in, read-only report inside Elementor's Loop Grid and Loop Carousel sidebar. Use it while configuring or diagnosing a repeater-powered widget, then turn it off when you no longer need the report.

![Context Inspector resolving a six-row Loop Grid](/images/usage/context-inspector.png)

## Open the inspector

1. Edit a classic Elementor Loop Grid or Loop Carousel.
2. Enable **Use ACF Repeater** or **Use ACF Rows** and select the row source.
3. Open **Content → Troubleshooting**.
4. Enable **Context Inspector**.

The toggle is off by default. The plugin does not make the inspector request until you enable it for the selected widget.

## Free and shared details

Free and Pro report:

- active field provider and version,
- resolved post, term, user, or Options context,
- selected row source and source type,
- number of rows discovered for a direct/current-object query,
- representative-row index, layout, and schema metadata when available.

When **Query Current Post Only** is off, rows belong to each post in Elementor's source query. The inspector says the context and total are calculated while Elementor runs that query instead of pretending the editor page owns the complete row set.

## Expanded Pro pipeline

Pro also reports applicable details for:

- stable field-key paths,
- Flexible Content layout-to-template mappings and unmapped-row behavior,
- Relationship/Post Object field paths and resolved post counts,
- configured row search, sorting, ranges, layout filter, and URL state,
- Elementor Pro Taxonomy Filter and plugin taxonomy-filter state,
- pagination mode and rows per page,
- signed, expiring, widget-bound public refresh security.

Only relevant Relationship details appear when Relationship Query is enabled.

## What the inspector does not expose

The report is metadata-only. It does not return:

- Repeater or Flexible Content row values,
- field contents,
- signed render-context tokens,
- WordPress or REST nonces,
- credentials or license data.

The request requires a logged-in user, a current Elementor nonce, and permission to edit the active Elementor document. Only the widget settings required to explain the pipeline are accepted.

## No canvas or frontend output

The inspector's HTML and CSS are scoped to Elementor's sidebar. Enabling it does not add a button, overlay, badge, panel, or hidden inspector element to:

- the Loop Item,
- Elementor's preview canvas,
- the published frontend.

It also does not modify the row query or save a data migration. The only saved widget state is the on/off toggle if you publish while it is enabled.

## Reading statuses

- **Green:** resolved or enabled as expected.
- **Amber:** optional, empty, disabled, or needs attention.
- **Red:** the current editor request could not resolve a required context.
- **Gray:** informational or not applicable to the current configuration.

An amber or gray line is not automatically an error. Read the value beside it—for example, a disabled filter or “Not a Flexible Content source” is normal when that feature is not in use.

## Common fixes

- **Unresolved context:** confirm the Elementor document and Repeater Context, then choose a populated preview/current object.
- **0 rows:** verify the selected field exists on the resolved object and contains rows.
- **Invalid row source:** reselect the field; deleting and recreating an SCF/ACF field changes its field key.
- **Old or missing report:** confirm version 2.4+, hard-refresh Elementor, and use **Elementor → Tools → Clear Files & Data**.

For deeper diagnosis, continue with [Troubleshooting](/troubleshooting).
