---
layout: collection-page.njk
title: Featured records
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The featured records component can be used to show a list of related or interesting records.

{{ example({ group: "components", item: "featured-records", example: "default", html: true, nunjucks: true, size: "l" }) }}

{{ status(false, 0, 1, 2, 2, false) }}
