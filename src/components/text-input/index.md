---
layout: collection-page.njk
title: Text input
group: components
---

Use the text input component to...

{% from "_example.njk" import example %}

{{ example({ group: "components", item: "text-input", example: "default", html: true, nunjucks: true, open: false, size: "xs" }) }}

## Preselected

{{ example({ group: "components", item: "text-input", example: "preselected", html: true, nunjucks: true, open: false, size: "xs" }) }}

## Hint

{{ example({ group: "components", item: "text-input", example: "hint", html: true, nunjucks: true, open: false, size: "xs" }) }}

## Error

{{ example({ group: "components", item: "text-input", example: "error", html: true, nunjucks: true, open: false, size: "xs" }) }}

## Inline

{{ example({ group: "components", item: "text-input", example: "inline", html: true, nunjucks: true, open: false, size: "xxs" }) }}
