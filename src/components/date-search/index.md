---
layout: collection-page.njk
title: Date search
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Use the date search component to allow the user to enter a date to search with.

When you need the user to enter a date for data purposes or don’t want to require a day or month, use the [date input](/design-system/components/date-input/) component.

{{ example({ group: "components", item: "date-search", example: "default", html: true, nunjucks: true, size: "xs" }) }}

{{ status(false, 0, 1, 2, 2, false) }}

## Preselected

{{ example({ group: "components", item: "date-search", example: "preselected", html: true, nunjucks: true, size: "xs", nunjucksOptions: false }) }}

## Hint

{{ example({ group: "components", item: "date-search", example: "hint", html: true, nunjucks: true, size: "xs", nunjucksOptions: false }) }}

## Error

{{ example({ group: "components", item: "date-search", example: "error", html: true, nunjucks: true, size: "xs", nunjucksOptions: false }) }}

## Inline

{{ example({ group: "components", item: "date-search", example: "inline", html: true, nunjucks: true, size: "xxs", nunjucksOptions: false }) }}
