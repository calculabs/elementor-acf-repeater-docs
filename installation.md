# Installation and Requirements

## Requirements

| Component | Minimum | Tested with the 2.0 release |
| --- | --- | --- |
| WordPress | 6.0 | 7.0 |
| PHP | 7.4 | Current supported PHP releases |
| Elementor | 3.8 | 4.1.5 |
| Elementor Pro | 3.8 | 4.1.3 |
| Secure Custom Fields | Supported | 6.9.1 |
| Advanced Custom Fields Pro | Supported alternative | 6.3.12 |

You need **either Secure Custom Fields (SCF) or Advanced Custom Fields Pro (ACF Pro)**. A Repeater-capable field plugin is required because WordPress core and the free edition of ACF do not provide the Repeater field used by this plugin.

Elementor Pro is required because the integration targets Elementor's Loop Grid and Loop Carousel widgets.

## Install the Free version

1. In WordPress, open **Plugins → Add New Plugin**.
2. Search for **Dynamic Elementor ACF Repeater**.
3. Install and activate it.
4. Confirm that Elementor Pro and SCF or ACF Pro are also active.

You can also download the release from the [WordPress Plugin Directory](https://wordpress.org/plugins/dynamic-elementor-acf-repeater/) and upload the ZIP through **Plugins → Add New Plugin → Upload Plugin**.

## Install the Pro version

1. Download the Pro ZIP supplied through Freemius.
2. In WordPress, open **Plugins → Add New Plugin → Upload Plugin**.
3. Upload the ZIP, install it, and activate it.
4. Complete the Freemius license prompt or use **Change License** on the Plugins screen.

The Pro package replaces the Free package; do not keep two separately named copies active. On the Plugins screen, the paid build should identify itself as **Dynamic Elementor ACF Repeater PRO** and expose the Freemius license actions.

## Verify the installation

Create or edit an Elementor Loop Item and open its document settings. You should see **ACF Repeater Loop Settings**.

Then edit a Loop Grid and open **Query**:

- Free shows **Use ACF Repeater**.
- Pro shows **Use ACF Rows**, plus the applicable Pro controls.

If those controls do not appear, confirm all required plugins are active and review [Troubleshooting](/troubleshooting).

## Updating

Free updates come from WordPress.org. Licensed Pro sites receive updates through Freemius.

After an update, a stale Elementor editor can continue serving old JavaScript or generated CSS. If controls or previews behave like an older version, reload the editor without cache and use Elementor's **Clear Files & Data** tool. See [Troubleshooting](/troubleshooting#stale-editor-assets-or-styles).
