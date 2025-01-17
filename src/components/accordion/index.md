---
layout: collection-page.njk
title: Accordion
group: components
description: The accordion component lets users show and hide sections of related content on a page.
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "accordion", example: "default", html: true, nunjucks: true, size: "m" }, 2) }}

{{ status(true, 1, 1, 1, 1, false) }}
