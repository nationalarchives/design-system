---
layout: collection-page.njk
title: Links
description: Link to pages within your service or to external resources.
group: styles
subGroup: typography
---

{% from "partials/example.njk" import example %}

Links are blue and underlined by default.

If your link is at the end of a sentence or paragraph, make sure that the linked text does not include the full stop.

{{ example({ group: "styles", item: "links", example: "plain-link", html: true, nunjucks: false, size: "xxs", openHTML: true }) }}

## Colours

Link colours on different background types and in different themes have been included in [TNA Frontend](https://github.com/nationalarchives/tna-frontend).

Black or white links can be used for components that appear on every page such as [breadcrumbs](../../components/breadcrumbs/) and the [footer](../../components/footer/) because users will be familiar with links in these locations.

White links can be used in dark areas where the default colour would not provide sufficient contrast.

See some examples of how [colours](../colours/) should be used in National Archive services.

### Visited links

Visited links should be purple. This helps users understand what content they have already viewed.

Having styles for visited links can be useful in exploratory services if the user wants to avoid landing on the same page twice.

For links within services such as documentation sites, you may not wish to have the purple visited state. The user may not care if they have already visited a page before and might want to keep visiting the same page multiple times.

Disable the visited style be adding a `tna-link--no-visited-state` class to your links:

{{ example({ group: "styles", item: "links", example: "link-no-visited", html: true, nunjucks: false, size: "xxs", openHTML: true }) }}

## Links in headings

Links within [heading elements](../typography/#headings) have an arrow added after them. This arrow is added automatically when using TNA Frontend.

{{ example({ group: "styles", item: "links", example: "heading-link", html: true, nunjucks: false, size: "xxs", openHTML: true }) }}

## Opening links in new tabs

Follow the advice from GOV.UK on [opening links in a new tab](https://design-system.service.gov.uk/styles/links/#opening-links-in-a-new-tab).

Avoid opening links in a new tab unless not doing so would detriment the user’s experience.

If you need to open a link in a new tab, use the text "(opens in new tab)". Do not use any icons to denote that clicking on the link will open it in a new tab.
