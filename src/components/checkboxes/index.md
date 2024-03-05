---
layout: collection-page.njk
title: Checkboxes
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Checkboxes allow users to post multiple options for the same field.

{{ example({ group: "components", item: "checkboxes", example: "default", html: true, nunjucks: true, size: "s" }) }}

{{ status(false, 0, 1, 2, 2, false) }}

## Small

{{ example({ group: "components", item: "checkboxes", example: "small", html: true, nunjucks: true, size: "l", nunjucksOptions: false }) }}

## Preselected

{{ example({ group: "components", item: "checkboxes", example: "preselected", html: true, nunjucks: true, size: "s", nunjucksOptions: false }) }}

## Hint

{{ example({ group: "components", item: "checkboxes", example: "hint", html: true, nunjucks: true, nunjucksOptions: false }) }}

## Error

{{ example({ group: "components", item: "checkboxes", example: "error", html: true, nunjucks: true, nunjucksOptions: false }) }}

## Inline

{{ example({ group: "components", item: "checkboxes", example: "inline", html: true, nunjucks: true, size: "xs", nunjucksOptions: false }) }}
