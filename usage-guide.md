---
order: 700
icon: book
---

# Top-level Repeater Guide

This guide covers the stable, backwards-compatible workflow shared by Free and Pro: one top-level SCF/ACF Repeater rendered through an Elementor Loop Item.

## 1. Create the field group

In **SCF/ACF → Field Groups**, create a field group and add a Repeater.

![Create a Repeater field group](/images/usage/create-acf-repeater-fields-group.jpg)

Add the subfields your template needs, then assign the group to the post type or page that will own the rows.

![Assign the field group](/images/usage/assign-to-post-type.jpg)

Edit at least one matching post and populate the Repeater.

![Populate Repeater rows](/images/usage/populate-repeater-fields-on-post.jpg)

## 2. Configure the Loop Item schema

Create an Elementor **Loop Item** template. Before adding dynamic content, open the document settings and expand **ACF Repeater Loop Settings**.

- Free: choose **ACF Repeater Field for Loop**.
- Pro: choose **ACF Row Schema for Loop**.

![Select the Repeater for the Loop Item](/images/usage/select-repeater-field-for-loop.jpg)

This selection tells the editor which subfields belong to the current row. It powers the field selectors shown by the plugin's dynamic tags.

Set Elementor's preview source to a post that contains rows. The preview source affects the editor only; it does not lock the published template to that post.

![Configure the Loop Item preview](/images/usage/configure-preview-settings-for-loop-item.jpg)

## 3. Design with Repeater dynamic tags

Build the Loop Item with normal Elementor widgets and containers.

For text:

1. Open a text-capable Elementor control.
2. Select **Dynamic Tags**.
3. Choose **ACF Repeater Text**.
4. Open the tag settings and select the row subfield.

![Select a Repeater text tag](/images/usage/select-dynamic-repeater-field-tag-text.jpg)

For an image or container background, choose **ACF Repeater Image**.

![Use a Repeater image as a background](/images/usage/select-dynamic-repeater-field-background-image.jpg)

Use **ACF Repeater Original Post Title** to display the title of the post that owns the current row. The complete compatibility table is in [Dynamic Tags and Field Types](/field-types).

## 4. Configure the Loop Grid

Add Elementor's **Loop Grid** widget to a page or template and select the Loop Item.

Open **Query** and enable the plugin's row source:

- Free: **Use ACF Repeater** → **ACF Repeater Field**.
- Pro: **Use ACF Rows** → **ACF Row Source**.

![Use an ACF Repeater query](/images/usage/use-acf-repeater-query.jpg)

### Query Current Post Only

When enabled, the widget reads rows only from the resolved source object—normally the current post. This is the expected setting for a single post, page, or Theme Builder template.

When disabled, Elementor's source query is allowed to return multiple posts and the plugin collects matching rows from those posts. This is useful for a combined directory or archive, but it can produce many more rows than a current-post display.

The source object can also be controlled explicitly. See [Contexts](/contexts).

## 5. Preview and publish

Use the same populated preview page or post you selected while designing the Loop Item, then preview the frontend.

Each Repeater row should render as one instance of the selected Loop Item.

![Populated Loop Grid](/images/usage/see-loop-grid-populated-with-repeaters.jpg)

## Multiple templates and widgets

Both editions can use different Repeater fields in different Loop Item templates.

Free supports one repeater-powered Loop Grid on a rendered page. Pro supports multiple independent repeater-powered Loop Grids and Loop Carousels on the same page.

## Options Page rows

Choose **ACF Options** as the source context when the Repeater is stored on an SCF/ACF Options Page. Automatic context can also fall back to Options when the normal source contains no rows. The exact resolution behavior is documented in [Contexts](/contexts).

## Continue with Pro

- [Nested Repeaters](/nested-repeaters)
- [Flexible Content](/flexible-content)
- [Relationship Queries](/relationship-queries)
- [Taxonomy Filters](/taxonomy-filters)
- [Lightbox](/lightbox)
