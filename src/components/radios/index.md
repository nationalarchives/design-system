---
layout: collection-page.njk
title: Radios
description: Radios allow users to select a single options for a form field.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "radios", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

{{ status(false, 0, 1, 2, 2, false) }}

## Small

{{ example({ group: "components", item: "radios", example: "small", html: true, nunjucks: true, size: "l" }) }}

## Preselected

{{ example({ group: "components", item: "radios", example: "preselected", html: true, nunjucks: true, size: "s" }) }}

## Hint

{{ example({ group: "components", item: "radios", example: "hint", html: true, nunjucks: true }) }}

## Error

{{ example({ group: "components", item: "radios", example: "error", html: true, nunjucks: true }) }}

## Inline

{{ example({ group: "components", item: "radios", example: "inline", html: true, nunjucks: true, size: "xs" }) }}
