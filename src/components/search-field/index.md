---
layout: collection-page.njk
title: Search field
description: Use the search field component as an entry point into searches.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "search-field", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{{ status(true, 0, 1, 2, 1, false) }}

## Preselected

{{ example({ group: "components", item: "search-field", example: "preselected", html: true, nunjucks: true, size: "xs" }) }}

## Hint

{{ example({ group: "components", item: "search-field", example: "hint", html: true, nunjucks: true, size: "s" }) }}
