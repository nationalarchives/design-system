---
layout: collection-page.njk
title: Checkboxes
description: Checkboxes allow users to post multiple options for the same field.
group: components
cardImage: /checkboxes.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "checkboxes", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

{% include "partials/component-status.njk" %}

## Small

{{ example({ group: "components", item: "checkboxes", example: "small", html: true, nunjucks: true, size: "l" }) }}

## Preselected

{{ example({ group: "components", item: "checkboxes", example: "preselected", html: true, nunjucks: true, size: "s" }) }}

## Hint

{{ example({ group: "components", item: "checkboxes", example: "hint", html: true, nunjucks: true, size: "m" }) }}

## Error

{{ example({ group: "components", item: "checkboxes", example: "error", html: true, nunjucks: true, size: "m" }) }}

## Inline

{{ example({ group: "components", item: "checkboxes", example: "inline", html: true, nunjucks: true, size: "xxs" }) }}

## Single

When there is only a single checkbox, it isn't rendered within a `<fieldset>`.

{{ example({ group: "components", item: "checkboxes", example: "single", html: true, nunjucks: true, size: "xxs" }) }}
