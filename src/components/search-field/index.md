---
layout: collection-page.njk
title: Search field
description: Use the search field component as an entry point into searches.
group: components
cardImage: /search-field.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "search-field", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Preselected

{{ example({ group: "components", item: "search-field", example: "preselected", html: true, nunjucks: true, size: "xs" }) }}

## Hint

{{ example({ group: "components", item: "search-field", example: "hint", html: true, nunjucks: true, size: "s" }) }}
