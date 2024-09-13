---
layout: collection-page.njk
title: Text input
description: The text input component allows users to enter short string of text such as their email address, a record title or a postcode.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "text-input", example: "default", html: true, nunjucks: true, size: "xs" }) }}

{{ status(false, 0, 1, 2, 2, false) }}

## Preselected

{{ example({ group: "components", item: "text-input", example: "preselected", html: true, nunjucks: true, size: "xs" }) }}

## Hint

{{ example({ group: "components", item: "text-input", example: "hint", html: true, nunjucks: true, size: "xs" }) }}

## Error

{{ example({ group: "components", item: "text-input", example: "error", html: true, nunjucks: true, size: "xs" }) }}

## Inline

{{ example({ group: "components", item: "text-input", example: "inline", html: true, nunjucks: true, size: "xxs" }) }}
