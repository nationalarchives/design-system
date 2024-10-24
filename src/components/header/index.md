---
layout: collection-page.njk
title: Header
description: The header component shows users they are on a National Archives service and provides navigation links.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "header", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

{{ status(true, 1, 1, 1, 2, false) }}
