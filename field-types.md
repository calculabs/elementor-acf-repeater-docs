# Dynamic Tags and Field Types

Field support is determined by the dynamic tag you select. The plugin passes a value to an Elementor control; it does not manufacture a file card, gallery layout, relationship list, or other visual component.

## Free tags

| Dynamic tag | Compatible SCF/ACF subfield | Typical Elementor target |
| --- | --- | --- |
| ACF Repeater Text | Text, Textarea | Heading, Text Editor, Button text |
| ACF Repeater Image | Image | Image control, background image |
| ACF Repeater Original Post Title | No subfield; reads the row's source post | Heading, Text Editor |

In Free, **ACF Repeater Text** intentionally accepts only Text and Textarea. Other text-like field types require Pro.

## Pro tags

| Dynamic tag | Compatible SCF/ACF subfield |
| --- | --- |
| ACF Repeater Text | Text, Textarea, Number, Email, Password, WYSIWYG, Select, Checkbox, Radio, True/False, oEmbed, Google Map, Date Picker, Date Time Picker, Time Picker, Color Picker |
| ACF Repeater File | File |
| ACF Repeater Gallery | Gallery |
| ACF Repeater URL | Text, Email, Image, File, Page Link, Post Object, Relationship, Taxonomy, URL, Link |
| ACF Repeater Color | Color Picker |
| ACF Repeater Icon | Image or URL |
| ACF Repeater Link Title | Link |
| ACF Repeater Link Target | Link |

The exact output still needs to match the Elementor control receiving it. For example, use the Gallery tag with a gallery-compatible control and the URL tag with a link-compatible control.

## Relationship, Post Object, and Taxonomy fields

These fields have two distinct uses:

1. **As a URL value inside a row:** select the Pro **ACF Repeater URL** tag and point it at a compatible subfield.
2. **As the Loop widget's source posts:** use the Pro **Relationship Query** so Elementor renders the selected WordPress posts through a normal Loop Item.

There is no dedicated **ACF Repeater Relationship** dynamic tag. See [Relationship Queries](/relationship-queries) before choosing a workflow.

## Repeater and Flexible Content fields

Repeater, Flexible Content, and Group fields define row structure; they are not output tags themselves. Pro can traverse those structures to select a [Nested Repeater](/nested-repeaters) or map [Flexible Content](/flexible-content) layouts to Loop Item templates.

## Return formats

SCF/ACF field return settings still matter. Image, File, Link, Relationship, Post Object, and Taxonomy fields can return IDs, arrays, objects, or URLs depending on their configuration. The plugin normalizes the formats supported by each tag, but the safest setup is to choose a return format that also makes sense for the Elementor control you are using.

If a field appears in a selector but renders blank, verify the current row schema, source object, field value, and target control using [Troubleshooting](/troubleshooting).
