---
order: 900
icon: rocket
---

# Getting Started

This quick start creates one Elementor Loop Grid from a top-level SCF/ACF Repeater. It is the simplest way to verify that the plugin, field group, and Elementor template are connected correctly.

## Before you begin

Install and activate:

- Dynamic Elementor ACF Repeater Free or Pro
- Elementor and Elementor Pro
- Secure Custom Fields (SCF) or Advanced Custom Fields Pro (ACF Pro)

Check the exact minimum versions in [Installation](/installation).

## 1. Create and populate a Repeater

In **SCF/ACF → Field Groups**:

1. Add a field group and create a top-level Repeater field, such as `team_members`.
2. Add a Text subfield named `name` and an Image subfield named `photo`.
3. Assign the field group to a post type or page.
4. Edit a matching post and add at least two rows.

The Loop Item preview cannot show useful values until the selected source object contains rows.

## 2. Create the Loop Item

In **Templates → Theme Builder**, add a **Loop Item** template.

Open the Loop Item document settings and expand **ACF Repeater Loop Settings**:

- Free: choose the field under **ACF Repeater Field for Loop**.
- Pro: choose the row source under **ACF Row Schema for Loop**.

Add Elementor widgets and connect them with dynamic tags:

- Use **ACF Repeater Text** for `name`.
- Use **ACF Repeater Image** for `photo`.
- Use **ACF Repeater Original Post Title** when you need the title of the post that owns the row.

Set Elementor's preview source to the populated post if the editor is blank.

## 3. Add the Loop Grid

Edit the page or template that should display the rows and add Elementor's **Loop Grid** widget.

Select the Loop Item you created, then open **Query**:

- Free: enable **Use ACF Repeater** and select **ACF Repeater Field**.
- Pro: enable **Use ACF Rows** and select **ACF Row Source**.

Leave **Query Current Post Only** enabled for a normal single-post display. Disable it only when you intentionally want to collect rows from the posts returned by the widget's source query.

## 4. Preview the result

Publish or preview the page. Each Repeater row should now render through the same Loop Item template.

If the editor has data but the page does not—or the wrong post's rows appear—work through [Contexts](/contexts) and [Troubleshooting](/troubleshooting).

## Where to go next

- [Top-level Repeater Guide](/usage-guide)
- [Supported Dynamic Tags and Field Types](/field-types)
- [Nested Repeaters](/nested-repeaters) **Pro**
- [Flexible Content](/flexible-content) **Pro**
- [Relationship Queries](/relationship-queries) **Pro**
