---
layout: collection-page.njk
title: Button
description: The button component can be used as a call to action link or as a button element for use within forms.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The button component can be used as a call to action link or as a `<button>` element for use within forms.

{{ example({ group: "components", item: "button", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

{{ status(true, 0, 1, 2, 0, false) }}

## Icons

Buttons can contain icons. Read more about [using icons in TNA services](../../styles/icons/).

## Button groups

Use a button group to display buttons alongside one another. The buttons will stack on smaller screens.

{{ example({ group: "components", item: "button", example: "group", html: true, nunjucks: true, size: "s" }) }}
