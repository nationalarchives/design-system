---
layout: collection-page.njk
title: Phase banner
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(false, 0, 2, 2, false) }}

The phase banner can display the [phase that the service is at](https://www.gov.uk/service-manual/agile-delivery).

It can also display a link to allow the user to provide feedback.

{{ example({ group: "components", item: "phase-banner", example: "default", html: true, nunjucks: true }) }}
