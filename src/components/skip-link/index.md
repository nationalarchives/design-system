---
layout: collection-page.njk
title: Skip link
description: Use the skip link at the start of a page to allow the user to jump straight to the most important content.
group: components
statusProduction: true
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "skip-link", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{% include "partials/component-status.njk" %}
