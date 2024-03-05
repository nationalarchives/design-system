---
layout: collection-page.njk
title: Index grid
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Use the index grid component to display a grid of links such as displaying a list of all child pages in a hierarchy.

The index grid includes a `tna-container` element so doesn't need to be used within a column system.

{{ example({ group: "components", item: "index-grid", example: "default", html: true, nunjucks: true, size: "xxxl" }) }}

{{ status(false, 0, 2, 2, 2, false) }}
