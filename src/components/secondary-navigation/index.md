---
layout: collection-page.njk
title: Secondary navigation
description: Add secondary navigation to allow users to navigate between different areas of your service.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "secondary-navigation", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{{ status(false, 0, 1, 2, 2, false) }}
