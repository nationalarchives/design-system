---
layout: collection-page.njk
title: Gallery
description: Use the gallery component to show a list of images.
group: components
cardImage: /gallery.svg
phase: official
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "gallery", example: "default", html: true, nunjucks: true, size: "xxxxl" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}
