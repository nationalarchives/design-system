---
layout: collection-page.njk
title: Header
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The header component shows users they are on a National Archives service and provides navigation links.

{{ example({ group: "components", item: "header", example: "default", html: true, nunjucks: true }) }}

{{ status(true, 1, 1, 1, 2, false) }}
