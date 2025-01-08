---
layout: collection-page.njk
title: Error summary
description: Summarise form errors on the page and provide links to help users complete them.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "error-summary", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

{{ status(false, 2, 2, 2, 2, false) }}

