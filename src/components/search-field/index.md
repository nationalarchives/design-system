---
layout: collection-page.njk
title: Search field
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(false, 0, 1, 2, false) }}

Use the search field component as an entry point into searches.

{{ example({ group: "components", item: "search-field", example: "default", html: true, nunjucks: true, size: "xs" }) }}

## Preselected

{{ example({ group: "components", item: "search-field", example: "preselected", html: true, nunjucks: true, size: "xs" }) }}

## Hint

{{ example({ group: "components", item: "search-field", example: "hint", html: true, nunjucks: true, size: "s" }) }}
