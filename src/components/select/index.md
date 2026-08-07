---
layout: collection-page.njk
title: Select
description: The select component allows users to select a single value from a list of options.
group: components
cardImage: /select.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

Where possible, avoid overusing the select component. Alice Bartlett gave a talk at EpicFEL called ["Burn your select tags"](https://www.youtube.com/watch?v=CUkMCQR4TpY) which explains when the `<select>` tag is not the most appropriate tag to use.

{{ example({ title: "Select example", group: "components", item: "select", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Preselected

{{ example({ title: "Select preselected example", group: "components", item: "select", example: "preselected", html: true, nunjucks: true, size: "xxs" }) }}

## Hint

{{ example({ title: "Select with hint example", group: "components", item: "select", example: "hint", html: true, nunjucks: true, size: "xs" }) }}

## Error

{{ example({ title: "Select error example", group: "components", item: "select", example: "error", html: true, nunjucks: true, size: "xs" }) }}

<!-- ## Inline

{{ example({ title: "Select inline example", group: "components", item: "select", example: "inline", html: true, nunjucks: true, size: "xxxs" }) }} -->
