---
layout: collection-page.njk
title: Hero
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Use the hero component to start an article.

{{ example({ group: "components", item: "hero", example: "default", html: true, nunjucks: true, size: "xl" }) }}

{{ status(true, 0, 1, 1, 2, false) }}

