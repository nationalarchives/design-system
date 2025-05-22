---
layout: collection-page.njk
title: Secondary navigation
description: Add secondary navigation to allow users to navigate between different areas of your service.
group: components
cardImage: /secondary-navigation.svg
phase: beta
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 2
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "secondary-navigation", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{% include "partials/component-status.njk" %}
