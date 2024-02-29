---
layout: collection-page.njk
title: Date input
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(false, 0, 1, 2, false) }}

Use the date input component to allow the user to enter a date when populating data, such as submitting a record.

For searching by date, use the [date search](/design-system/components/date-search/) component.

{{ example({ group: "components", item: "date-input", example: "default", html: true, nunjucks: true, open: false, size: "xs" }) }}

## Preselected

{{ example({ group: "components", item: "date-input", example: "preselected", html: true, nunjucks: true, open: false, size: "xs" }) }}

## Hint

{{ example({ group: "components", item: "date-input", example: "hint", html: true, nunjucks: true, open: false, size: "s" }) }}

## Error

{{ example({ group: "components", item: "date-input", example: "error", html: true, nunjucks: true, open: false, size: "s" }) }}

## Inline

{{ example({ group: "components", item: "date-input", example: "inline", html: true, nunjucks: true, open: false, size: "xxs" }) }}
