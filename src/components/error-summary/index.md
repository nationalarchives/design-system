---
layout: collection-page.njk
title: Error summary
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Use the error summary component to summarise form errors on the page and provide links to help users complete them.

{{ example({ group: "components", item: "error-summary", example: "default", html: true, nunjucks: true, size: "s" }) }}

{{ status(false, 2, 2, 2, false) }}

