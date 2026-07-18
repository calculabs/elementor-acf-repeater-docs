# Repeater Display Conditions

> **Pro feature:** Requires Dynamic ACF Repeater for Elementor Pro.

Pro registers **ACF Repeater Field** as an Elementor display condition. It evaluates a subfield from the current virtual row, allowing one element in a Loop Item to show or hide based on that row's value.

## Setup

1. Configure the Loop Item's **ACF Repeater Loop Settings** so the editor knows its row schema.
2. Select the element you want to conditionally display.
3. Open Elementor's display conditions.
4. Add **ACF Repeater Field** from the Other group.
5. Select the row subfield, comparator, and value where applicable.

## Comparators

| Comparator | Result |
| --- | --- |
| Is | The normalized row value exactly equals the entered value |
| Is not | The normalized row value differs from the entered value |
| Is empty | The value is empty, `0`, or `false` |
| Is not empty | The value contains a non-empty value |

Boolean values normalize to `1` or `0`. Numeric values are compared as normalized strings. Use the field's actual stored value rather than its visual label when those differ.

## Example

For a True/False subfield named `featured`, set:

- Field: Featured
- Comparator: Is
- Value: `1`

The element will render only on rows where `featured` is enabled.

## Preview troubleshooting

If the field selector says no Repeater subfields were found, first select the correct schema in the Loop Item document settings and set a populated Elementor preview source. Options Page fields are also discovered when that is the only available source.
