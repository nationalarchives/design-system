---
layout: collection-page.njk
title: Warning
description: The warning component provides the user with important information about the page or article.
group: components
cardImage: /warning.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "warning", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

{% include "partials/component-status.njk" %}
