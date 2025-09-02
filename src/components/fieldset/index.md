---
layout: collection-page.njk
title: Fieldset
description: The fieldset can group together related form fields.
group: components
cardImage: /fieldset.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "fieldset", example: "default", html: true, nunjucks: true, size: "xxl" }, 2) }}

{% include "partials/component-status.njk" %}
