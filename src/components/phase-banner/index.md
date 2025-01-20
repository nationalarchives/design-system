---
layout: collection-page.njk
title: Phase banner
description: The phase banner can display the phase that the service is currently in.
group: components
statusProduction: true
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

Phases must adhere to the [list of phases in an agile project](https://www.gov.uk/service-manual/agile-delivery) from the GOV.UK Service Manual.

It can also display a link to allow the user to provide feedback.

{{ example({ group: "components", item: "phase-banner", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

{% include "partials/component-status.njk" %}
