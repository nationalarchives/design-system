---
layout: collection-page.njk
title: Global header
description: The global header component shows users they are on a main National Archives service and provides navigation links.
group: components
cardImage: /global-header.svg
phase: official
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "global-header", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Content

Use `defaultContent: true` to populate the global header with the required content for a service hosted on the main domain.

If using a different subdomain, change the base domain using `defaultContentBaseURL`.
