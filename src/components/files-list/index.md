---
layout: collection-page.njk
title: Files list
description: Display a list of files available to download.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "files-list", example: "default", html: true, nunjucks: true, size: "l" }, 2) }}

{{ status(false, 0, 1, 2, 2, false) }}
