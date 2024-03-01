---
layout: collection-page.njk
title: Breadcrumbs
description: Also known as navigation path or cookie crumb
group: components
---

{% from "_example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The breadcrumbs component helps users to understand where they are within a website’s structure and move between levels.

{{ example({ group: "components", item: "breadcrumbs", example: "default", html: true, nunjucks: true, size: "xxs" }) }}

{{ status(true, 1, 1, 1, true) }}

## When to use this component

Use the breadcrumbs component when you need to help users understand and move between the multiple levels of a website.

## When not to use this component

Do not use the breadcrumbs component on websites with a flat structure, or to show progress through a linear journey or transaction.

If you’re using other navigational elements on the page, such as a sidebar, consider whether your users need the additional support of breadcrumbs.

## How it works

Always place breadcrumbs at the top of a page, before the `<main>` element. Placing them here means that the ‘Skip to main content’ link allows the user to skip all navigation links, including breadcrumbs.

The breadcrumbs should start with your ‘home’ page and end with the parent section of the current page.

## Breadcrumbs on smaller devices

By default, the breadcrumbs will collapse on smaller devices to only show the first and last items with an option to expand them.

You can configure the breadcrumbs to never collapse by setting the `noCollapse` option to `true` or by adding the class `tna-breadcrumbs--no-collapse` to the main breadcrumbs element.

{{ example({ group: "components", item: "breadcrumbs", example: "no-collapse", html: true, nunjucks: true, size: "xxs", nunjucksOptions: false }) }}
