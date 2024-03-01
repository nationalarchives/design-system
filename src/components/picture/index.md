---
layout: collection-page.njk
title: Picture
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(false, 2, 2, 2, false) }}

The picture component can display an image with additional information.

{{ example({ group: "components", item: "picture", example: "default", html: true, nunjucks: true }) }}
