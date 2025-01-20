---
layout: collection-page.njk
title: Button
description: The button component can be used as a call to action link or as a button element for use within forms.
group: components
statusProduction: true
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

The button component can be used as a call to action link or as a `<button>` element for use within forms.

{{ example({ group: "components", item: "button", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

{% include "partials/component-status.njk" %}

## Icons

Buttons can contain icons. Read more about [using icons in TNA services](../../styles/icons/).

## Button groups

Use a button group to display buttons alongside one another. The buttons will stack on smaller screens.

{{ example({ group: "components", item: "button", example: "group", html: true, nunjucks: true, size: "s" }) }}
