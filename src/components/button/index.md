---
layout: collection-page.njk
title: Button
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ status(true, 0, 1, 1, true) }}

The button component can be used as a call to action link or as a `<button>` element for use within forms.

{{ example({ group: "components", item: "button", example: "default", html: true, nunjucks: true, open: false, size: "xxs" }) }}

## Icons

Buttons can contain icons. Read more about [using icons in TNA services](/design-system/styles/icons/).

## Button groups

Use a button group to display buttons alongside one another. The buttons will stack on smaller screens.

{{ example({ group: "components", item: "button", example: "group", html: true, nunjucks: true, open: false, size: "s" }) }}
