---
layout: collection-page.njk
title: Tabs
description: The tabs component can contain multiple sections of information.
group: components
cardImage: /tabs.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 2
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Tabs example", group: "components", item: "tabs", example: "default", html: true, nunjucks: true, size: "s"}, 2) }}

## Known issues and gaps

The tabs component currently has a few shortcomings:

- If the tab titles are too long, the layout becomes sub-optimal
- There is no alternative layout for smaller devices

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
