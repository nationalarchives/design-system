---
layout: collection-page.njk
title: Panel
description: Use the panel component to show the sucessful end status of a form or user journey.
group: components
cardImage: /panel.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "panel", example: "default", html: true, nunjucks: true, size: "m" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}
