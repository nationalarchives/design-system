---
layout: collection-page.njk
title: Lists
description: Create lists of content to more easily allow users to find what they need.
group: styles
subGroup: content
# subGroupOrder: 2
---

{% from "partials/example.njk" import example %}

## Unordered lists

Use lists to make blocks of text easier to read, and to break information into manageable chunks.

Introduce bulleted lists with a lead-in line ending in a colon. Start each item with a lowercase letter, and do not use a full stop at the end.

{{ example({ group: "styles", item: "lists", example: "unordered-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

### Large unordered lists

If a list is hard to read because the items run across multiple lines you can add extra spacing.

Consider adding a bold title to each list item to make skimming the content easier.

{{ example({ group: "styles", item: "lists", example: "unordered-list-spaced", html: true, nunjucks: false, size: "xl", openHTML: true }) }}

### Dashed lists

Only use dashed lists for navigational items like in sidebars or tables of content.

{{ example({ group: "styles", item: "lists", example: "unordered-list-dashed", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

### Plain lists

In rare instances, you may want to remove the item markers from a list. Exercise caution when doing this as users will no longer be able to easily tell that the content is a list.

{{ example({ group: "styles", item: "lists", example: "unordered-list-plain", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Ordered lists

Use numbered lists instead of bulleted lists when the order of the items is relevant.

You do not need to use a lead-in line for numbered lists. Items in a numbered list should end in a full stop because each should be a complete sentence.

{{ example({ group: "styles", item: "lists", example: "ordered-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Description lists

The description lists can be plain or contain [icons](../icons/#displaying-information-with-icons).

{{ example({ group: "styles", item: "lists", example: "description-list", html: true, nunjucks: false, size: "m", openHTML: true }) }}

### Plain description lists

To reduce visual clutter, description lists can have the zebra-striped background removed.

{{ example({ group: "styles", item: "lists", example: "description-list-plain", html: true, nunjucks: false, size: "s", openHTML: true }) }}

### Chip lists

You can use a chip list to display a list of [chips](../typography/#chips).

The chips in a chip list can be links and can also contain [chip icons](../icons/#chip-lists-with-icons). If necessary, the chips can be a plain style with no background.

{{ example({ group: "styles", item: "lists", example: "chip-list", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Card lists

Use a `<ul>` element to create a list of [card components](../../components/card/).

{{ example({ group: "components", item: "card", example: "list", html: true, nunjucks: true, nunjucksOptions: false, size: "xl" }) }}

### Plain card lists

Cards don’t require an image. It could be benificial to use them for a list of pages.

{{ example({ group: "components", item: "card", example: "list-plain", html: true, nunjucks: true, nunjucksOptions: false, size: "xl" }) }}

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
