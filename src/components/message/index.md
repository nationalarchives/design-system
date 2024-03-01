---
layout: collection-page.njk
title: Message
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(false, 0, 1, 2, false) }}

The message component provides the user with important information about the page or article.

{{ example({ group: "components", item: "message", example: "default", html: true, nunjucks: true }) }}
