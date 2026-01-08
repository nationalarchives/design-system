---
layout: collection-page.njk
title: Spacing
description: Space content out in a consistent and flexible manner that works for all screen sizes.
group: styles
subGroup: layout
---

{% from "partials/example.njk" import example %}

## Global spacing

One spacing unit is defined as `16px` by default. All margins and paddings are based off this base unit.

A top margin has been applied to some elements within [TNA Frontend](https://github.com/nationalarchives/tna-frontend) in order to space them evenly on a page.

The common mixin `space-above` is used to apply a consistent `2` units (`32px`) margin to the top of elements such as:

- headings and text (`<h1>`&mdash;`<h6>` and `<p>`)
- lists (`.tna-ul`, `.tna-ol` and `.tna-dl`)
- components (`.tna-message`, `.tna-card`, `tna-tabs`, `tna-picture`)
- component groups (`.tna-button-group`)

This margin is removed when the element is the first child.

### Rationale

Adding margins to the top of elements means we can chose how much of a margin to add based on the element itself. As an example, a `<ul>` element might need less space above it than a `<table>` element:

```css
p     { margin-top: 16px; } /* the p is separated from anything above by 16px */
ul    { margin-top: 32px; } /* the ul is separated from anything above by 32px */
table { margin-top: 48px; } /* the table is separated from anything above by 48px */
```

An element shouldn’t apply a bottom margin unless its next sibling element is known.

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

{{ example({ group: "styles", item: "spacing", example: "aside", html: true, nunjucks: false, size: "xxl", openHTML: true }) }}

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

| Size  | Size on large and medium devices | Size on small and tiny devices |
| ----- | -------------------------------- | ------------------------------ |
| `xs`  | `0.5` units (`8px`)              | `0.5` units (`8px`)            |
| `s`   | `1` units (`16px`)               | `0.75` units (`12px`)          |
| `m`   | `2` units (`32px`)               | `1.5` units (`24px`)           |
| `l`   | `3` units (`48px`)               | `2` units (`32px`)             |
| `xl`  | `5` units (`80px`)               | `3` units (`48px`)             |
| `xxl` | `8` units (`128px`)              | `5` units (`80px`)             |
| {caption: Default size of spacing in TNA Frontend} |

The format for the extra spacing override classes is:

```plain
tna-!--[property]-[direction]-[size]
```

{{ example({ group: "styles", item: "spacing", example: "margin-top", html: true, nunjucks: false, size: "xxxl", openHTML: true }) }}
