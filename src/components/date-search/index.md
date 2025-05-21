---
layout: collection-page.njk
title: Date search
description: Use the date search component to allow the user to enter a date to search with.
group: components
cardImage: /date-search.svg
phase: beta
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 2
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

When you need the user to enter a date for data purposes or don’t want to require a day or month, use the [date input](../date-input/) component.

{{ example({ group: "components", item: "date-search", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

{% include "partials/component-status.njk" %}

## Preselected

{{ example({ group: "components", item: "date-search", example: "preselected", html: true, nunjucks: true, size: "xxs" }) }}

## Hint

{{ example({ group: "components", item: "date-search", example: "hint", html: true, nunjucks: true, size: "xs" }) }}

## Error

{{ example({ group: "components", item: "date-search", example: "error", html: true, nunjucks: true, size: "xs" }) }}

## Inline

{{ example({ group: "components", item: "date-search", example: "inline", html: true, nunjucks: true, size: "xxxs" }) }}
