---
layout: collection-page.njk
title: Gallery
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Use the gallery component to show a list of images.

{{ example({ group: "components", item: "gallery", example: "default", html: true, nunjucks: true }) }}

{{ status(false, 3, 3, 3, false) }}
