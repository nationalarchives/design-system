---
layout: collection-page.njk
title: Details
description: Make a page easier to scan by letting users reveal more detailed information only if they need it.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "details", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

{{ status(false, 1, 1, 2, 2, false) }}
