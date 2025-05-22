---
layout: collection-page.njk
title: Textarea
description: Use the textarea component to allow the users to enter a longer string of text information such as feedback.
group: components
cardImage: /textarea.svg
phase: beta
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "textarea", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

{% include "partials/component-status.njk" %}

## Preselected

{{ example({ group: "components", item: "textarea", example: "preselected", html: true, nunjucks: true, size: "s" }) }}

## Hint

{{ example({ group: "components", item: "textarea", example: "hint", html: true, nunjucks: true, size: "m" }) }}

## Error

{{ example({ group: "components", item: "textarea", example: "error", html: true, nunjucks: true, size: "m" }) }}

## Inline

{{ example({ group: "components", item: "textarea", example: "inline", html: true, nunjucks: true, size: "xs" }) }}
