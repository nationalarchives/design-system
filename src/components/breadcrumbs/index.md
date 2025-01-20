---
layout: collection-page.njk
title: Breadcrumbs
description: Breadcrumbs help users to understand where they are within a websites structure and move between levels.
group: components
statusProduction: true
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 1
statusDocumentationComplete: true
---

{% from "partials/example.njk" import example %}

The breadcrumbs component is also known as navigation path or cookie crumb.

{{ example({ group: "components", item: "breadcrumbs", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

{% include "partials/component-status.njk" %}

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

{{ example({ group: "components", item: "breadcrumbs", example: "no-collapse", html: true, nunjucks: true, size: "xxs" }) }}

## Using structured data

Enable structured data by setting the `structuredData` option to `true`. This will output additional markup that allows search engines to parse more information about your page.

Google provides ways to [test your structured data](https://developers.google.com/search/docs/appearance/structured-data).

{{ example({ group: "components", item: "breadcrumbs", example: "structured-data", html: true, nunjucks: true, size: "xxs" }) }}
