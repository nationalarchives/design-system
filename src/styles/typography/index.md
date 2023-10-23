---
layout: collection-page.njk
title: Typography
group: styles
---

{% from "_example.njk" import example %}

## Headings

Write all headings in sentence case.

Use heading tags, such as `<h1>`, `<h2>` and so on, to tag the headings on a page. Apply a heading class, such as `tna-heading--l`, to style them visually. Style headings consistently to create a clear content structure throughout your service.

{{ example({ group: "styles", item: "typography", example: "headings", html: true, nunjucks: false, open: false }) }}

### Headings with supertitles

Sometimes you may need to make it clear that a page is part of a larger section or group. To do this, you can use a heading group with a supertitle above the main heading.

The supertitle should be short, at most about 2–3 words or 12–15 characters.

By default, the supertitle is a contrasting colour to the text, usually inverted. It is controlled by the accent colour of the page.

{{ example({ group: "styles", item: "typography", example: "headings-with-separate-supertitles", html: true, nunjucks: false, open: false, size: "xs" }) }}

If the caption should be considered part of the page heading, you can also nest the supertitle within the heading.

{{ example({ group: "styles", item: "typography", example: "headings-with-supertitles", html: true, nunjucks: false, open: false, size: "xs" }) }}

## Paragraphs

### Body

The default paragraph font size is 18px on large and medium devices and 17px on small and tiny devices.

{{ example({ group: "styles", item: "typography", example: "paragraphs", html: true, nunjucks: false, open: false, size: "xxs" }) }}

### Small

You can use the `<small>` element sparingly to make your paragraph font size smaller: 15px.

The majority of your body copy should use the standard 18px paragraph size.

{{ example({ group: "styles", item: "typography", example: "paragraphs-small", html: true, nunjucks: false, open: false, size: "xxs" }) }}

## Blockquotes

{{ example({ group: "styles", item: "typography", example: "blockquote", html: true, nunjucks: false, open: false, size: "s" }) }}
