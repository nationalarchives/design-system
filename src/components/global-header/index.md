---
layout: collection-page.njk
title: Global header
description: The global header component shows users they are on a main National Archives service and provides navigation links.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "global-header", example: "default", html: true, nunjucks: true, size: "m" }) }}

{{ status(true, 1, 1, 1, 1, false) }}
