---
layout: collection-page.njk
title: Tabs
description: The tabs component can contain multiple tabs of information.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "tabs", example: "default", html: true, nunjucks: true, size: "s"}) }}

{{ status(false, 2, 2, 2, false) }}

## Without JavaScript

{{ example({ group: "components", item: "tabs", example: "default-no-js", html: false, nunjucks: false, size: "s"}) }}

## Without CSS

{{ example({ group: "components", item: "tabs", example: "default-no-css", html: false, nunjucks: false, size: "s"}) }}

## Without CSS or JavaScript

{{ example({ group: "components", item: "tabs", example: "default-no-css-no-js", html: false, nunjucks: false, size: "s"}) }}

## Known issues and gaps

The tabs component currently has a few shortcomings that mean it shouldn’t be relied upon.

- In CSS-only mode (no JavaScript), the current tab is not indicated
- If the tab titles are too long, the layout becomes sub-optimal
- There is no alternative layout for smaller devices
