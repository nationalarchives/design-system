---
layout: collection-page.njk
title: Search filters
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Use the search filters component to add optional filters to a search page.

{{ example({ group: "components", item: "search-filters", example: "default", html: true, nunjucks: true, size: "l" }) }}

{{ status(false, 2, 2, 2, 2, false) }}

