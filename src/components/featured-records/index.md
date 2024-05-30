---
layout: collection-page.njk
title: Featured records
description: The featured records component can be used to show a list of related or interesting records.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "featured-records", example: "default", html: true, nunjucks: true, size: "l" }) }}

{{ status(false, 0, 1, 2, 2, false) }}
