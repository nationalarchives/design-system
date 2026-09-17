---
layout: collection-page.njk
title: Secondary navigation
description: Add secondary navigation to allow users to navigate between different areas of your service.
group: components
cardImage: /secondary-navigation.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 2
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Secondary navigation example", group: "components", item: "secondary-navigation", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
