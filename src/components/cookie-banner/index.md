---
layout: collection-page.njk
title: Cookie banner
description: The cookie banner component allows a user to either accept or decline the use of cookies within a service.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The cookie banner is available as part of [TNA Frontend](https://www.npmjs.com/package/@nationalarchives/frontend) as well as a [standalone cookie banner package](https://www.npmjs.com/package/@nationalarchives/frontend-cookie-banner).

{{ example({ group: "components", item: "cookie-banner", example: "default", html: true, nunjucks: true, noPadding: true }, 2) }}

{{ status(true, 0, 1, 2, 0, false) }}
