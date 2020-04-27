# Project 0

Web Programming with Python and JavaScript

## Overview
This website is my personal website in which I have displayed information regarding my personal and professional life.

## Website map
The website contains 5 `HTML` pages, 1 stylesheet written in `SCSS` and compiled with SASS in `CSS`, and 1 `JS` file:
1. index.html - contains information regarding my ocupation, my value proposition, an image of me and my main skills
2. about.html - contains information regarding my core competences and achievements
3. experience.html - contains information regarding my professional experience
4. certifications.html - contains information regarding my formal and informal education
5. contact.html - contains my credentials
6. styles.scss - contains a custom made `style guide`, defining colors, fonts for display elements, as well as `@media` queries for mobile responsiveness. It also contains customization made to `Bootstrap` components.
7. main.js - contains several function for text animation
8. cv folder - contains a CV in `.pdf` form
9. images folder - contains all images used in the website
10. projects folder - contains the projects I've written for obtaining certain certifications displayed on the certifications.html page

## Layout
### Style guide
The style guide is defined in the `styles.scss` which is compiled with `SASS` in the `Terminal`. I have defined colors and fonts both for `desktop` and `mobile` versions.

In the `styles.scss` I have also customized some of the behavior of the `Bootstrap 4` framework.

### Header and footer

The header uses the `Navbar` component from `Bootstrap`, with the text aligned in the center.
The footer uses a grid layout to display my logo / favicon, as well as shortcuts to emphasize on my main experience and skills.
For making the header and footer I have used the `Navbar`, `container` and `grid` components.

### JavaScript
I have used also a few JS functions from Google to animate the subheading from the `Home` page, which now displays my 2 main skill sets.

## Other relevant information
This project serves the purpose of being my current personal homepage, which will be hosted on GitHub at `https://github.com/adrianurdar/adiurdar.github.io` and will be pushed to the Internet to a custom URL which I own `https://adiurdar.com`. The connection is made by setting up the CNAME configuration in my DNS provider's admin panel.