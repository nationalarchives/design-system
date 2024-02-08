---
layout: collection-page.njk
title: Images
group: styles
---

{% from "_example.njk" import example %}
{% from "nationalarchives/components/picture/macro.njk" import tnaPicture %}
{% from "nationalarchives/components/card/macro.njk" import tnaCard %}

Use images to provide additional visual context.

## Thumbnails

Use 3:2 aspect ratio images as the default for thumbnails on [card elements](/design-system/components/card/) and [index grid elements](/design-system/components/index-grid/).

Thumbnails should be around 600px wide and 400px tall to ensure they display well across all screen sizes.

{{ example({ group: "styles", item: "images", example: "card", html: false, nunjucks: false, open: false, size: "xl" }) }}

{{ example({ group: "styles", item: "images", example: "index-grid", html: false, nunjucks: false, open: false, size: "xl" }) }}

## Hero elements

As the height of [hero elements](/design-system/components/hero/) is defined by their content, the background image will sometimes be clipped.

For hero elements, try to use an image with a 5:2 aspect ratio with a suggested resolution of 1200px wide and 480px tall.

The hero element can also accept images for other screen sizes so use a 3:2 aspect ratio with a suggested resolution of 600px wide and 400px tall for smaller screens.

{{ example({ group: "styles", item: "images", example: "hero", html: false, nunjucks: false, open: false, size: "xl" }) }}

## Picture elements

[Picture elements](/design-system/components/picture/) need to show the entire image so they are free from aspect ratio restrictions.

Ensure the longest side of the image is no more than 900px.

{{ example({ group: "styles", item: "images", example: "picture", html: false, nunjucks: false, open: false, size: "xl" }) }}

## Formats

Use JPEG as the default format for images. All WebP images must have a JPEG fallback.

For line art and vector images, use SVG.

Use PNGs when transparency is required but avoid overusing due to the larger file size.

### File sizes

Try to keep every image on the page under 100kB. This will help the page to load quickly.

Compress JPEGs and WebPs where possible. The suggested starting compression should be 60% for JPEGs and 80% for WebPs. This will need to be changed based on your images and presentation.

The exception to this would be where you have to show an image in great detail, such as showing a large map or displaying an image in an image viewer with the ability to zoom.
