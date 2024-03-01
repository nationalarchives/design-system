---
layout: collection-page.njk
title: Date search
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(false, 0, 1, 2, false) }}

Use the date search component to allow the user to enter a date to search with.

When you need the user to enter a date for data purposes or don't want to require a day or month, use the [date input](/design-system/components/date-input/) component.

{{ example({ group: "components", item: "date-search", example: "default", html: true, nunjucks: true, size: "xs" }) }}

## Preselected

{{ example({ group: "components", item: "date-search", example: "preselected", html: true, nunjucks: true, size: "xs" }) }}

## Hint

{{ example({ group: "components", item: "date-search", example: "hint", html: true, nunjucks: true, size: "xs" }) }}

## Error

{{ example({ group: "components", item: "date-search", example: "error", html: true, nunjucks: true, size: "xs" }) }}

## Inline

{{ example({ group: "components", item: "date-search", example: "inline", html: true, nunjucks: true, size: "xxs" }) }}
