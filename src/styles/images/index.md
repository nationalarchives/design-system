---
layout: collection-page.njk
title: Images
description: Use images to provide additional visual context.
group: styles
---

{% from "partials/example.njk" import example %}

## Formats

Use JPEG as the default format for images. All WebP images must have a JPEG fallback.

For line art and vector images, use SVG.

Use PNGs when transparency is required but avoid overusing due to the larger file size.

## File sizes

Try to keep each image on the page under 100kB. This will help the page to load quickly.

Compress JPEGs and WebPs where possible. The suggested starting compression should be 60% for JPEGs and 80% for WebPs. This will need to be changed based on your images and presentation.

The exception to this would be where you have to show an image in great detail, such as showing a large map or displaying an image in an image viewer with the ability to zoom.
