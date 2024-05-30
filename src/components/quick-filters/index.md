---
layout: collection-page.njk
title: Quick filters
description: The quick filters component provides users with a list of links which act as a quick filter to content.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "quick-filters", example: "default", html: true, nunjucks: true, size: "s" }) }}

{{ status(false, 0, 1, 1, 2, false) }}
