---
layout: collection-page.njk
title: Lists
group: styles
---

{% from "partials/example.njk" import example %}

## Unordered lists

{{ example({ group: "styles", item: "lists", example: "unordered-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Ordered lists

{{ example({ group: "styles", item: "lists", example: "ordered-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Description lists

{{ example({ group: "styles", item: "lists", example: "description-list", html: true, nunjucks: false, size: "m", openHTML: true }) }}

{{ example({ group: "styles", item: "lists", example: "description-list-icons", html: true, nunjucks: false, size: "s", openHTML: true }) }}

## Plain lists

{{ example({ group: "styles", item: "lists", example: "unordered-list-plain", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

{{ example({ group: "styles", item: "lists", example: "ordered-list-plain", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

{{ example({ group: "styles", item: "lists", example: "description-list-plain", html: true, nunjucks: false, size: "m", openHTML: true }) }}

{{ example({ group: "styles", item: "lists", example: "description-list-icons-plain", html: true, nunjucks: false, size: "s", openHTML: true }) }}

## Chip lists

You can use a chip list to display a list of [chips](/design-system/styles/typography/#chips).

The chips in a chip list can be links and can also contain [chip icons](/design-system/styles/icons/#chip-lists-with-icons).

{{ example({ group: "styles", item: "lists", example: "chip-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}
