---
layout: collection-page.njk
title: Date search
description: Use the date search component to allow the user to enter a date to search with.
group: components
cardImage: /date-search.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 2
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Date search example", group: "components", item: "date-search", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

## How it works

The date search component allows a user to enter a date in a single field using the browser’s native date picker.

## When to use this component

Use the date search component when you are working with a service that has less capacity for errors or has pages that shouldn’t show errors such as a [search page](../../patterns/search/).

Use this component when you need to capture full dates and not partial dates.

## When not to use this component

When you need the user to enter a date for data purposes or don’t want to require a day or month, use the [date input](../date-input/) component instead.

## Prefilled

{{ example({ title: "Date search prefilled example", group: "components", item: "date-search", example: "prefilled", html: true, nunjucks: true, size: "xxs" }) }}

## Hint

{{ example({ title: "Date search hint example", group: "components", item: "date-search", example: "hint", html: true, nunjucks: true, size: "xs" }) }}

## Error

{{ example({ title: "Date search error example", group: "components", item: "date-search", example: "error", html: true, nunjucks: true, size: "xs" }) }}

<!-- ## Inline

{{ example({ title: "Date search inline example", group: "components", item: "date-search", example: "inline", html: true, nunjucks: true, size: "xxxs" }) }} -->

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
