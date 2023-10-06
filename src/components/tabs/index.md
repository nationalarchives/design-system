---
layout: collection-page.njk
title: Tabs
group: components
---

The tabs component is for...

{% from "_example.njk" import example %}

{{ example({group: "components", item: "tabs", example: "default", html: true, nunjucks: true, open: false, size: "s"}) }}

## Without JavaScript

{{ example({group: "components", item: "tabs", example: "default-no-js", html: false, nunjucks: false, open: false, size: "s"}) }}

## Without CSS

{{ example({group: "components", item: "tabs", example: "default-no-css", html: false, nunjucks: false, open: false, size: "s"}) }}

## Without CSS or JavaScript

{{ example({group: "components", item: "tabs", example: "default-no-css-no-js", html: false, nunjucks: false, open: false, size: "s"}) }}
