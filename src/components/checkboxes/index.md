---
layout: collection-page.njk
title: Checkboxes
description: Checkboxes allow users to post multiple options for the same field.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Checkboxes allow users to post multiple options for the same field.

{{ example({ group: "components", item: "checkboxes", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

{{ status(true, 0, 1, 2, 1, false) }}

## Small

{{ example({ group: "components", item: "checkboxes", example: "small", html: true, nunjucks: true, size: "l" }) }}

## Preselected

{{ example({ group: "components", item: "checkboxes", example: "preselected", html: true, nunjucks: true, size: "s" }) }}

## Hint

{{ example({ group: "components", item: "checkboxes", example: "hint", html: true, nunjucks: true }) }}

## Error

{{ example({ group: "components", item: "checkboxes", example: "error", html: true, nunjucks: true }) }}

## Inline

{{ example({ group: "components", item: "checkboxes", example: "inline", html: true, nunjucks: true, size: "xs" }) }}
