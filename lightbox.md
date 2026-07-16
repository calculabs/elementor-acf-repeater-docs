# Repeater Lightbox

> **Pro feature:** Requires Dynamic Elementor ACF Repeater Pro.

The Repeater Lightbox opens a clone of the selected Loop Item in an overlay. The content is exactly the Elementor Loop Item you designed, subject only to lightbox visibility settings.

The plugin does not add a visible open button, card background, heading, or content panel to each grid item.

## Enable the lightbox

Select a repeater-powered Loop Grid or Loop Carousel and open **Repeater Lightbox**:

1. Enable **Lightbox**.
2. Optionally enable **Previous/Next Navigation**.
3. Open **Style → Repeater Lightbox Style** to size and style the overlay.

With previous/next navigation disabled, each item opens independently. When enabled and more than one unique item exists, arrow controls and the keyboard Left/Right Arrow keys move through the rendered items.

## How items open

A click on a non-interactive area of the Loop Item opens the lightbox. Existing interactive elements—links, buttons, form fields, labels, summaries, and other controls—keep their normal behavior and do not trigger it.

This preserves the user's template markup and avoids an injected trigger element.

## Style controls

The lightbox exposes responsive controls for:

- Content Width
- Content Height
- Maximum Content Width
- Lightbox Background, which styles the overlay
- Content Padding
- Navigation Color and Size
- Close Icon Color and Size

The cloned Loop Item remains responsible for its own background, border, typography, internal spacing, and responsive design.

Content height is applied to the cloned top-level Loop Item as well as the lightbox content wrapper. This matters for Loop Items whose full-height design uses a container background image.

## Element visibility

Select an element inside the Loop Item and use **Repeater Lightbox Visibility**:

- **Show in Both** keeps the element in the grid and lightbox.
- **Hide in Lightbox** removes it from the cloned lightbox item.
- **Show Only in Lightbox** hides it in the grid and reveals it in the clone.

![Choose where a Loop Item element is visible](/images/usage-pro/repeater-lightbox-visibility.jpg)

Use this for supporting copy or controls that belong only in one context—not to replace the whole Loop Item design.

## Editor preview

The lightbox can be opened in the Elementor editor so you can adjust its controls while seeing the clone. Style values are synchronized while the overlay is open, including responsive width and height changes.

If the editor displays a stale button, white panel, or old dimensions after an update, it is serving obsolete runtime assets. Clear Elementor files/data, hard-refresh the editor, and verify the current plugin version. See [Stale editor assets or styles](/troubleshooting#stale-editor-assets-or-styles).

## Accessibility behavior

- The overlay uses dialog semantics and moves focus to the Close control.
- Escape closes the lightbox.
- Focus is kept inside the open dialog.
- Closing returns focus to the opened item when it is still present.
- Duplicate element IDs and their references are remapped in the clone.

The Loop Item itself should still use accessible headings, link text, labels, contrast, and focus styles.
