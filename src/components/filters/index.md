---
layout: collection-page.njk
title: Filters
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(false, 0, 1, 1, false) }}

The filters component provides users with a list of links which act as a quick filter to content.

{{ example({ group: "components", item: "filters", example: "default", html: true, nunjucks: true, size: "s" }) }}
