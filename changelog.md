# Changelog

This documentation tracks released plugin behavior. Versions are listed without invented release dates.

## 2.0.0

### Relationship queries **Pro**

- Preserved Elementor posts-per-page and pagination when resolving Relationship or Post Object fields from the current SCF/ACF object.
- Kept selected posts in field order without routing them through Repeater virtual-row pagination.

### Nested row sources **Pro**

- Added stable field-key paths for Repeaters nested inside Repeaters, Flexible Content layouts, and Group fields.
- Flattened matching child rows in source order while preserving their complete row/index path and formatted SCF/ACF values.
- Kept existing top-level Repeater widget settings and saved Loop Items backwards compatible.

### Flexible Content templates **Pro**

- Added the **ACF Flexible Content** skin to Loop Grid and Loop Carousel.
- Added one opt-in Loop Item mapping control for each discovered Flexible Content layout.
- Added explicit default-template fallback and skip-unmapped behavior without inserting frontend buttons, panels, or other visual markup.
- Suspended Elementor's position-based Alternate Templates only while the data-driven skin renders, then restored the saved setting.

### Elementor editor

- Added row-schema choices for nested Repeaters and individual Flexible Content layouts in Loop Item document settings.
- Limited dynamic-tag field choices to the selected layout schema.
- Added representative nested/layout values to Loop Item editor previews through the same resolver used on the frontend.

### Validation

- Added PHPUnit coverage for source discovery, stable selectors, nested path flattening, layout schemas, and virtual-row values.
- Added real WordPress browser coverage for per-layout output, nested rows, mapping controls, and Loop Item preview data.

## 1.2.1

### Lightbox visual compatibility

- Removed plugin-generated buttons from Loop Items and removed the editor diagnostic overlay.
- Restored the lightbox to a dim overlay containing the cloned Loop Item, with no generated title, white panel, toolbar, or footer.
- Kept nested links and form controls interactive while non-interactive item clicks open the lightbox.
- Prevented site-wide button styles from adding backgrounds, borders, or rounded shapes to close and previous/next controls.

### Elementor editor

- Applied width, height, padding, overlay, navigation, and close-control changes to an already-open lightbox preview.
- Restored Content Height sizing on the cloned Loop Item and its background-bearing Elementor root.
- Preserved Loop Carousel item deduplication and editor document-handle access without adding template markup.

### Packaging

- Kept the Freemius source header neutral while identifying licensed premium installs as PRO without duplicating the suffix.

## 1.2.0

- Added Automatic, Current Post, Queried Object, and Options contexts to Free.
- Added Current User and explicit post, user, taxonomy-term, or Options contexts to Pro.
- Restored lightbox opening in AJAX-rendered Loop Grid and Loop Carousel editor previews.
- Restored Pro lightbox Style controls for both loop widgets.
- Preserved non-post SCF/ACF object IDs through virtual rows and signed filter requests.
- Avoided enqueueing frontend dependencies during editor AJAX and REST render responses.
- The visible editor diagnostics and per-item trigger buttons introduced here were removed in 1.2.1.

## 1.1.0

### Security

- Replaced arbitrary public document rendering with signed, expiring render contexts bound to published content and an owned Loop Grid or Loop Carousel widget.
- Blocked anonymous private, draft, password-protected, malformed, and cross-document render requests with controlled REST errors.
- Changed editor REST permissions from generic `edit_posts` checks to `edit_post` checks for the requested document.

### Correctness and Pro improvements

- Removed a site-wide SQL rewrite that stripped `post__not_in` exclusions from unrelated queries.
- Added request-local, collision-safe virtual row IDs and row-level pagination for current-object Repeaters.
- Fixed empty Relationship queries, preserved Relationship field order, and corrected multi-term OR filtering.
- Corrected media, URL, Relationship, Taxonomy, and multi-value dynamic-tag formatting.
- Scoped multiple filters to their owning widget and prevented stale responses from replacing newer results.
- Consolidated feature registration behind the active Freemius entitlement and updated Freemius SDK to 2.13.4.
- Expanded automated Free/Pro package-boundary, PHPUnit, WordPress runtime, and Playwright coverage.

## 1.0.91

- Fixed a visual overflow regression in Free and Pro.

## 1.0.9

- Fixed Pro registration for the ACF Repeater Form options field.
- Added general Free and Pro stability improvements.

## 1.0.8

- Added the Pro **ACF Repeater Select** Elementor Form field with dropdown, radio, and checkbox presentation.
- Added Relationship and Post Object query support for fields directly inside a top-level Repeater.
- Normalized nested Relationship results to post IDs.

## 1.0.7

- Added Pro support for ACF Link fields with URL, Link Title, and Link Target tags.
- Added Pro Color and Icon tags.
- Improved Gallery normalization for IDs, URLs, arrays, and objects.

## 1.0.6

- Added drag ordering for taxonomy filter terms, instant updates, and an optional deep-link URL.
- Added the Pro **ACF Repeater Field** display condition.
- Fixed default-filter active styles and custom filter parameter names.
- Added Number support to the Pro Text tag.

## 1.0.5

- Fixed lightbox element-visibility flicker in Pro.

## 1.0.4

- Fixed taxonomy filters for Options Page Repeaters and array-based Taxonomy subfield values.
- Added custom URL parameters, empty-term display, default terms, filter dividers, term descriptions, and expanded filter style controls.

## 1.0.3

- Fixed the Free Loop Grid limit that showed only the first ten Repeater rows.
- Added the Options Page fallback when the current post has no rows.
- Added Pro Loop Carousel support.

## 1.0.2

- Fixed multiple Loop Item templates so each could access its selected Repeater field.
- Improved Repeater value retrieval.
- Added Pro support for multiple repeater-powered Loop Grids on one page.

## 1.0.1

- Added **Query Current Post Only** and improved editor preview post handling.
- Refactored Pro taxonomy filtering for current-post rows, aggregate Repeater rows, and parent-post taxonomy states.

## 1.0.0

- Initial Elementor Loop Grid integration for top-level SCF/ACF Repeater rows.
- Added Free Text, Image, Original Post Title, and background-image workflows.
- Added the first Pro media, Relationship-query, lightbox, taxonomy-filter, and visibility capabilities.
