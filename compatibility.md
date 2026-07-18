# Compatibility

## Supported stack

Dynamic ACF Repeater for Elementor 2.2 declares these minimums:

- WordPress 6.0+
- PHP 7.4+
- Elementor 3.8+
- Elementor Pro 3.8+
- Secure Custom Fields (SCF) or Advanced Custom Fields Pro (ACF Pro)

The 2.2 release declares WordPress compatibility through 7.0 and was tested against Elementor 4.1.5, Elementor Pro 4.1.3, ACF Pro 6.3.12, and Secure Custom Fields 6.9.1. Newer releases should be tested on staging before a production update.

## Elementor widgets

Supported:

- Classic Loop Grid
- Classic Loop Carousel **Pro**
- Loop Item templates
- Elementor Pro display conditions **Pro**
- Elementor Pro Form widget **Pro**

Not currently supported:

- Elementor Atomic Elements
- Replacing Elementor's loop widgets with a plugin-owned listing widget

## SCF and ACF Pro

The plugin uses the compatible ACF field APIs exposed by both Secure Custom Fields and Advanced Custom Fields Pro. Activate one Repeater-capable field plugin; running two competing implementations of the same field API is not recommended.

The product name retains “ACF Repeater” for continuity even when Secure Custom Fields supplies the field data.

## Free and Pro packaging

The paid Freemius build includes the base plugin plus Pro-only code. It should identify as **Dynamic ACF Repeater for Elementor PRO** on the Plugins screen. The WordPress.org build must not expose phantom Pro identity or paid-only code.

Do not rename the installed plugin directory or main PHP file. WordPress and Freemius use that identity for updates and licensing.

## Caching and optimization

The editor and frontend use JavaScript plus Elementor-generated CSS. After an update, clear Elementor files/data and any page, object, CDN, or asset-optimization cache that can retain old markup or script URLs.

Optimization tools that delay or combine JavaScript should be tested with filters, carousels, and lightbox interactions. Exclude the plugin's frontend scripts if an optimizer changes their execution order.
