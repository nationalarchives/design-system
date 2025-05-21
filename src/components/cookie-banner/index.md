---
layout: collection-page.njk
title: Cookie banner
description: The cookie banner component allows a user to either accept or decline the use of cookies within a service.
group: components
cardImage: /cookie-banner.svg
phase: production
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "cookie-banner", example: "default", html: true, nunjucks: true, size: "l" }, 2) }}

{% include "partials/component-status.njk" %}
