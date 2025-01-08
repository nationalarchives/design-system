---
layout: collection-page.njk
title: Icons
description: Use icons sparingly to reinforce call to actions and support small pieces of information such as metadata.
group: styles
subGroup: brand
---

{% from "partials/example.njk" import example %}

Don’t rely on icons alone to convey meaning. Ensure they are hidden from assistive technologies with `aria-hidden="true"`.
 
Icons should appear alongside text at the same font size. Icons on `tna-button` elements are itentionally slightly smaller.

Icons are not included in TNA Frontend by default. The icons are defined in a separate CSS file called `font-awesome.css` which you will also have to include in your application.

## Call to action icons

The main call to action button on a page can use an icon to add visual impact. Place the icon on the left of the button.

Avoid using icons in all call to action buttons.

{{ example({ group: "styles", item: "icons", example: "icon-button", html: true, nunjucks: true, size: "xxs", nunjucksOptions: false }) }}

With call to actions that benefit from an arrow or chevron icon that points to the right, align the icon to the right of the button text.

{{ example({ group: "styles", item: "icons", example: "icon-button-right-icon", html: true, nunjucks: true, size: "xxs", nunjucksOptions: false }) }}

<!-- ## Brand icons

TNA Frontend doesn’t include [Font Awesome brand icons](https://fontawesome.com/search?o=r&m=free&f=brands) by default.

Use brand icons to add visual information to external site links. Keep the brand icon on the left of the button.

{{ example({ group: "styles", item: "icons", example: "brand-icon-button", html: true, nunjucks: true, size: "xxs", nunjucksOptions: false }) }} -->

## Displaying information with icons

Use a [description list](../../styles/lists/#description-lists) to show a list of fields and values. If space allows, the titles can be enhanced with icons.

{{ example({ group: "styles", item: "lists", example: "description-list-icons", html: true, nunjucks: false, size: "s" }) }}

### Chip lists with icons

For smaller lists of metadata, icons can be used inside a [chip list](../../styles/lists/#chip-lists).

{{ example({ group: "styles", item: "icons", example: "chip-list-icons", html: true, nunjucks: false, size: "xxs" }) }}
