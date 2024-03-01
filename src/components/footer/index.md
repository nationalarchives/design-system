---
layout: collection-page.njk
title: Footer
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The footer component provides an area to use for copyright information and additional links to things like social media.

{{ example({ group: "components", item: "footer", example: "default", html: true, nunjucks: true, size: "xl" }) }}

{{ status(true, 0, 1, 1, false) }}

