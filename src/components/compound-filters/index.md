---
layout: collection-page.njk
title: Compound filters
description: The compound filters can show which multiple filters have been selected. This is useful for search patterns.
group: components
cardImage: /compound-filters.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 0
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Compound filters example", group: "components", item: "compound-filters", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

## How it works

The compound filters component shows a list of active filters on a search results page.

Each filter has a cross which allows the user to remove the filter.

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
