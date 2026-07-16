---
order: 480
icon: checklist
---

# Repeater Form Options

> **Pro feature:** Requires Dynamic Elementor ACF Repeater Pro.

Pro adds **ACF Repeater Select** to the Elementor Pro Form widget. It turns non-empty values from one Repeater subfield into field choices.

## Setup

1. Add an Elementor Pro Form widget.
2. Add a field and choose **ACF Repeater Select** as its type.
3. Select the Repeater field and its subfield.
4. Choose the display type: Select, Radio, or Checkbox.
5. Configure the normal Elementor label, placeholder, required state, and default value.

## Data source

The form reads the selected Repeater from the current post. If that post has no usable rows, it falls back to the SCF/ACF Options Page.

Each non-empty subfield value becomes both the submitted value and visible label. Duplicate values collapse into one option. Array values are converted into a comma-separated string.

## Display types

| Type | Selection behavior |
| --- | --- |
| Select | Standard dropdown; placeholder supported |
| Radio | One visible choice |
| Checkbox | Multiple visible choices submitted as an array |

## Current limitations

- The option label and submitted value cannot be selected from two different subfields.
- The field does not expose the advanced [Repeater Context](/contexts) selector; it uses current-post then Options fallback behavior.
- Complex object values are intended to be converted to readable strings, not used as complete post or term selectors.

For more control over labels, IDs, or remote data, use Elementor's normal Form fields or a dedicated form-data integration.
