---
layout: collection-page.njk
title: Picture
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The picture component can display an image with additional information.

{{ example({ group: "components", item: "picture", example: "default", html: true, nunjucks: true, size: "xxxl" }) }}

{{ status(false, 2, 2, 2, 2, false) }}

## Image sizes

Picture components need to show the entire image so they are free from aspect ratio restrictions.

Ensure the longest side of the image is no more than 900px.
