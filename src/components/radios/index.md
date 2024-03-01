---
layout: collection-page.njk
title: Radios
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(false, 0, 1, 2, false) }}

Radios allow users to select a single options for a form field.

{{ example({ group: "components", item: "radios", example: "default", html: true, nunjucks: true, size: "s" }) }}

## Small

{{ example({ group: "components", item: "radios", example: "small", html: true, nunjucks: true, size: "l" }) }}

## Preselected

{{ example({ group: "components", item: "radios", example: "preselected", html: true, nunjucks: true, size: "s" }) }}

## Hint

{{ example({ group: "components", item: "radios", example: "hint", html: true, nunjucks: true }) }}

## Error

{{ example({ group: "components", item: "radios", example: "error", html: true, nunjucks: true }) }}

## Inline

{{ example({ group: "components", item: "radios", example: "inline", html: true, nunjucks: true, size: "xxs" }) }}
