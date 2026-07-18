# Relationship Queries

> **Pro feature:** Requires Dynamic ACF Repeater for Elementor Pro.

Relationship Query changes an Elementor Loop Grid or Loop Carousel from virtual Repeater rows to real WordPress posts selected by an SCF/ACF Relationship or Post Object field.

Use it when the selected posts should render through a normal Elementor Loop Item with standard post data such as title, featured image, terms, and custom fields.

![Relationship posts rendered in their saved field order](/images/usage-pro/relationship-frontend.jpg)

## Supported sources

- A top-level Relationship field
- A top-level Post Object field
- A Relationship or Post Object field reached through one or more Group fields
- A Relationship or Post Object field inside a Flexible Content layout
- A Relationship or Post Object field inside nested Repeaters
- Mixed paths that pass through Group, Flexible Content, and Repeater fields

The nested Relationship workflow collects selections across matching structural rows. It uses stable field-key paths, ignores unrelated Flexible Content layouts, removes duplicate posts, and preserves the first configured occurrence and field order.

The source field keeps the canonical selection order:

![Selected posts in an SCF Relationship field](/images/usage-pro/relationship-field.jpg)

## Setup

1. Populate the Relationship or Post Object field on the source object.
2. Create a normal Elementor Loop Item for the related post type.
3. Add a Loop Grid or Loop Carousel and select that Loop Item.
4. In **Query**, enable **Use ACF Rows**. The **ACF Row Source** may remain empty for a Relationship Query.
5. Enable **Use ACF Relationship**.
6. Select the **ACF Relationship Field**. Deep sources are displayed as their complete structural path.
7. Leave **Query Current Post Only** enabled when the current page or post owns the field. Disable it only when the widget should resolve fields from every post in Elementor's base query.
8. If needed, choose another [Repeater Context](/contexts) for the object that owns the field.

The query sets `post_type` to any, limits results to the selected IDs, and orders them by the field selection order.

![Relationship Query controls in Elementor](/images/usage-pro/relationship-controls.jpg)

## Ordering and pagination

The plugin preserves the order stored by SCF/ACF through Elementor's `post__in` query order.

When a path crosses multiple Repeater or Flexible Content rows, selections are flattened in source order. If the same post is selected more than once, its first occurrence determines its position.

Elementor's own `posts_per_page` and pagination settings still apply, including when **Query Current Post Only** is enabled. If the field contains twelve posts and the widget is limited to six, only six render on that page. Increase the widget limit or configure pagination when the complete selection should be reachable.

## Relationship Query versus URL tag

These are different features:

| Goal | Feature |
| --- | --- |
| Render selected posts as Loop Items | Relationship Query |
| Turn a Relationship/Post Object value inside a Repeater row into a link | ACF Repeater URL dynamic tag |

There is no dedicated **ACF Repeater Relationship** dynamic tag.

## Empty results

An empty or invalid field intentionally produces no matching posts. If a configured Relationship query shows unrelated posts, confirm the selected source field and context before checking Elementor's normal query settings.
