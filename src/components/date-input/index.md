---
layout: collection-page.njk
title: Date input
description: Use the date input component to allow the user to enter a date when populating data, such as submitting a record.
group: components
cardImage: /date-input.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 2
statusDocumentationComplete: false
---

{% from "nationalarchives/components/warning/macro.njk" import tnaWarning %}
{% from "partials/example.njk" import example %}

For searching by date, use the [date search](../date-search/) component.

{{ example({ title: "Date input example", group: "components", item: "date-input", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Prefilled

{{ example({ title: "Date input prefilled example", group: "components", item: "date-input", example: "prefilled", html: true, nunjucks: true, size: "xs" }) }}

## Hint

{{ example({ title: "Date input with hint example", group: "components", item: "date-input", example: "hint", html: true, nunjucks: true, size: "s" }) }}

## Error

{{ example({ title: "Date input error example", group: "components", item: "date-input", example: "error", html: true, nunjucks: true, size: "s" }) }}

## Progressive

{{ tnaWarning({
  headingLevel: 3,
  body: "The progressive variation of the date input component is still experimental."
}) }}

{{ example({ title: "Date input progressive example", group: "components", item: "date-input", example: "progressive", html: true, nunjucks: true, size: "s" }) }}
