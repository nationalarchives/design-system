---
layout: collection-page.njk
title: Gallery
description: Use the gallery component to show a list of images.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "gallery", example: "default", html: true, nunjucks: true, size: "xxxl" }) }}

{{ status(false, 1, 1, 2, 2, false) }}
