---
layout: collection-page.njk
title: Lists
description: Create lists of content to more easily allow users to find what they need.
group: styles
---

{% from "partials/example.njk" import example %}

## Unordered lists

{{ example({ group: "styles", item: "lists", example: "unordered-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Ordered lists

{{ example({ group: "styles", item: "lists", example: "ordered-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Description lists

The description lists can be plain or contain [icons](../icons/#displaying-information-with-icons).

{{ example({ group: "styles", item: "lists", example: "description-list", html: true, nunjucks: false, size: "m", openHTML: true }) }}

### Chip lists

You can use a chip list to display a list of [chips](../typography/#chips).

The chips in a chip list can be links and can also contain [chip icons](../icons/#chip-lists-with-icons).

{{ example({ group: "styles", item: "lists", example: "chip-list", html: true, nunjucks: false, size: "xxs", openHTML: true }) }}

## Card lists

Use a `<ul>` element to create a list of [card components](../../components/card/).

{{ example({ group: "components", item: "card", example: "list", html: true, nunjucks: false, size: "xl", noPadding: true }) }}

## Dashed lists

### Dashed unordered lists

{{ example({ group: "styles", item: "lists", example: "unordered-list-dashed", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

### Dashed ordered lists

{{ example({ group: "styles", item: "lists", example: "ordered-list-dashed", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Plain lists

### Plain unordered lists

{{ example({ group: "styles", item: "lists", example: "unordered-list-plain", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

### Plain ordered lists

{{ example({ group: "styles", item: "lists", example: "ordered-list-plain", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

### Plain description lists

{{ example({ group: "styles", item: "lists", example: "description-list-plain", html: true, nunjucks: false, size: "s", openHTML: true }) }}

### Plain card lists

Cards don't require an image. It could be benificial to use them for a list of pages.

{{ example({ group: "components", item: "card", example: "list-plain", html: true, nunjucks: false, size: "xxl", noPadding: true }) }}
