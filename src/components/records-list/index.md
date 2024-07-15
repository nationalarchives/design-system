---
layout: collection-page.njk
title: Records list
description: The records list component can be used to show a list of related or interesting records.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "records-list", example: "default", html: true, nunjucks: true, size: "l" }) }}

{{ status(false, 0, 1, 2, 2, false) }}
