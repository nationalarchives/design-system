---
layout: collection-page.njk
title: Compound filters
description: The compound filters can show which multiple filters have been selected. This is useful for search patterns.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Each selected value requires a link to be able to remove the value.

{{ example({ group: "components", item: "compound-filters", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{{ status(false, 0, 1, 1, 2, false) }}
