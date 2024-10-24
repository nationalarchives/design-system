---
layout: collection-page.njk
title: Date input
description: Use the date input component to allow the user to enter a date when populating data, such as submitting a record.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

For searching by date, use the [date search](../date-search/) component.

{{ example({ group: "components", item: "date-input", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{{ status(false, 0, 1, 2, 2, false) }}

## Preselected

{{ example({ group: "components", item: "date-input", example: "preselected", html: true, nunjucks: true, size: "xs" }) }}

## Hint

{{ example({ group: "components", item: "date-input", example: "hint", html: true, nunjucks: true, size: "s" }) }}

## Error

{{ example({ group: "components", item: "date-input", example: "error", html: true, nunjucks: true, size: "s" }) }}

## Inline

{{ example({ group: "components", item: "date-input", example: "inline", html: true, nunjucks: true, size: "xxs" }) }}
