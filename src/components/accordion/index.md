---
layout: collection-page.njk
title: Accordion
group: components
description: The accordion component lets users show and hide small sections of related content on a page.
cardImage: /accordion.svg
phase: official
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "accordion", example: "default", html: true, nunjucks: true, size: "m", extraExpandableHeight: true }, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Allow open and close all

Customise with `toggleAllButton` to add an extra option to show or hide all accordion items.

{{ example({ group: "components", item: "accordion", example: "open-close-all", html: true, nunjucks: true, size: "m", extraExpandableHeight: true }, 2) }}
