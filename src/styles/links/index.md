---
layout: collection-page.njk
title: Links
group: styles
---

{% from "_example.njk" import example %}

Links are blue and underlined by default. Visited links should be purple.

If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.

{{ example({ group: "styles", item: "links", example: "plain-link", html: true, nunjucks: false, open: false, size: "xxs" }) }}

For links within page elements that are consistent across a service (for example, headers, footers and sidebars) you may not wish to have the purple visited state.

{{ example({ group: "styles", item: "links", example: "link-no-visited", html: true, nunjucks: false, open: false, size: "xxs" }) }}

Link colours on different background types and in different themes have been included in `tna-frontend`. Sometimes black or white links are used. See some examples of how [colours](/design-system/styles/colours/) should be used in National Archive services.

## Links in headings

Links within [heading elements](/design-system/styles/typography/#headings) have an `&rsaquo;` pseudo element added after them. The exception for this is headings within cards.

{{ example({ group: "styles", item: "links", example: "heading-link", html: true, nunjucks: false, open: false, size: "xxs" }) }}
