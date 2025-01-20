---
layout: collection-page.njk
title: Error summary
description: Summarise form errors on the page and provide links to help users complete them.
group: components
statusProduction: true
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 2
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "error-summary", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

{% include "partials/component-status.njk" %}

