---
order: 200
icon: clock
---

# Changelog

All notable changes to Dynamic Elementor ACF Repeater will be documented in this file.

## [1.0.2] - Bug Fixes and Multiple Loop Grids - 07/20/2025

### Free Version
- Fixed bug that prevented multiple Loop Item templates from properly accessing their selected repeater field in the Loop Item settings
- Improved repeater value retrieval logic
- Note: Multiple Loop Item templates can now be created, but using multiple Loop Grids on the same post requires Pro

### Pro Version
- Added exclusive support for multiple Loop Grid widgets with ACF Repeater fields in the same post
- This Pro-only feature allows combining different repeater field displays on a single page

## [1.0.1] - Filter Improvements - 06/15/2025

### Free Version
- Added new "Query Current Post Only" control to restrict repeater items to the current post
- Improved handling of current post ID in Elementor previews

### Pro Version
- Completely refactored taxonomy filtering system with new state-based architecture
- Added three distinct filter states to improve handling of different filtering scenarios:
  + Current Post Only Mode: For filtering a single post's repeater items from chosen post type
  + All Posts Repeater Mode: For filtering repeater content across multiple posts of chosen post type
  + Standard Taxonomy Mode: For traditional WordPress taxonomy filtering of terms from chosen post type
- Fixed issue with taxonomy filtering by ensuring repeater fields always use current post data
- Better code organization with dedicated classes for filter states and UI components

## [1.0.0] - Initial Release - 04/04/2025

### Added
- Basic integration with Elementor Pro and ACF Pro
- Support for image and text repeater fields in Elementor dynamic tags
- ACF Repeater Text and ACF Repeater Image dynamic tags
- Loop Grid widget integration
- Support for adding repeater images to background image in loop items

### Pro Features Added
- Support for additional ACF field types within repeaters:
  - File fields
  - Gallery fields
  - Relationship fields
- Advanced dynamic tags:
  - ACF Repeater File
  - ACF Repeater Gallery
  - ACF Repeater Relationship
- Lightbox functionality on the loop grid widget
- Swiper integration for lightbox
- Advanced filtering capabilities for Loop Grid items
- Lightbox visibility control for individual elements
- ACF Relationship field support for dynamic content associations

### Requirements
- WordPress 5.8 or higher
- PHP 7.4 or higher
- Elementor Pro
- Advanced Custom Fields Pro (ACF Pro) 