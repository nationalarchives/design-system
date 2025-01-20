---
layout: collection-page.njk
title: Cookie banner
description: The cookie banner component allows a user to either accept or decline the use of cookies within a service.
group: components
statusProduction: true
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

The cookie banner is available as part of [TNA Frontend](https://www.npmjs.com/package/@nationalarchives/frontend) as well as a [standalone cookie banner package](https://www.npmjs.com/package/@nationalarchives/frontend-cookie-banner).

{{ example({ group: "components", item: "cookie-banner", example: "default", html: true, nunjucks: true, noPadding: true }, 2) }}

{% include "partials/component-status.njk" %}
