---
layout: collection-page.njk
title: Text input
description: The text input component allows users to enter short string of text such as their email address, a record title or a postcode.
group: components
statusProduction: true
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "text-input", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

{% include "partials/component-status.njk" %}

## Preselected

{{ example({ group: "components", item: "text-input", example: "preselected", html: true, nunjucks: true, size: "xxs" }) }}

## Hint

{{ example({ group: "components", item: "text-input", example: "hint", html: true, nunjucks: true, size: "xs" }) }}

## Error

{{ example({ group: "components", item: "text-input", example: "error", html: true, nunjucks: true, size: "xs" }) }}

## Inline

{{ example({ group: "components", item: "text-input", example: "inline", html: true, nunjucks: true, size: "xxxs" }) }}

## Password

The password text input is enhanced with JavaScript to allow the hiding and showing of the password.

{{ example({ group: "components", item: "text-input", example: "password", html: true, nunjucks: true, size: "xxs" }) }}
