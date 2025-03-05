---
layout: collection-page.njk
title: Tabs
description: The tabs component can contain multiple sections of information.
group: components
statusProduction: false
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 2
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "tabs", example: "default", html: true, nunjucks: true, size: "s"}, 2) }}

{% include "partials/component-status.njk" %}

<!-- ## Without JavaScript

{{ example({ group: "components", item: "tabs", example: "default-no-js", html: false, nunjucks: false, size: "s"}) }}

## Without CSS

{{ example({ group: "components", item: "tabs", example: "default-no-css", html: false, nunjucks: false, size: "s"}) }}

## Without CSS or JavaScript

{{ example({ group: "components", item: "tabs", example: "default-no-css-no-js", html: false, nunjucks: false, size: "s"}) }} -->

## Known issues and gaps

The tabs component currently has a few shortcomings that mean it shouldn’t be relied upon.

- If the tab titles are too long, the layout becomes sub-optimal
- There is no alternative layout for smaller devices
