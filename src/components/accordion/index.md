---
layout: collection-page.njk
title: Accordion
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The accordion component lets users show and hide sections of related content on a page.

{{ example({ group: "components", item: "accordion", example: "default", html: true, nunjucks: true, size: "m" }) }}

{{ status(false, 1, 1, 2, 2, false) }}
