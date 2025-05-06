---
order: 700
icon: book
---

# Usage Guide

This guide will walk you through the complete process of setting up and using the Dynamic Elementor ACF Repeater plugin.

## Step 1: Create an ACF Repeater Field

1. Navigate to Custom Fields > Add New
2. Create a new field group
![Creating ACF Repeater Field Group](/images/usage/create-acf-repeater-fields-group.jpg)

3. Add a Repeater field to the group
4. Add sub-fields to the repeater (e.g., text, image, etc.)
5. Set the location rules for where this field group should appear
![Assign to Post Type](/images/usage/assign-to-post-type.jpg)

## Step 2: Populate the Repeater Fields

1. Edit a post or custom post type where your ACF Repeater field is available
2. Locate the ACF Repeater field in the editor and add entries to the repeater, filling out the sub-fields as needed
![Populate Repeater Fields](/images/usage/populate-repeater-fields-on-post.jpg)

## Step 3: Create a Loop Item Template

!!! Creating Loop Items
Before adding dynamic content, you must select the ACF Repeater field in the Elementor Loop Item Page Settings
!!!

1. In Elementor, go to Templates > Add New > Loop Item
2. Open the Elementor Settings panel and look for the "ACF Repeater Loop Items" section
3. Select the ACF Repeater field group you want to use.
![Select Repeater Field](/images/usage/select-repeater-field-for-loop.jpg){ width=400 }

4. Configure the preview settings for the loop item
![Configure Preview Settings](/images/usage/configure-preview-settings-for-loop-item.jpg){ width=400 }

5. Build and design your loop item template using Elementor widgets
6. Use the ACF Repeater Dynamic Tags to assign your repeater fields:

### Using Dynamic Tags

#### Text and Content Fields
When working with text-based content:
1. Edit any text widget in your template
2. Click the Dynamic Tags icon
3. Look for the "ACF Repeater" section
4. Choose "ACF Repeater Text" and select your field
![Select Dynamic Tag for Text](/images/usage/select-dynamic-repeater-field-tag-text.jpg)

#### Images and Backgrounds
For image content or background images:
1. For regular images, use the Image widget with ACF Repeater Image tag
2. For background images on sections or containers:
![Select Dynamic Tag for Background](/images/usage/select-dynamic-repeater-field-background-image.jpg)

#### Original Post Title
To display the title of the post containing the repeater field:
1. Edit any text widget in your template
2. Click the Dynamic Tags icon
3. Look for "ACF Repeater Original Post Title" under the ACF section
4. Select it to display the original post's title

## Step 4: Set Up the Loop Grid Widget

1. In your Elementor template, add the Loop Grid widget and select your Loop Item template in the layout section.

2. Configure the grid preview settings
![Set Grid Preview](/images/usage/set-grid-preview.jpg){ width=400 }

3. In the widget's Query settings:
   - Toggle on "Use ACF Repeater"
   - Select your ACF Repeater field
   - In source, select the post type containing your repeater fields
   - Choose "Query Current Post Only" setting:
     - **Enabled (default)**: Only shows repeater fields from the current post being viewed. Good for single post templates. 
     - **Disabled**: Displays repeater fields from all posts of the selected source type, allowing you to create collections or galleries from multiple posts
![Use ACF Repeater Query](/images/usage/use-acf-repeater-query.jpg){ width=400 }

4. Set display conditions as needed
![Set Display Conditions](/images/usage/set-display-conditions.jpg)

## Final Result

Once properly configured, your Loop Grid will display all your repeater items using your custom template:

![Loop Grid with Repeaters](/images/usage/see-loop-grid-populated-with-repeaters.jpg)

## Preview and Publish

1. Preview your template to check the ACF Repeater data display
2. Make any necessary adjustments
3. Publish your template when satisfied