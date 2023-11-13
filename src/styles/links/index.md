---
layout: collection-page.njk
title: Links
group: styles
---

{% from "_example.njk" import example %}

Links are blue and underlined by default.

If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.

{{ example({ group: "styles", item: "links", example: "plain-link", html: true, nunjucks: false, open: false, size: "xxs" }) }}

## Colours

Link colours on different background types and in different themes have been included in `tna-frontend`. Sometimes black or white links are used. See some examples of how [colours](/design-system/styles/colours/) should be used in National Archive services.

Visited links should be purple. This helps users understand what content they have already viewed.

For links within services that are not exploratory (for example, documentation sites) you may not wish to have the purple visited state. This is because users may want to visit the same page multiple times.

{{ example({ group: "styles", item: "links", example: "link-no-visited", html: true, nunjucks: false, open: false, size: "xxs" }) }}

Black or white links can be used for components that appear on every page such as [breadcrumbs](/design-system/components/breadcrumbs/) and the [footer](/design-system/components/footer/) because users will be familiar with links in these locations.

White links can be used in dark areas where the default colour would not provide sufficient contrast.

## Links in headings

Links within [heading elements](/design-system/styles/typography/#headings) have an `&rsaquo;` pseudo element added after them. The exception for this is headings within cards.

{{ example({ group: "styles", item: "links", example: "heading-link", html: true, nunjucks: false, open: false, size: "xxs" }) }}
