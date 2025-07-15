---
layout: simple-with-nav.njk
title: Component statuses
description: Every component in the National Archives Design System has a status. Learn more about what this means and how to use them.
priority: 0.8
---

## Experimental

> Use experimental components with caution.

Components with an "experimental" status are ones that are still in a proof-of-concept phase.

They might not be properly tested from a progressive enhancement perspective or have the correct accessibility considerations.

## To be reviewed

The "To be reviewed" phase is given to a component that is technically complete but is still awaiting full testing, either from an accessibility audit or browser testing.

These components may also be awaiting integration with our analytics library.

Feel free to use these components in prototypes and live services with the intention to have them fully tested and contribute towards the official status.

## Official

"Official" components are fully tested and ready to use in production. They have been:

- tested in a variety of browsers
- built to work without JavaScript, CSS or JavaScript and CSS
- tested as part of a beta or live service that has had a successful accessibility audit
- validated against HTML5 standards
- integrated into the analytics library where applicable
- fully documented in this design system with examples and variations
- validated using fixtures to allow replication in other templating languages
- tested for integration with the [GOV.UK Prototype Kit](/get-started/prototyping/#html)
- added to the [TNA Frontend Storybook](https://nationalarchives.github.io/tna-frontend/) for reviewing and testing
- added to the [TNA Frontend Jinja macros](https://github.com/nationalarchives/tna-frontend-jinja) package
