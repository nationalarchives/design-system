---
layout: collection-page.njk
title: Lists
group: styles
---

{% from "_example.njk" import example %}

## Unordered lists

{{ example({ group: "styles", item: "lists", example: "unordered-list", html: true, nunjucks: false, open: false, size: "xs" }) }}

## Ordered lists

{{ example({ group: "styles", item: "lists", example: "ordered-list", html: true, nunjucks: false, open: false, size: "xs" }) }}

## Description lists

{{ example({ group: "styles", item: "lists", example: "description-list", html: true, nunjucks: false, open: false, size: "m" }) }}

{{ example({ group: "styles", item: "lists", example: "description-list-icons", html: true, nunjucks: false, open: false, size: "m" }) }}

## Plain lists

{{ example({ group: "styles", item: "lists", example: "unordered-list-plain", html: true, nunjucks: false, open: false, size: "xs" }) }}

{{ example({ group: "styles", item: "lists", example: "ordered-list-plain", html: true, nunjucks: false, open: false, size: "xs" }) }}

{{ example({ group: "styles", item: "lists", example: "description-list-plain", html: true, nunjucks: false, open: false, size: "m" }) }}

{{ example({ group: "styles", item: "lists", example: "description-list-icons-plain", html: true, nunjucks: false, open: false, size: "m" }) }}

## Chip lists

You can use a chip list to display a list of [chips](/design-system/styles/typography/#chips).

The chips in a chip list can be links and can also contain [chip icons](/design-system/styles/icons/#chip-lists-with-icons).

{{ example({ group: "styles", item: "lists", example: "chip-list", html: true, nunjucks: false, open: false, size: "xs" }) }}
