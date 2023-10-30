---
layout: collection-page.njk
title: Links
group: styles
---

{% from "_example.njk" import example %}

Links are blue and underlined by default. If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.

{{ example({ group: "styles", item: "links", example: "plain-link", html: true, nunjucks: false, open: false, size: "xxs" }) }}

## Links in headings

Links within [heading elements](/design-system/styles/typography/#headings) have an `&rsaquo;` pseudo element added after them. The exception for this is headings within cards.

{{ example({ group: "styles", item: "links", example: "heading-link", html: true, nunjucks: false, open: false, size: "xxs" }) }}

