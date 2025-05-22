---
layout: collection-page.njk
title: Footer
description: The footer component provides an area to use for copyright information and additional links to things like social media.
group: components
cardImage: /footer.svg
phase: production
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "footer", example: "default", html: true, nunjucks: true, size: "l" }, 2) }}

{% include "partials/component-status.njk" %}

