---
layout: collection-page.njk
title: Files list
description: Display a list of files available to download.
group: components
cardImage: /files-list.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "files-list", example: "default", html: true, nunjucks: true, size: "l" }, 2) }}

{% include "partials/component-status.njk" %}
