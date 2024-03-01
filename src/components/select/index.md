---
layout: collection-page.njk
title: Select
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The select component allows users to select a single value from a list of options.

Where possible, avoid overusing the select component. Alice Bartlett gave a talk at EpicFEL called ["Burn your select tags"](https://www.youtube.com/watch?v=CUkMCQR4TpY) which explains when the `<select>` tag is not the most appropriate tag to use.

{{ example({ group: "components", item: "select", example: "default", html: true, nunjucks: true, size: "xs" }) }}

{{ status(false, 0, 1, 2, false) }}

## Preselected

{{ example({ group: "components", item: "select", example: "preselected", html: true, nunjucks: true, size: "xs", nunjucksOptions: false }) }}

## Hint

{{ example({ group: "components", item: "select", example: "hint", html: true, nunjucks: true, size: "xs", nunjucksOptions: false }) }}

## Error

{{ example({ group: "components", item: "select", example: "error", html: true, nunjucks: true, size: "s", nunjucksOptions: false }) }}

## Inline

{{ example({ group: "components", item: "select", example: "inline", html: true, nunjucks: true, size: "xxs", nunjucksOptions: false }) }}
