---
layout: collection-page.njk
title: Skip link
description: The skip link component can be used at the start of a page to allow the user to jump straight to the most important content on a page.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "skip-link", example: "default", html: true, nunjucks: true, size: "xs" }) }}

{{ status(false, 0, 1, 2, 2, false) }}
