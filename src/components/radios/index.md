---
layout: collection-page.njk
title: Radios
description: Radios allow users to select a single options for a form field.
group: components
statusProduction: true
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "radios", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

{% include "partials/component-status.njk" %}

## Small

{{ example({ group: "components", item: "radios", example: "small", html: true, nunjucks: true, size: "l" }) }}

## Preselected

{{ example({ group: "components", item: "radios", example: "preselected", html: true, nunjucks: true, size: "s" }) }}

## Hint

{{ example({ group: "components", item: "radios", example: "hint", html: true, nunjucks: true, size: "m" }) }}

## Error

{{ example({ group: "components", item: "radios", example: "error", html: true, nunjucks: true, size: "m" }) }}

## Inline

{{ example({ group: "components", item: "radios", example: "inline", html: true, nunjucks: true, size: "xxs" }) }}
