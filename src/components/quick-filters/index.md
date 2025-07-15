---
layout: collection-page.njk
title: Quick filters
description: The quick filters component provides users with a list of links which act as a quick filter to content.
group: components
cardImage: /quick-filters.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "quick-filters", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{% include "partials/component-status.njk" %}
