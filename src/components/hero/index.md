---
layout: collection-page.njk
title: Hero
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(true, 0, 1, 1, false) }}

Use the hero component to start an article.

## Example

{{ example({ group: "components", item: "hero", example: "default", html: true, nunjucks: true, size: "xxl" }) }}

