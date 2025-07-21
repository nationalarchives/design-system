---
layout: collection-page.njk
title: File input
description: The file input component allows users select and upload files.
group: components
cardImage: /file-input.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "file-input", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

{% include "partials/component-status.njk" %}

## Hint

{{ example({ group: "components", item: "file-input", example: "hint", html: true, nunjucks: true, size: "xs" }) }}

## Error

{{ example({ group: "components", item: "file-input", example: "error", html: true, nunjucks: true, size: "xs" }) }}

## Multiple

{{ example({ group: "components", item: "file-input", example: "multiple", html: true, nunjucks: true, size: "xxs" }) }}

## Improved file input component

If JavaScript is available to the user, you can enhance the file input by adding `droppable: true`, which:

- enlarges the available drag and drop area for files
- improves accessibility
- visually looks more like other components

If JavaScript fails to load, the component reverts to the standard form input.

{{ example({ group: "components", item: "file-input", example: "droppable", html: true, nunjucks: true, size: "xs" }) }}
