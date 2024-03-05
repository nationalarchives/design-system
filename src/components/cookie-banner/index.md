---
layout: collection-page.njk
title: Cookie banner
description: Also known as navigation path or cookie crumb
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The cookie banner component allows a user to either accept or decline the use of cookies within a service.

The cookie banner is available as part of [TNA Frontend](https://www.npmjs.com/package/@nationalarchives/frontend) as well as a [standalone cookie banner package](https://www.npmjs.com/package/@nationalarchives/frontend-cookie-banner).

{{ example({ group: "components", item: "cookie-banner", example: "default", html: true, nunjucks: true, noPadding: true }) }}

{{ status(false, 2, 2, 2, 2, false) }}
