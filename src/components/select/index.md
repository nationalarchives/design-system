---
layout: collection-page.njk
title: Select
group: components
---

Use the select component to...

{% from "_example.njk" import example %}

{{ example({ group: "components", item: "select", example: "default", html: true, nunjucks: true, open: false, size: "xs" }) }}

## Preselected

{{ example({ group: "components", item: "select", example: "preselected", html: true, nunjucks: true, open: false, size: "xs" }) }}

## Hint

{{ example({ group: "components", item: "select", example: "hint", html: true, nunjucks: true, open: false, size: "xs" }) }}

<!-- ## Error

{{ example({ group: "components", item: "select", example: "error", html: true, nunjucks: true, open: false, size: "xs" }) }} -->

## Inline

{{ example({ group: "components", item: "select", example: "inline", html: true, nunjucks: true, open: false, size: "xxs" }) }}
