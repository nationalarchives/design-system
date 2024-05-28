---
layout: collection-page.njk
title: Details
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Make a page easier to scan by letting users reveal more detailed information only if they need it.

{{ example({ group: "components", item: "details", example: "default", html: true, nunjucks: true, size: "s" }) }}

{{ status(false, 1, 1, 2, 2, false) }}
