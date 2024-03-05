---
layout: collection-page.njk
title: Radios
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Radios allow users to select a single options for a form field.

{{ example({ group: "components", item: "radios", example: "default", html: true, nunjucks: true, size: "s" }) }}

{{ status(false, 0, 1, 2, 2, false) }}

## Small

{{ example({ group: "components", item: "radios", example: "small", html: true, nunjucks: true, size: "l", nunjucksOptions: false }) }}

## Preselected

{{ example({ group: "components", item: "radios", example: "preselected", html: true, nunjucks: true, size: "s", nunjucksOptions: false }) }}

## Hint

{{ example({ group: "components", item: "radios", example: "hint", html: true, nunjucks: true, nunjucksOptions: false }) }}

## Error

{{ example({ group: "components", item: "radios", example: "error", html: true, nunjucks: true, nunjucksOptions: false }) }}

## Inline

{{ example({ group: "components", item: "radios", example: "inline", html: true, nunjucks: true, size: "xs", nunjucksOptions: false }) }}
