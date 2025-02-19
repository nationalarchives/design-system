---
layout: collection-page.njk
title: Card
description: Use the card component for providing previews to articles and pages.
group: components
statusProduction: true
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "card", example: "default", html: true, nunjucks: true, size: "xl" }, 2) }}

{% include "partials/component-status.njk" %}

## Coloured cards

Cards can be one of three additional styles; `contrast`, `tint` and `accent`. Use different styles to direct user's attention and provide visual distinction.

{{ example({ group: "components", item: "card", example: "colours", html: true, nunjucks: true, size: "xl", noPadding: true }) }}

## Fully clickable

By default, if there is a link defined then the card title and image are clickable. If you have a large number of cards, it may be easier to allow users to click anywhere on the card with `fullAreaClick`.

{{ example({ group: "components", item: "card", example: "full-click", html: true, nunjucks: true, size: "xl", noPadding: true }) }}

## Horizontal

Use larger horizontal cards to draw attention to a specific article.

You can use smaller images to make the cards smaller with `horizontalSmallImage`.

If some cards in the list have images and others don't, consider aligning the images to the right with `horizontalFlipped`. This will keep all the text in the cards aligned.

Horizontal cards generally benefit from using one of the [different card colours](#coloured-cards) to create boundaries.

{{ example({ group: "components", item: "card", example: "horizontal", html: true, nunjucks: true, size: "xxxxl" }) }}

## Images

Use 3:2 aspect ratio images as the default for card components.

Single images should be around 600px wide and 400px tall to ensure they display well across all screen sizes.

You can use `imageSources` to define a list of different resolutions and screen widths to make responsive card images.

When cards are far enough down the page, you can wait to load the image until the user scrolls close enough. This is called lazy loading and can be enabled with `lazyImage`. Lazily loading images will help speed up the load time of your page.

### Cards with no images

Card images are optional and pages with a lot of cards could benefit from using cards without images.

{{ example({ group: "components", item: "card", example: "no-images", html: true, nunjucks: true, size: "l", noPadding: true }) }}

## Meta information

Add additional bits of small information to the card with meta.

Keep the meta information short and enhance with icons if necessary.

{{ example({ group: "components", item: "card", example: "meta", html: true, nunjucks: true, size: "xl" }, 2) }}

## Actions

Cards can have a list of "actions" which are displayed as links at the bottom of the card.

Cards with actions should not also have an `href` property.

{{ example({ group: "components", item: "card", example: "actions", html: true, nunjucks: true, size: "m" }, 2) }}
