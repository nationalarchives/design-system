---
layout: collection-page.njk
title: Index grid
description: Use the index grid component to display a grid of links such as displaying a list of all child pages in a hierarchy.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The index grid includes a `tna-container` element so doesn’t need to be used within a column system.

{{ example({ group: "components", item: "index-grid", example: "default", html: true, nunjucks: true, size: "xxxl" }, 2) }}

{{ status(true, 0, 1, 2, 0, false) }}

## Images

Use 3:2 aspect ratio images as the default for thumbnails on index grid items.

Thumbnails should be around 600px wide and 400px tall to ensure they display well across all screen sizes.
