---
layout: collection-page.njk
title: Headers
description: Use one of the common standardised header patterns to start your page.
group: styles
subGroup: content
---

{% from "partials/example.njk" import example %}

Always ensure your page header is within the `<main>` element and the breadcrumbs are not.

## Plain

{{ example({ group: "styles", item: "headers", example: "plain", html: true, nunjucks: true, size: "xl", nunjucksOptions: false }) }}

## Accent

{{ example({ group: "styles", item: "headers", example: "accent", html: true, nunjucks: true, size: "xxl", nunjucksOptions: false }) }}

## Hero image

{{ example({ group: "styles", item: "headers", example: "hero", html: true, nunjucks: true, size: "xxxl", nunjucksOptions: false }) }}
