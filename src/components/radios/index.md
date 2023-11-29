---
layout: collection-page.njk
title: Radios
group: components
---

The radios component is for...

{% from "_example.njk" import example %}

{{ example({ group: "components", item: "radios", example: "default", html: true, nunjucks: true, open: false, size: "s" }) }}

## Small

{{ example({ group: "components", item: "radios", example: "small", html: true, nunjucks: false, open: false, size: "l" }) }}

## Preselected

{{ example({ group: "components", item: "radios", example: "preselected", html: true, nunjucks: false, open: false, size: "s" }) }}

## Hint

{{ example({ group: "components", item: "radios", example: "hint", html: true, nunjucks: false, open: false }) }}

## Error

{{ example({ group: "components", item: "radios", example: "error", html: true, nunjucks: false, open: false }) }}

## Inline

{{ example({ group: "components", item: "radios", example: "inline", html: true, nunjucks: false, open: false, size: "xxs" }) }}
