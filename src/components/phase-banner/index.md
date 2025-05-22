---
layout: collection-page.njk
title: Phase banner
description: The phase banner can display the development phase that the service is currently in.
group: components
cardImage: /phase-banner.svg
phase: production
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

Phases must adhere to the [list of phases in an agile project](https://www.gov.uk/service-manual/agile-delivery) from the GOV.UK Service Manual.

It should also give a link that allows users to provide feedback.

{{ example({ group: "components", item: "phase-banner", example: "default", html: true, nunjucks: true, size: "xxxs" }, 2) }}

{% include "partials/component-status.njk" %}

## When to use this component

Use this component at the top of the page so it is the first thing users see.

Place the phase banner after the [skip link](../skip-link/).

Consider using the phase banner option inside either the [header](../header/) or [global header](../global-header/) components as this will add the phase banner inside the header landmark. This is the preferred approach by AXE; ["All page content should be contained by landmarks" from Deque University](https://dequeuniversity.com/rules/axe/4.10/region).
