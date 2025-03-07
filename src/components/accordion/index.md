---
layout: collection-page.njk
title: Accordion
group: components
description: The accordion component lets users show and hide small sections of related content on a page.
statusProduction: true
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "accordion", example: "default", html: true, nunjucks: true, size: "m" }, 2) }}

{% include "partials/component-status.njk" %}
