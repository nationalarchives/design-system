---
layout: collection-page.njk
title: Typography
description: Utilise a full range of typography to more clearly communicate your content.
group: styles
---

{% from "partials/example.njk" import example %}

## Headings

Write all headings in sentence case.

Use heading tags, such as `<h1>`, `<h2>` and so on, to tag the headings on a page. Apply a heading class, such as `tna-heading-l`, to style them visually. Style headings consistently to create a clear content structure throughout your service.

Headings contain a single sentence and do not need a full stop.

Large and extra large headings are Supria Sans Cond Medium and smaller headings are Open Sans Bold.

{{ example({ group: "styles", item: "typography", example: "headings", html: true, nunjucks: false, openHTML: true }) }}

### Headings with supertitles

Sometimes you may need to make it clear that a page is part of a larger section or group. To do this, you can use a heading group with a supertitle above the main heading.

The supertitle style uses [chips](#chips).

{{ example({ group: "styles", item: "typography", example: "headings-with-separate-supertitles", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

If the caption should be considered part of the page heading, you can also nest the supertitle within the heading.

{{ example({ group: "styles", item: "typography", example: "headings-with-supertitles", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Paragraphs

### Body

The default paragraph font size is 18px on large and medium devices and 17px on small and tiny devices.

All paragraphs within `.tna-template` are styled with the correct font and colour without the need for additional classes.

<!-- {{ example({ group: "styles", item: "typography", example: "paragraphs", html: true, nunjucks: false, size: "m", openHTML: true }) }} -->

#### Width

Line lengths should not exceed about 110&ndash;120 characters. This increases the readability of the text.

Use the [TNA Frontend grid system](../../styles/layout/#grid) to help limit line lengths. Body copy should be contained in:

- two-thirds width on large devices (`tna-column--width-2-3`)
- five-sixths width on medium devices (`tna-column--width-5-6-medium`)
- full width on small and tiny devices (`tna-column--full-small`, `tna-column--full-tiny`)

Using the standard widths that the grid system provides, these classes produce line lengths of no more than about 100&ndash;120 characters across all devices.

{{ example({ group: "styles", item: "typography", example: "paragraph-line-lengths", html: true, nunjucks: false, size: "m", openHTML: true }) }}

### Large

You can use a larger paragraph as an introduction to the page or section. 

{{ example({ group: "styles", item: "typography", example: "paragraphs-large", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

### Small

You can use the `<small>` element sparingly to make your paragraph font size smaller.

{{ example({ group: "styles", item: "typography", example: "paragraphs-small", html: true, nunjucks: false, size: "xxs", openHTML: true }) }}

### Bold

You can use the `<strong>` element to increase the weight of your paragraph font.

Use bold sparingly. Overuse will make it difficult for users to know which parts of your content they need to pay the most attention to.

{{ example({ group: "styles", item: "typography", example: "paragraphs-strong", html: true, nunjucks: false, size: "xxs", openHTML: true }) }}

### Scene setter

Use the scene setter as a stylistic alternative to the [large body text](#large).

{{ example({ group: "styles", item: "typography", example: "scene-setter", html: true, nunjucks: false, size: "xs", openHTML: true }) }}

## Blockquotes

{{ example({ group: "styles", item: "typography", example: "blockquote", html: true, nunjucks: false, size: "s", openHTML: true }) }}

## Chips

Chips are small "tags" of information. They are used in the [supertitles of heading groups](#headings-with-supertitles) as well as labels in the top left of some [card components](../../components/card/) and [index grid items](../../components/index-grid/).

The chip should be short, at most about 2–3 words or 12–15 characters.

{{ example({ group: "styles", item: "typography", example: "chip", html: true, nunjucks: false, size: "xxs", openHTML: true }) }}

By default, the chip is a contrasting colour to the text, usually inverted. It is controlled by the accent colour of the page.

You can use a plain style chip to avoid too much contrast in visually complex pages.

{{ example({ group: "styles", item: "typography", example: "chip-plain", html: true, nunjucks: false, size: "xxs", openHTML: true }) }}

Chips can be presented in a list format with a [chip list](../lists/#chip-lists).
