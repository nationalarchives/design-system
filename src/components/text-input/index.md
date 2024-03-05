---
layout: collection-page.njk
title: Text input
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Use the text input component to allow the users to enter a short string text information such as their email address, a record title or a postcode.

{{ example({ group: "components", item: "text-input", example: "default", html: true, nunjucks: true, size: "xs" }) }}

{{ status(false, 0, 1, 2, 2, false) }}

## Preselected

{{ example({ group: "components", item: "text-input", example: "preselected", html: true, nunjucks: true, size: "xs", nunjucksOptions: false }) }}

## Hint

{{ example({ group: "components", item: "text-input", example: "hint", html: true, nunjucks: true, size: "xs", nunjucksOptions: false }) }}

## Error

{{ example({ group: "components", item: "text-input", example: "error", html: true, nunjucks: true, size: "xs", nunjucksOptions: false }) }}

## Inline

{{ example({ group: "components", item: "text-input", example: "inline", html: true, nunjucks: true, size: "xxs", nunjucksOptions: false }) }}
