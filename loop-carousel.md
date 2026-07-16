# Loop Carousel

> **Pro feature:** Requires Dynamic Elementor ACF Repeater Pro.

Pro can provide SCF/ACF rows to Elementor's classic Loop Carousel in addition to Loop Grid.

## Setup

1. Build and configure the Loop Item schema as described in the [Top-level Repeater Guide](/usage-guide), [Nested Repeater guide](/nested-repeaters), or [Flexible Content guide](/flexible-content).
2. Add Elementor's **Loop Carousel** widget and select the Loop Item.
3. In **Query**, enable **Use ACF Rows**.
4. Select **ACF Row Source** and the appropriate [Repeater Context](/contexts).
5. Configure the carousel layout and breakpoints with Elementor's normal controls.

The plugin supplies the rows; Elementor owns the carousel's slides, responsive settings, and standard navigation.

## Carousel and lightbox navigation

Elementor carousel navigation and Repeater Lightbox navigation are separate:

- Carousel controls move the visible slides on the page.
- **Enable Previous/Next Navigation** under Repeater Lightbox moves between unique items inside the open overlay.

The lightbox deduplicates cloned carousel slides so Elementor's internal looped-slide copies do not appear as extra lightbox items.

## Multiple widgets

Pro supports multiple repeater-powered Loop Grids and Loop Carousels on the same page. Each widget keeps its own source, filter, context, and lightbox state.

## Flexible Content

Flexible Content layout mapping uses the same **ACF Flexible Content** template type when available on the Loop Carousel. Map each layout to a Loop Item and choose the unmapped-layout behavior exactly as you would for a Loop Grid.
