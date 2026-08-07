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

{{ example({ title: "Unordered list example", group: "styles", item: "lists", example: "unordered-list", html: true, nunjucks: false, size: "xs" }) }}

### Large unordered lists

If a list is hard to read because the items run across multiple lines you can add extra spacing.

Consider adding a bold title to each list item to make skimming the content easier.

{{ example({ title: "Large unordered list example", group: "styles", item: "lists", example: "unordered-list-spaced", html: true, nunjucks: false, size: "xl" }) }}

### Dashed lists

Only use dashed lists for navigational items like in sidebars or tables of content.

{{ example({ title: "Dashed list example", group: "styles", item: "lists", example: "unordered-list-dashed", html: true, nunjucks: false, size: "xs" }) }}

### Plain lists

In rare instances, you may want to remove the item markers from a list. Exercise caution when doing this as users will no longer be able to easily tell that the content is a list.

{{ example({ title: "Plain list example", group: "styles", item: "lists", example: "unordered-list-plain", html: true, nunjucks: false, size: "xs" }) }}

## Ordered lists

Use numbered lists instead of bulleted lists when the order of the items is relevant.

You do not need to use a lead-in line for numbered lists. Items in a numbered list should end in a full stop because each should be a complete sentence.

{{ example({ title: "Ordered list example", group: "styles", item: "lists", example: "ordered-list", html: true, nunjucks: false, size: "xs" }) }}

## Nested lists

Nested ordered and unordered lists don’t need their children to redeclare the `tna-ul` or `tna-ol` classes.

{{ example({ title: "Nested list example", group: "styles", item: "lists", example: "nested-lists", html: true, nunjucks: false, size: "xl" }) }}

## Description lists

The description lists can be plain or contain [icons](../icons/#displaying-information-with-icons).

{{ example({ title: "Description list example", group: "styles", item: "lists", example: "description-list", html: true, nunjucks: false, size: "m" }) }}

### Styled description lists

Description lists can have the zebra-striped background or lines added to help separate content.

{{ example({ title: "Styled description list examples", group: "styles", item: "lists", example: "description-list-styled", html: true, nunjucks: false, size: "m" }) }}

### Description list balancing

When not [stacked](#stacked-description-lists), a description list will balance its columns based on their content, much like a table would.

You can choose to split the right and left columns evenly with `tna-dl--even`, give more weight to the right column with `tna-dl--right-weighted` or to the left column with `tna-dl--left-weighted`.

{{ example({ title: "Description list balancing example", group: "styles", item: "lists", example: "description-lists-balance", html: true, nunjucks: false, size: "l" }) }}

### Stacked description lists

Description lists will stack on smaller devices. For lists with a lot of content, add `tna-dl--stacked` to stack lists on larger devices.

{{ example({ title: "Stacked description list example", group: "styles", item: "lists", example: "description-list-stacked", html: true, nunjucks: false, size: "xl" }) }}

### Chip lists

You can use a chip list to display a list of [chips](../typography/#chips).

The chips in a chip list can be links and can also contain [chip icons](../icons/#chip-lists-with-icons). If necessary, the chips can be a plain style with no background.

{{ example({ title: "Chip list example", group: "styles", item: "lists", example: "chip-list", html: true, nunjucks: false, size: "xs" }) }}

## Card lists

Use a `<ul>` element to create a list of [card components](../../components/card/).

{{ example({ title: "Card list example", group: "components", item: "card", example: "list", html: true, nunjucks: true, showNunjucksOptions: false, size: "xl" }) }}

### Plain card lists

Cards don’t require an image. It could be beneficial to use them for a list of pages.

{{ example({ title: "Plain card list example", group: "components", item: "card", example: "list-plain", html: true, nunjucks: true, showNunjucksOptions: false, size: "xl" }) }}

## Lists of files

When listing files, ensure that the link to each file includes:

- the name of the file (or the filename if it is human-readable)
- the type of file in a human-readable format rather than a MIME type (e.g. PDF)
- the size of the file (if known)
- the extent of the file (optional, if known) - this is the number of pages/slides/tables

Including this data will help people who use screen readers and keyboard navigation.

Make the file size no more than two decimal places long and use the appropriate SI units such as bytes, kB, and MB.

{{ example({ title: "Files list example", group: "styles", item: "lists", example: "links-list", html: true, nunjucks: false, size: "xs" }) }}

If necessary, split out the data into separate elements to make the list more readable in a similar fashion to the [files list component](../../components/files-list/).

All the information needs to be available to both sighted and non-sighted users.

{{ example({ title: "Expanded files list list example", group: "styles", item: "lists", example: "links-list-split", html: true, nunjucks: false, size: "xl" }) }}
