---
layout: collection-page.njk
title: Compound filters
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(false, 0, 1, 1, false) }}

The compound filters can show which multiple filters have been selected. This is useful for search patterns.

Each selected value requires a link to be able to remove the value.

{{ example({ group: "components", item: "compound-filters", example: "default", html: true, nunjucks: true, open: false, size: "s" }) }}
