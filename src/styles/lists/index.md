---
layout: collection-page.njk
title: Lists
description: Create lists of content to more easily allow users to find what they need.
group: styles
subGroup: typography
---

{% from "partials/example.njk" import example %}

## Unordered lists

{{ example({ group: "styles", item: "lists", example: "unordered-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

### Spaced unordered lists

{{ example({ group: "styles", item: "lists", example: "unordered-list-spaced", html: true, nunjucks: false, size: "m", openHTML: true }) }}

## Ordered lists

{{ example({ group: "styles", item: "lists", example: "ordered-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Description lists

The description lists can be plain or contain [icons](../icons/#displaying-information-with-icons).

{{ example({ group: "styles", item: "lists", example: "description-list", html: true, nunjucks: false, size: "m", openHTML: true }) }}

### Chip lists

You can use a chip list to display a list of [chips](../typography/#chips).

The chips in a chip list can be links and can also contain [chip icons](../icons/#chip-lists-with-icons). If necessary, the chips can be a plain style with no background.

{{ example({ group: "styles", item: "lists", example: "chip-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Card lists

Use a `<ul>` element to create a list of [card components](../../components/card/).

{{ example({ group: "components", item: "card", example: "list", html: true, nunjucks: true, size: "xl", noPadding: true }) }}

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

{{ example({ group: "components", item: "card", example: "list-plain", html: true, nunjucks: true, size: "xxl", noPadding: true }) }}

## Lists of files

When listing files, ensure that the link to each file includes:

- the name of the file (or the filename if it is human-readable)
- the type of file in a human-readable format rather than a MIME type (e.g. PDF)
- the size of the file (if known)
- the extent of the file (optional, if known) - this is the number of pages/slides/tables

Including this data will help people who use screen readers and keyboard navigation.

Make the file size no more than two decimal places long and use the appropriate SI units such as bytes, kB, and MB.

{{ example({ group: "styles", item: "lists", example: "links-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

If necessary, split out the data into separate elements to make the list more readable in a similar fashion to the [files list component](../../components/files-list/).

All the information needs to be available to both sighted and non-signed users.

{{ example({ group: "styles", item: "lists", example: "links-list-split", html: true, nunjucks: false, size: "xl", openHTML: true }) }}
