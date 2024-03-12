---
layout: collection-page.njk
title: Spacing
group: styles
---

{% from "partials/example.njk" import example %}

## Global spacing

A top margin has been applied to some elements within [TNA Frontend](https://github.com/nationalarchives/tna-frontend) in order to space them evenly on a page.

The common mixin `space-above` is used to apply a consistent `2rem` margin to the top of elements such as:

- headings and text (`<h1>`&mdash;`<h6>` and `<p>`)
- lists (`<ul>`, `<ol>` and `<dl>`)
- components (`.tna-message`, `.tna-card`, `tna-tabs`, `tna-picture`)
- component groups (`.tna-button-group`, `.tna-chip-list`)

This margin is removed when the element is the first child.

### Rationale

Adding margins to the top of elements means we can chose how much of a margin to add based on the element itself. As an example, a `<ul>` element might need less space above it than a `<table>` element:

```css
p     { margin-top: 1rem; } /* the p is separated from anything above by 1rem */
ul    { margin-top: 2rem; } /* the ul is separated from anything above by 2rem */
table { margin-top: 3rem; } /* the table is separated from anything above by 3rem */
```

<!-- The alternative would be to use more complex and less supported selectors to add margin to the bottom of the elements, overwriting the same property every time:

```css
p              { margin-bottom: 1rem; } /* style applied to the p element */
p:has(+ ul)    { margin-bottom: 2rem; } /* style applied to the p element */
p:has(+ table) { margin-bottom: 3rem; } /* style applied to the p element */
``` -->

### Headings

On top of the [global spacing](#global-spacing), headings have an additional top padding which:

- creates more separation between topics
- adds a space above the heading when it is jumped to with an anchor (e.g. above the heading for this section when you use [a heading link](#headings))

## Sections

The `.tna-section` class applies padding to the top and bottom of an element to space it out enough from surrounding content.

{{ example({ group: "styles", item: "spacing", example: "sections", html: true, nunjucks: false, size: "xxl", openHTML: true }) }}

## Asides

The `.tna-aside` class can be used to pad out a block of content that acts as an aside to the main article.

It is designed to be used with a background colour.

{{ example({ group: "styles", item: "spacing", example: "aside", html: true, nunjucks: false, size: "xl", openHTML: true }) }}

## Overriding spacing

### Removing space

`property` options:

- `margin`
- `padding`

`direction` options:

- `top`
- `bottom`
- `vertical` (`top` and `bottom`)

`device` options (optional):

- `large`
- `medium`
- `small`
- `tiny`

The format for the spacing removal classes are:

```plain
// For all devices
tna-!--no-[property]-[direction]

// For a specific device size
tna-!--no-[property]-[direction]-[device]
```

### Adding space

The `property` and `direction` options are the same as [removing space](#removing-space).

`size` options:

- `xs`
- `s`
- `m`
- `l`
- `xl`
- `xxl`

The format for the extra spacing override classes is:

```plain
tna-!--[property]-[direction]-[size]
```

{{ example({ group: "styles", item: "spacing", example: "margin-top", html: true, nunjucks: false, size: "xxl", openHTML: true }) }}
