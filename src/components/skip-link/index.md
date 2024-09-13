---
layout: collection-page.njk
title: Skip link
description: Use the skip link at the start of a page to allow the user to jump straight to the most important content.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "skip-link", example: "default", html: true, nunjucks: true, size: "xs" }) }}

{{ status(false, 0, 1, 2, 2, false) }}
