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
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

Each selected value requires a link to be able to remove the value.

{{ example({ group: "components", item: "compound-filters", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}
