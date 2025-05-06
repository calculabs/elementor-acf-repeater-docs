---
order: 600
icon: book
---

# Usage Guide Pro

This guide covers the additional features available in the Pro version of Dynamic Elementor ACF Repeater.

Start your 3-day free trial of the Pro version to unlock all features. [Start Your Free Trial](https://checkout.freemius.com/mode/dialog/plugin/16334/plan/27245/?trial=paid)

## Lightbox and Swiper Configuration

1. Find the "Lightbox" section in Loop Grid widget settings
2. Enable the lightbox and swiper features
![Enable Lightbox](/images/usage-pro/enable-lightbox.jpg){ width=400 }
3. Customize lightbox appearance:

### Repeater Lightbox Style
- **Content Width**: Adjust the width of lightbox content (default: 80%)
- **Content Height**: Set the height of lightbox content (default: 80%)
- **Maximum Content Width**: Define maximum width in pixels (default: 1920px)
- **Lightbox Background**: Choose background color for the lightbox overlay
- **Content Padding**: Set padding for top, right, bottom, and left
- **Swiper Navigation Color**: Customize the color of navigation arrows
- **Swiper Navigation Size**: Adjust the size of navigation arrows
- **Lightbox Close Icon Color**: Set the color of the close button
- **Lightbox Close Icon Size**: Adjust the size of the close button

![Style Lightbox](/images/usage-pro/style-lightbox.jpg)

## Element Visibility Control

Control how elements appear in different contexts:

1. Select any dynamic repeater element in your Loop Item template
2. Open the Content tab
3. Find the "Repeater Lightbox Visibility" section
4. Choose from:
   - Default: Visible everywhere
   - Hide in Lightbox: Only visible in loop grid
   - Show Only in Lightbox: Hidden in loop grid, visible in lightbox

!!! Element Visibility Control
Useful if you want to display elements in one place but not another, for example a button in the grid which you don't want to show in the lightbox. 
!!!

![Style Lightbox](/images/usage-pro/repeater-lightbox-visibility.jpg)


## Advanced Filtering

Set up dynamic filtering for your Loop Grid:

### Basic Setup
1. In Loop Grid settings, find the "Filter" section
2. Enable filtering
3. Select filter source:
   - ACF field values
   - Custom taxonomies
   - Post meta

### Custom Taxonomy Filtering

The Custom Taxonomy Filter lets you filter your Loop Grid items using WordPress taxonomies (like categories, tags, or custom taxonomies). 

!!! Choosing Between Filter Types
**Parent Post Taxonomy Filter (Default):**
- Works across multiple posts
- Shows all taxonomy terms used by posts containing your repeater field
- Filters entire groups of repeater items together (all items from same post)
- Perfect for portfolio sites where each project (post) has multiple gallery items

**Repeater Field Taxonomy Filter (Optional):**
- Works with individual repeater items
- Can be used with a single post
- Each repeater item can have its own taxonomy terms
- Better for catalogs where each item needs individual categorization
!!!

### How It Works

#### Default: Parent Post Taxonomy
By default, the filter uses taxonomy terms from the parent posts containing your repeater field.

**Process:**
1. The filter collects all taxonomy terms from posts that have your repeater field
2. When users select a term, it shows repeater items from posts with that term
3. All repeater items from the same post are filtered together

#### Optional: Repeater Field Taxonomy
Enable "Use Repeater Taxonomy Field" to filter using taxonomy terms stored in your repeater field instead.

**Process:**
1. Choose a taxonomy (e.g., categories, tags)
2. Select which repeater field contains your taxonomy terms
3. Filter shows terms from the selected repeater field
4. Items are filtered based on their individual taxonomy values

### Display Options

Choose how users will interact with your filters:

1. **Dropdown Menu**
   - Clean, compact select menu
   - Good for lots of terms
   - Mobile-friendly
   ![Dropdown Filter Example](/images/usage-pro/filter-dropdown.jpg)

2. **Checkbox List**
   - Select multiple terms
   - All options visible
   - Great for multiple selections
   ![Checkbox Filter Example](/images/usage-pro/filter-checkbox.jpg)

3. **Navigation Buttons**
   - Button-style interface
   - Easy to click
   - Best for few terms
   ![Navigation Filter Example](/images/usage-pro/filter-navigation.jpg)

### Setup Steps

1. Enable the Filter:
   - Go to Loop Grid settings
   - Find the "Repeater Filter" section
   - Enable "Custom Taxonomy Filter"

2. Configure Filter:
   - Select which taxonomy to filter by (this will use parent post terms by default)
   - Choose your display style (dropdown/checkbox/navigation)
   - To use repeater field terms instead: Enable "Use Repeater Taxonomy Field" and select your repeater's taxonomy field

3. Customize Display:
   - Show/hide "All" option
   - Customize "All" text
   - Set filter alignment
   - Choose horizontal/vertical layout
   - Adjust spacing and margins

4. Style Your Filter:
   - Set colors and typography
   - Customize padding and margins
   - Style active/hover states
   - Adjust border and radius

### Common Applications and Examples

#### Using Default Parent Post Taxonomy
Perfect when you have multiple posts and want to filter groups of repeater items:

1. **Portfolio Websites**
   - **Example:** A photography website with multiple project posts
   - Each project post is tagged (Wedding, Corporate, Events)
   - Each project contains multiple photos in a repeater
   - Filtering by "Wedding" shows all photos from wedding projects
   - All photos from the same project are filtered together

2. **Real Estate Listings**
   - **Example:** A property listing website
   - Properties (posts) tagged by location and type
   - Each property has multiple images in a repeater
   - Filter entire property galleries by "Beachfront" or "City Center"
   - All images from the same property show/hide together

#### Using Repeater Field Taxonomy
Enable this when individual repeater items need their own taxonomy terms:

1. **Product Catalogs**
   - **Example:** A fashion store catalog
   - One post contains the entire season's collection
   - Each product in repeater has its own categories
   - Filter individual items by "Men's", "Women's", "Accessories"
   - Products can be filtered independently

2. **Document Libraries**
   - **Example:** A resource center
   - One post holds all company documents
   - Each document in repeater has topic tags
   - Filter by department or document type
   - Documents filter based on their own classifications

## ACF Relationship Query

The ACF Relationship Query feature allows you to display related content from across your site within your Loop Grid. This powerful feature helps you create dynamic content relationships and display them in your Elementor templates.

### Prerequisites
- ACF Relationship field configured in your field group
- Pro version of Dynamic Elementor ACF Repeater
- Loop Grid widget with ACF Repeater enabled

### Setting Up Relationship Queries

1. Open your Loop Grid widget settings
2. Find the "ACF Relationship" section
3. Enable "Use ACF Relationship"
4. Select your relationship field from the dropdown

![ACF Relationship Settings](/images/usage-pro/relationship-query.jpg)

### How It Works

When you enable relationship queries:
- The Loop Grid automatically queries all related posts
- Displays content based on your relationship field selections
- Works with any post type (posts, pages, custom post types)
- Shows all related posts without pagination
- Maintains relationships configured in ACF

!!! Relationship Queries
Your Loop Grid will now display related posts instead of regular repeater items. This is perfect for showing associated content like related products, team members, or linked resources.
!!!

### Common Use Cases

1. **Related Content**
   - Display related posts or articles
   - Show associated products
   - List team members by department

2. **Content Relationships**
   - Link projects to team members
   - Connect services to case studies
   - Associate events with venues

3. **Dynamic Collections**
   - Create featured content sections
   - Build cross-referenced galleries
   - Display linked resources

### Tips for Relationship Queries

- Use ACF's interface to manage content relationships
- Combine with visibility controls for flexible displays
- Mix with filtering for advanced content organization
- Leverage dynamic tags to show related post data

## Pro Field Types Support

The pro version adds support for these additional ACF field types:

### File Fields
- Add document downloads to your loops
- Display file type icons
- Show file size and download count
- Preview documents inline

### Gallery Fields
- Display multiple images in a grid or slider
- Enable lightbox for gallery items
- Configure gallery layouts and spacing
- Add hover effects and animations

### Relationship Fields
- Display related content from other posts
- Link to connected entries
- Show relationship field data in your loops
- Create complex content relationships

## Pro Tips

- Use visibility control to create different experiences in grid vs lightbox
- Combine slider with lightbox for image galleries
- Set up multiple filters for complex content organization
- Utilize relationship fields for connected content displays 