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
---

{% from "nationalarchives/components/warning/macro.njk" import tnaWarning %}
{% from "partials/example.njk" import example %}

{{ example({ title: "Date input example", group: "components", item: "date-input", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

## How it works

The date input component allows a user to enter a date in three separate parts; day, month and year.

## When to use this component

Use the date input component when you can validate the date entered and are able to show errors.

You can also use this component to allow users to enter partial dates like a year or a month and a year.

If you are working with a service that has less capacity for errors or has pages that shouldn't show errors such as a [search page](../../patterns/search/), use the [date search](../date-search/) component.

## Prefilled

{{ example({ title: "Date input prefilled example", group: "components", item: "date-input", example: "prefilled", html: true, nunjucks: true, size: "xs" }) }}

## Hint

{{ example({ title: "Date input with hint example", group: "components", item: "date-input", example: "hint", html: true, nunjucks: true, size: "s" }) }}

## Error

{{ example({ title: "Date input error example", group: "components", item: "date-input", example: "error", html: true, nunjucks: true, size: "s" }) }}

## Progressive

{% set warning_body %}
The progressive variation of the date input component is still an [experimental feature](../../component-statuses/#experimental).
{% endset %}
{{ tnaWarning({
  headingLevel: 3,
  body: warning_body
}) }}

{{ example({ title: "Date input progressive example", group: "components", item: "date-input", example: "progressive", html: true, nunjucks: true, size: "s" }) }}

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
