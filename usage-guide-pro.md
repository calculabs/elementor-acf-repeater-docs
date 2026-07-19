---
order: 600
icon: tools
---

# Pro Workflow Guide

Start with the [Top-level Repeater Guide](/usage-guide) if you have not built a basic repeater-powered Loop Grid yet. Pro uses the same foundation and adds specialized workflows.

## Choose the row source first

The source determines which controls and template strategy you need.

| Goal | Use |
| --- | --- |
| Render rows from one top-level Repeater | Standard ACF row source |
| Render child rows found inside a nested structure | [Nested Repeater](/nested-repeaters) |
| Give each Flexible Content layout a different design | [ACF Flexible Content skin](/flexible-content) |
| Render posts selected by Relationship or Post Object | [Relationship Query](/relationship-queries) |
| Pull rows from a user, term, post, or options object | [Contexts](/contexts) |
| Add public row search, sorting, ranges, or layout filtering | [Row Search and Sorting](/row-search-sorting) |
| Inspect the resolved widget pipeline inside Elementor | [Context Inspector](/context-inspector) |

## Configure the Loop Item before the widget

Open the Loop Item document settings and choose **ACF Row Schema for Loop**. This gives the editor the correct row schema and prevents unrelated subfields from appearing in dynamic-tag selectors.

For Flexible Content, create one Loop Item for each layout you intend to map. Each template should use the schema for its own layout.

## Configure the Loop widget

In the Loop Grid or Loop Carousel **Query** panel:

1. Enable **Use ACF Rows**.
2. Select **ACF Row Source**.
3. Decide whether **Query Current Post Only** should limit the source to the current context.
4. If the source is Flexible Content, choose the **ACF Flexible Content** skin and map the layouts.
5. Add filters, relationship source settings, or context overrides only when the workflow requires them.

If you need search, sorting, number/date ranges, or a Flexible Content layout selector, configure them in **Content → Row Search & Sorting**. The feature is off until **Enable Row Controls** is enabled.

## Add presentation features independently

Lightbox and taxonomy filtering are optional layers. They do not change the underlying row schema:

- [Lightbox](/lightbox) clones a rendered Loop Item into an overlay.
- [Taxonomy Filters](/taxonomy-filters) limit visible rows by taxonomy.
- [Loop Carousel](/loop-carousel) uses Elementor's carousel rendering with repeater rows.

## Build for the correct context

Editor previews and frontend requests do not always resolve the same WordPress object automatically. Use [Contexts](/contexts) when the rows live on an Options Page, user, term, archive object, or explicitly selected post.

## Validate before launch

Test at least:

- The Elementor Loop Item preview with a populated source object.
- The page in the Elementor editor and on the frontend.
- Empty rows and unmapped Flexible Content layouts.
- Desktop, tablet, and mobile behavior.
- Multiple widgets on the same page if used.
- Filter deep links, lightbox controls, and carousel navigation if enabled.
- A logged-out session, because stale editor authentication can hide REST or context problems.

During setup, the optional [Context Inspector](/context-inspector) can verify the source and context without exposing row values or adding frontend output. Turn it off again when you no longer need the sidebar report.

If behavior differs between the editor and frontend, use [Troubleshooting](/troubleshooting) before rebuilding the template.
