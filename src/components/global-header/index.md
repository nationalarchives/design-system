---
layout: collection-page.njk
title: Global header
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The global header component shows users they are on a main National Archives service and provides navigation links.

{{ example({ group: "components", item: "global-header", example: "default", html: true, nunjucks: true, size: "m" }) }}

{{ status(true, 1, 1, 1, 2, false) }}
