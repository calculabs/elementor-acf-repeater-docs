---
order: 530
icon: link
---

# Relationship Queries

> **Pro feature:** Requires Dynamic Elementor ACF Repeater Pro.

Relationship Query changes an Elementor Loop Grid or Loop Carousel from virtual Repeater rows to real WordPress posts selected by an SCF/ACF Relationship or Post Object field.

Use it when the selected posts should render through a normal Elementor Loop Item with standard post data such as title, featured image, terms, and custom fields.

## Supported sources

- A top-level Relationship field
- A top-level Post Object field
- A Relationship field nested directly inside a top-level Repeater
- A Post Object field nested directly inside a top-level Repeater

The nested Relationship workflow collects selections across the parent Repeater rows.

## Setup

1. Populate the Relationship or Post Object field on the source object.
2. Create a normal Elementor Loop Item for the related post type.
3. Add a Loop Grid or Loop Carousel and select that Loop Item.
4. In **Query**, enable the ACF Relationship query option.
5. Select the Relationship or Post Object field.
6. Choose the correct [Repeater Context](/contexts) for the object that owns the field.

The query sets `post_type` to any, limits results to the selected IDs, and orders them by the field selection order.

## Ordering and pagination

The plugin preserves the order stored by SCF/ACF through Elementor's `post__in` query order.

Elementor's own `posts_per_page` setting still applies. If the field contains twelve posts and the widget is limited to six, only six render on that page. Increase the widget limit or configure pagination when the complete selection should be reachable.

## Relationship Query versus URL tag

These are different features:

| Goal | Feature |
| --- | --- |
| Render selected posts as Loop Items | Relationship Query |
| Turn a Relationship/Post Object value inside a Repeater row into a link | ACF Repeater URL dynamic tag |

There is no dedicated **ACF Repeater Relationship** dynamic tag.

## Empty results

An empty or invalid field intentionally produces no matching posts. If a configured Relationship query shows unrelated posts, confirm the selected source field and context before checking Elementor's normal query settings.
