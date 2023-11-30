---
layout: collection-page.njk
title: Icons
group: styles
---

{% from "_example.njk" import example %}

Use icons sparingly to reinforce call to actions and support small pieces of information such as metadata.
 
Icons should appear alongside text at the same font size.

Don't rely on icons alone to convey meaning.

## Call to action icons

The main call to action button on a page can use an icon to add visual impact. Avoid using icons in all call to action buttons.

{{ example({ group: "styles", item: "icons", example: "icon-button", html: true, nunjucks: false, open: false, size: "xxs" }) }}

## Brand icons

Use brand icons to add visual information to external site links.

{{ example({ group: "styles", item: "icons", example: "brand-icon-button", html: true, nunjucks: false, open: false, size: "xxs" }) }}

## Displaying information with icons

Use a [description list](/design-system/styles/lists/#description-lists) to show a list of fields and values. If space allows, the titles can be enhanced with icons.

{{ example({ group: "styles", item: "lists", example: "description-list-icons-plain", html: true, nunjucks: false, open: false, size: "s" }) }}

### Chip lists with icons

For smaller lists of metadata, icons can be used inside a [chip list](/design-system/styles/lists/#chip-lists).

Ensure the text in the chips would still make sense even if the icons were removed.

{{ example({ group: "styles", item: "icons", example: "chip-list-icons", html: true, nunjucks: false, open: false, size: "xs" }) }}