---
layout: collection-page.njk
title: Index grid
description: Use the index grid component to display a grid of links such as displaying a list of all child pages in a hierarchy.
group: components
phase: production
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

The index grid includes a `tna-container` element so doesn’t need to be used within a column system.

{{ example({ group: "components", item: "index-grid", example: "default", html: true, nunjucks: true, size: "xl", noHorizontalPadding: true }, 2) }}

{% include "partials/component-status.njk" %}

## Images

Use 3:2 aspect ratio images as the default for thumbnails on index grid items.

Thumbnails should be around 600px wide and 400px tall to ensure they display well across all screen sizes.
