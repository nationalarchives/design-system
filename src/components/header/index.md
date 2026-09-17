---
layout: collection-page.njk
title: Header
description: The header component shows users they are on a National Archives service and provides navigation links.
group: components
cardImage: /header.svg
phase: official
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 2
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Header example", group: "components", item: "header", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
