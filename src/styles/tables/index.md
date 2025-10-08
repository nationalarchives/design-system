---
layout: collection-page.njk
title: Tables
description: Use a tables to display tabular data.
group: styles
subGroup: content
---

{% from "partials/example.njk" import example %}

Do not use tables to lay out or organise content.

{{ example({ group: "styles", item: "tables", example: "plain-table", html: true, nunjucks: false, size: "l", openHTML: true }) }}

## Scrollable table wrappers

Wrap the table in a `<div class="tna-table-wrapper">` element to achieve scrolling when a wide table is used within in a column.

{{ example({ group: "styles", item: "tables", example: "table-wrapper", html: true, nunjucks: false, size: "xxxl", openHTML: true }) }}
