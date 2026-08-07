---
layout: collection-page.njk
title: Tabs
description: The tabs component can contain multiple sections of information.
group: components
cardImage: /tabs.svg
phase: experimental
statusTestedWithoutJavaScript: 2
statusTestedWithoutCSS: 2
statusPassedDacAudit: 2
statusAnalytics: 2
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Tabs example", group: "components", item: "tabs", example: "default", html: true, nunjucks: true, size: "s"}, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Known issues and gaps

The tabs component currently has a few shortcomings that mean it shouldn’t be relied upon.

- If the tab titles are too long, the layout becomes sub-optimal
- There is no alternative layout for smaller devices
