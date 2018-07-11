# Professional Portfolio

### WISHLIST
* [ ] Stretchy: In contacts section, either a contact form or arrow that points down to the email link.
* [ ] Super Stretch: Comment section for the blog?; Side Bar with links to favorite posts
* [ ] Links page with my favorite coding sites grouped by types

#### Carousel Idea
 * Pressing on the smaller portfolio photo links to multiple images while a description slides up from the bottom?

## Overview
* [x] Create a portfolio site highlighting your work that can be shared with potential employers. Focus first on building a good structure, then later style and lay out with with CSS.

## Tasks
First, set up your _username_.github.io site as per the instructions at https://pages.github.com.

### Build the document structure
* Create a main page (`index.html`) representing a professional portfolio, including the following:

  * an appropriate `<header>` element
  * a `<nav>` element linking to each of the sections
  * an `<h1>` element with your page title (there can be only one)
  * a `<section>` element for each of the following, each of which should contain an appropriate heading element:
    * About Me, consisting of:
      * brief biographical information
      * photo
      * contact information
      * links to your professional networking site profiles, including at least GitHub and LinkedIn
      * list of skills

      Include whatever other information you consider pertinent.

    * Projects, consisting of at least three, each represented as an `<article>`
      * name of project, linked to GitHub repository or the repository/project’s GitHub Pages
      * screenshot
      * skills / technologies used

      Don’t worry that your available projects are limited now. You’ll have time to increase the size of your portfolio.

  * an appropriate `<footer>` element
### Lay out and style your portfolio
* Assign ids/classes to sections/etc, then use css grid to lay out your page. Reference MDN and this tutorial to work out how to use grid: http://cssgridgarden.com/
*  To contain the elements of your grid, you will want to create a `<div>`, something like `<div id="container">...</div>`.
* Create CSS rules to style page elements appropriately.
### Using online resources
Any resources (images, etc) you use should be:

* free for non-commercial use
* copied to your repository and referenced there rather than via a uri pointing to another site
## Rubric
## Tips
* Section ids can be used to create anchors linking to those sections inside the page.
* See the appropriate Mozilla Developer Network reference pages for guidance regarding tag usage:
  * <header>
  * <nav>
  * <section>
  * <article>
  * <footer>

# Profesional Portfolio with JS (Module 8)
## Overview
* [x] Upgrade your professional portfolio to include JS content. (No frameworks.)

## Tasks
All requirements from iteration one of this project should still be there. _You are encouraged to make a multi page site this time around_.

### Additions to your site
* [x] Add an image carousel. This can be a carousel of screenshots of your projects (perhaps they link to your projects)
* [x] Add a button in your navigation that will toggle the visibility of your actual site navigation.
* [ ] Add a button and collapsable description to your portfolio projects so when the user clicks the button the descriptions expand and collapse
* [x] Create a modal box that pops up with your bio information whenever a button or link is pressed
### Stretch Goals
* [x] Change layout with media queries based on viewport width. Feel free to use other specific media rules but base media queries should be based on viewport width. (Most common)
* [x] Have the dropdown navigation menu only when at smaller viewports and the full navigation when at larger viewports _My menu is a smaller width when on a larger screen and_
_goes full width for smaller screens._

## [Rubric](https://wecancodeit.github.io/java-exercises/js-professional-portfolio/rubric.html)
## Tips
  * Remember to look at Stack Overflow and Google problems when you have them.
  * Mozilla Developer Network: JavaScript
