---
layout: collection-page.njk
title: Footer
description: The footer component provides an area to use for copyright information and additional links to things like social media.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "footer", example: "default", html: true, nunjucks: true, size: "xl" }, 2) }}

{{ status(true, 0, 1, 1, 1, false) }}

