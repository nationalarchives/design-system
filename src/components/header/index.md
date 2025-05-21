---
layout: collection-page.njk
title: Header
description: The header component shows users they are on a National Archives service and provides navigation links.
group: components
cardImage: /header.svg
phase: beta
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 2
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "header", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{% include "partials/component-status.njk" %}
