---
layout: collection-page.njk
title: Textarea
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Use the textarea component to allow the users to enter a longer string of text information such as feedback.

{{ example({ group: "components", item: "textarea", example: "default", html: true, nunjucks: true, size: "m" }) }}

{{ status(false, 0, 1, 2, 2, false) }}

## Preselected

{{ example({ group: "components", item: "textarea", example: "preselected", html: true, nunjucks: true, size: "m", nunjucksOptions: false }) }}

## Hint

{{ example({ group: "components", item: "textarea", example: "hint", html: true, nunjucks: true, size: "m", nunjucksOptions: false }) }}

## Error

{{ example({ group: "components", item: "textarea", example: "error", html: true, nunjucks: true, size: "m", nunjucksOptions: false }) }}

## Inline

{{ example({ group: "components", item: "textarea", example: "inline", html: true, nunjucks: true, size: "m", nunjucksOptions: false }) }}
