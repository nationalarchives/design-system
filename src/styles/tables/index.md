---
layout: collection-page.njk
title: Tables
description: Use a tables to display tabular data.
group: styles
subGroup: content
---

{% from "partials/example.njk" import example %}

Do not use tables to lay out or organise content.

Ensure your tables have a `<caption>` element to describe the data in the table and make use of `<thead>`, `<tbody>` and `<tfoot>` elements.

{{ example({ group: "styles", item: "tables", example: "plain-table", html: true, nunjucks: false, size: "l", openHTML: true }) }}

## Scrollable tables

Wrap the table in a `<div class="tna-table-wrapper">` element to achieve scrolling when a table is to wide to fit inside its container.

To ensure good accessibility, make sure to add some attributes to the wrapper element:

- `tabindex="0"` - this will ensure the table can be focused on and then scrolled using a keyboard
- `role="region"` - because users need to be able to focus on the table, this identifies it as a significant region of the page
- `aria-labelledby="[table caption id]"` - this should be the `id` of the table's `<caption>` element which will describe the scrollable region

If JavaScript is available, the caption will be suffixed with `(scroll to see more)` only when the table is too wide for the screen to help screen readers.

> Firefox users won't see shadows on the edges of the table unless JavaScript is available.

{{ example({ group: "styles", item: "tables", example: "table-wrapper", html: true, nunjucks: false, size: "xxxl", openHTML: true }) }}
