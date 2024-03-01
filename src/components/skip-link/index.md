---
layout: collection-page.njk
title: Skip link
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(false, 0, 1, 2, false) }}

The skip link component can be used at the start of a page to allow the user to jump straight to the most important content on a page.

{{ example({ group: "components", item: "skip-link", example: "default", html: true, nunjucks: true }) }}
