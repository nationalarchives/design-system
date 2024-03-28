---
layout: collection-page.njk
title: Warning
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The warning component provides the user with important information about the page or article.

{{ example({ group: "components", item: "warning", example: "default", html: true, nunjucks: true, size: "xs" }) }}

{{ status(false, 0, 1, 2, 2, false) }}
