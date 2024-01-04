---
layout: collection-page.njk
title: Images
group: styles
---

{% from "_example.njk" import example %}
{% from "nationalarchives/components/picture/macro.njk" import tnaPicture %}
{% from "nationalarchives/components/card/macro.njk" import tnaCard %}

Use images to provide useful visual context.

## Thumbnails

Use 3:2 aspect ratio images as the default for thumbnails on [card elements](/design-system/components/card/) and [index grid elements](/design-system/components/index-grid/).

Thumbnails should be around 600px wide and 400px tall to ensure they display well across all screen sizes.

{{ example({ group: "styles", item: "images", example: "card", html: false, nunjucks: false, open: false, size: "xl" }) }}

{{ example({ group: "styles", item: "images", example: "index-grid", html: false, nunjucks: false, open: false, size: "xl" }) }}

## Hero elements

As the height of [hero elements](/design-system/components/hero/) is defined by their content, the background image will sometimes be clipped.

For hero elements without text, use an image with a 3:1 aspect ratio with a suggested resolution of 1200px wide and 400px tall for larger screens.

The hero element can also accept images for other screen sizes so use a 3:2 aspect ratio with a suggested resolution of 600px wide and 400px tall for smaller screens.

{{ example({ group: "styles", item: "images", example: "hero-no-text", html: false, nunjucks: false, open: false, size: "xl" }) }}

For hero elements that contain a title or text, use a 3:2 aspect ratio for all screen sizes and a resolution of around 1200px wide and 800px tall.

{{ example({ group: "styles", item: "images", example: "hero", html: false, nunjucks: false, open: false, size: "xl" }) }}

## Picture elements

[Picture elements](/design-system/components/picture/) need to show the entire image so they are free from aspect ratio restrictions.

Ensure the longest side of the image is no more than 1200px.

{{ example({ group: "styles", item: "images", example: "picture", html: false, nunjucks: false, open: false, size: "xl" }) }}
