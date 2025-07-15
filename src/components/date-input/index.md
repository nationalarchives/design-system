---
layout: collection-page.njk
title: Date input
description: Use the date input component to allow the user to enter a date when populating data, such as submitting a record.
group: components
cardImage: /date-input.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 2
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

For searching by date, use the [date search](../date-search/) component.

{{ example({ group: "components", item: "date-input", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{% include "partials/component-status.njk" %}

## Preselected

{{ example({ group: "components", item: "date-input", example: "preselected", html: true, nunjucks: true, size: "xs" }) }}

## Hint

{{ example({ group: "components", item: "date-input", example: "hint", html: true, nunjucks: true, size: "s" }) }}

## Error

{{ example({ group: "components", item: "date-input", example: "error", html: true, nunjucks: true, size: "s" }) }}

<!-- ## Inline

{{ example({ group: "components", item: "date-input", example: "inline", html: true, nunjucks: true, size: "xs" }) }} -->

## Progressive

{{ example({ group: "components", item: "date-input", example: "progressive", html: true, nunjucks: true, size: "s" }) }}
