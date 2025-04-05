---
order: 300
icon: book
---

# Usage Guide

This guide will walk you through the complete process of setting up and using the Dynamic Elementor ACF Repeater plugin.

## Step 1: Create an ACF Repeater Field

1. Navigate to Custom Fields > Add New
2. Create a new field group
3. Add a Repeater field to the group
4. Add sub-fields to the repeater (e.g., text, image, etc.)
5. Set the location rules for where this field group should appear

## Step 2: Populate the Repeater Fields

1. Edit a post or custom post type where your ACF Repeater field is available
2. Locate the ACF Repeater field in the editor
3. Add entries to the repeater, filling out the sub-fields as needed
4. Update or publish the post to save your changes

## Step 3: Create a Loop Item Template

!!! Creating Loop Items
Before adding dynamic content, you must select the ACF Repeater field in the Elementor Loop Item Page Settings
!!!

1. In Elementor, go to Templates > Add New > Loop Item
2. Open the Elementor Page Settings panel
3. Look for the "ACF Repeater" section
4. Select the ACF Repeater field you want to use
   - Note: You can only select one repeater field group per template
5. Design your loop item template using Elementor widgets
6. For dynamic content, use the ACF Repeater Dynamic Tags:
   - Edit a widget's settings
   - In the Dynamic Tags menu, look for the "ACF Repeater" section
   - Choose the appropriate tag (e.g., ACF Repeater Text, ACF Repeater Image)
   - Select the specific sub-field you want to display

## Step 4: Set Up the Loop Grid Widget

1. In your Elementor template, add the Loop Grid widget
2. In the Layout section, select your Loop Item template
3. In the widget's Query settings:
   - Toggle on "Use ACF Repeater"
   - Select your ACF Repeater field
   - Choose the post type containing your repeater fields

## Preview and Publish

1. Preview your template to check the ACF Repeater data display
2. Make any necessary adjustments
3. Publish your template when satisfied

## Pro Features Setup

### Lightbox Configuration
Available in Pro version only:

1. Find the "Lightbox" section in Loop Grid widget settings
2. Enable the lightbox feature
3. Customize lightbox settings as needed

### Lightbox Visibility Control
Pro feature for controlling element visibility:

- Default: Visible in both loop and lightbox
- Hide in Lightbox: Hidden when viewed in lightbox
- Show Only in Lightbox: Hidden in loop, visible in lightbox

### Swiper Integration
Pro feature for slider functionality:

1. Locate the "Slider" section in Loop Grid settings
2. Enable the slider feature
3. Adjust slider settings to your preferences

### Filtering Setup
Pro feature for content filtering:

1. Find the "Filter" section in Loop Grid settings
2. Enable filtering
3. Choose the ACF field for filtering
4. Customize filter appearance and behavior

## Tips and Best Practices

- Ensure ACF Repeater fields contain data before previewing
- Multiple ACF Repeater Dynamic Tags can be used in a single template
- Use ACF Repeater Image tag in Image widgets for best results
- Update Loop Item templates when changing ACF Repeater structure
- Utilize Lightbox Visibility Control for dynamic layouts (Pro)

## Supported Field Types

### Free Version
- Text
- Textarea
- Image

### Pro Version
- File
- Gallery
- Relationship
- More field types coming soon 