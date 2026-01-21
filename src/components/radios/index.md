---
layout: collection-page.njk
title: Radios
description: Radios allow users to select a single options for a form field.
group: components
cardImage: /radios.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "radios", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Small

{{ example({ group: "components", item: "radios", example: "small", html: true, nunjucks: true, size: "l" }) }}

## Preselected

{{ example({ group: "components", item: "radios", example: "preselected", html: true, nunjucks: true, size: "s" }) }}

## Hints

{{ example({ group: "components", item: "radios", example: "hint", html: true, nunjucks: true, size: "m" }) }}

### Item hints

Do not add item hints to [small radios](#small) or [inline radios](#inline).

{{ example({ group: "components", item: "radios", example: "item-hints", html: true, nunjucks: true, size: "m" }) }}

## Error

{{ example({ group: "components", item: "radios", example: "error", html: true, nunjucks: true, size: "m" }) }}

## Inline

{{ example({ group: "components", item: "radios", example: "inline", html: true, nunjucks: true, size: "xxs" }) }}
