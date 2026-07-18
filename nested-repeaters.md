# Nested Repeaters

> **Pro feature:** Requires Dynamic ACF Repeater for Elementor Pro.

Version 2.0 can use a Repeater reached through other structural fields. The path may pass through a Repeater, Group, or Flexible Content field before reaching the Repeater whose rows you want to render.

## Supported structures

Examples include:

- `Departments → Team Members`
- `Page Sections → Hero Layout → Call-to-action Links`
- `Company Group → Offices`
- Deeper combinations of Repeater, Group, and Flexible Content paths

The selector stores stable SCF/ACF field keys for the ordered path. Renaming a field label does not break an existing selection, although deleting and recreating a field gives it a new key.

## How rows are resolved

Pro walks the source object in field order and flattens the matching child rows into one ordered list for Elementor. Each output row keeps its source-post and row context so Repeater dynamic tags continue to resolve the correct values.

For example, if three department rows contain two, zero, and four team-member rows, the Loop Grid receives six team-member rows in source order.

## Setup

### 1. Select the Loop Item schema

Create or edit a Loop Item and open **ACF Repeater Loop Settings** in the document settings.

Choose the nested path under **ACF Row Schema for Loop**. Nested options are labeled with their path, such as:

`[Nested Repeater] Departments › Team Members`

Now connect Elementor controls to the child Repeater's subfields with the normal Repeater dynamic tags.

### 2. Select the widget row source

Add a Loop Grid or Loop Carousel and select the Loop Item. In **Query**:

1. Enable **Use ACF Rows**.
2. Choose the same nested path under **ACF Row Source**.
3. Choose the appropriate [Repeater Context](/contexts).
4. Decide whether **Query Current Post Only** should restrict the owner.

### 3. Verify source order and empty parents

Preview a source object with several parent rows. Parent rows without a matching child Repeater contribute no output rows; they do not create empty Loop Items.

## Nested Repeaters inside Flexible Content

A Repeater nested inside a Flexible Content layout can be selected directly as a flattened child-row source. Use this when every child row shares one Loop Item design.

Use the [ACF Flexible Content skin](/flexible-content) instead when the outer layouts themselves should render and each layout needs a different template.

## Troubleshooting schema mismatches

If the widget returns rows but a dynamic tag is blank, verify that:

- The Loop Item schema and widget row source point to the same nested path.
- The Elementor preview object contains at least one matching child row.
- The selected subfield belongs to the terminal Repeater, not a parent row.
- The frontend context owns the same field group structure as the preview object.
