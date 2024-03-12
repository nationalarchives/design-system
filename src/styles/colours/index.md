---
layout: collection-page.njk
title: Colours
group: styles
---

{% from "partials/example.njk" import example %}
{% from "nationalarchives/components/message/macro.njk" import tnaMessage %}

## Brand colours

Always use the provided TNA colour palette.

### The greys

| Colour        | Hex                                                                             |
| ------------- | ------------------------------------------------------------------------------- |
| Black         | <span class="tna-ds-colour-swatch" style="background:#000000"></span> `#000000` |
| Grey          | <span class="tna-ds-colour-swatch" style="background:#8c9694"></span> `#8c9694` |
| Light grey    | <span class="tna-ds-colour-swatch" style="background:#d9d9d6"></span> `#d9d9d6` |
| White         | <span class="tna-ds-colour-swatch" style="background:#ffffff"></span> `#ffffff` |

<!--
### Primary

| Colour        | Hex                                                                             |
| ------------- | ------------------------------------------------------------------------------- |
| Yellow        | <span class="tna-ds-colour-swatch" style="background:#ffcc00"></span> `#ffcc00` |
| Pink          | <span class="tna-ds-colour-swatch" style="background:#fe1d57"></span> `#fe1d57` |
| Orange        | <span class="tna-ds-colour-swatch" style="background:#fd3f03"></span> `#fd3f03` |
| Green         | <span class="tna-ds-colour-swatch" style="background:#86bc25"></span> `#86bc25` |
| Blue          | <span class="tna-ds-colour-swatch" style="background:#00b0ff"></span> `#00b0ff` |

### Darks

| Colour        | Hex                                                                             |
| ------------- | ------------------------------------------------------------------------------- |
| Brown         | <span class="tna-ds-colour-swatch" style="background:#654e37"></span> `#654e37` |
| Maroon        | <span class="tna-ds-colour-swatch" style="background:#9c193a"></span> `#9c193a` |
| Chestnut      | <span class="tna-ds-colour-swatch" style="background:#8f3415"></span> `#8f3415` |
| Forest        | <span class="tna-ds-colour-swatch" style="background:#00623b"></span> `#00623b` |
| Navy          | <span class="tna-ds-colour-swatch" style="background:#004c7e"></span> `#004c7e` |

### Lights

| Colour        | Hex                                                                             |
| ------------- | ------------------------------------------------------------------------------- |
| Cream         | <span class="tna-ds-colour-swatch" style="background:#f9f7e2"></span> `#f9f7e2` |
| Pastel pink   | <span class="tna-ds-colour-swatch" style="background:#fad3d4"></span> `#fad3d4` |
| Pastel orange | <span class="tna-ds-colour-swatch" style="background:#f9e1bc"></span> `#f9e1bc` |
| Pastel green  | <span class="tna-ds-colour-swatch" style="background:#dde5d5"></span> `#dde5d5` |
| Pastel blue   | <span class="tna-ds-colour-swatch" style="background:#d4e5ef"></span> `#d4e5ef` |
-->

### Primary colour palette

| Colour | Main                                                                            | Darks                                                                                      | Lights                                                                                          |
| ------ | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------------------------- |
| Yellow | <span class="tna-ds-colour-swatch" style="background:#ffcc00"></span> `#ffcc00` | <span class="tna-ds-colour-swatch" style="background:#654e37"></span> `#654e37` (Brown)    | <span class="tna-ds-colour-swatch" style="background:#f9f7e2"></span> `#f9f7e2` (Cream)         |
| Pink   | <span class="tna-ds-colour-swatch" style="background:#fe1d57"></span> `#fe1d57` | <span class="tna-ds-colour-swatch" style="background:#9c193a"></span> `#9c193a` (Maroon)   | <span class="tna-ds-colour-swatch" style="background:#fad3d4"></span> `#fad3d4` (Pastel pink)   |
| Orange | <span class="tna-ds-colour-swatch" style="background:#fd3f03"></span> `#fd3f03` | <span class="tna-ds-colour-swatch" style="background:#8f3415"></span> `#8f3415` (Chestnut) | <span class="tna-ds-colour-swatch" style="background:#f9e1bc"></span> `#f9e1bc` (Pastel orange) |
| Green  | <span class="tna-ds-colour-swatch" style="background:#86bc25"></span> `#86bc25` | <span class="tna-ds-colour-swatch" style="background:#00623b"></span> `#00623b` (Forest)   | <span class="tna-ds-colour-swatch" style="background:#dde5d5"></span> `#dde5d5` (Pastel green)  |
| Blue   | <span class="tna-ds-colour-swatch" style="background:#00b0ff"></span> `#00b0ff` | <span class="tna-ds-colour-swatch" style="background:#004c7e"></span> `#004c7e` (Navy)     | <span class="tna-ds-colour-swatch" style="background:#d4e5ef"></span> `#d4e5ef` (Pastel blue)   |

### Extra web colour palette

| Colour                 | Light theme                                                                     | Dark theme                                                                      |
| ---------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------------------------------- |
| Page background        | <span class="tna-ds-colour-swatch" style="background:#f4f4f4"></span> `#f4f4f4` | <span class="tna-ds-colour-swatch" style="background:#222222"></span> `#222222` |
| Tinted background      | <span class="tna-ds-colour-swatch" style="background:#ededed"></span> `#ededed` | <span class="tna-ds-colour-swatch" style="background:#333333"></span> `#333333` |
| Contrasting background | <span class="tna-ds-colour-swatch" style="background:#1e1e1e"></span> `#1e1e1e` | <span class="tna-ds-colour-swatch" style="background:#111111"></span> `#111111` |
| Base font              | <span class="tna-ds-colour-swatch" style="background:#343338"></span> `#343338` | <span class="tna-ds-colour-swatch" style="background:#ffffff"></span> `#ffffff` |
| Links                  | <span class="tna-ds-colour-swatch" style="background:#0062a8"></span> `#0062a8` | <span class="tna-ds-colour-swatch" style="background:#00b0ff"></span> `#00b0ff` |
| Visited links          | <span class="tna-ds-colour-swatch" style="background:#4c2c92"></span> `#4c2c92` | <span class="tna-ds-colour-swatch" style="background:#aa88ff"></span> `#aa88ff` |

Ou full list of web colours can be found in the [colour variables for TNA Frontend](https://github.com/nationalarchives/tna-frontend/blob/main/src/nationalarchives/variables/_colour.scss).

## Theme colours

### System theme

The system theme follows the operating system preference for `prefers-color-scheme` ([MDN Web Docs - prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme)) which can either be `light` or `dark`.

Using the system theme will either display the [light theme](#light-theme) or [dark theme](#dark-theme), depending on the preference set in the user’s operating system.

```html
<html class="tna-template tna-template--system-theme">
  <head>
    <title>System theme</title>
  </head>
  <body class="tna-template__body">
    <p>Hello world</p>
  </body>
</html>
```

### Light theme

A light theme can be used with `tna-template--light-theme`.

{{ example({ group: "styles", item: "colours", example: "theme-light", html: false, nunjucks: false, size: "29_75rem", noPadding: true }) }}

### Dark theme

A dark theme can be used with `tna-template--dark-theme`.

{{ example({ group: "styles", item: "colours", example: "theme-dark", html: false, nunjucks: false, size: "29_75rem", noPadding: true }) }}

## High contrast themes

The high contrast themes are applied on top of the existing light and dark themes with an extra `tna-template--high-contrast-theme` class on the `tna-template` element.

The [system theme](#system-theme) follows the preference for `prefers-contrast` which can be `no-preference`, `more`, `less` or `custom`. See [MDN Web Docs - prefers-contrast](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-contrast).

TNA Frontend currently only supports the `prefers-contrast` values of `no-preference` and `more`.

The colour tools from TNA Frontend come with a mixin for high-contrast which enables you to add styles when high contrast mode is enabled:

```css
@use "@nationalarchives/frontend/nationalarchives/tools/colour";

.my-component {
  @include colour.on-high-contrast {
    @include colour.colour-border("keyline-dark", 1px);
  }
}
```

### Light high contrast theme

{{ example({ group: "styles", item: "colours", example: "theme-light-high-contrast", html: false, nunjucks: false, size: "29_75rem", noPadding: true }) }}

### Dark high contrast theme

{{ example({ group: "styles", item: "colours", example: "theme-dark-high-contrast", html: false, nunjucks: false, size: "29_75rem", noPadding: true }) }}

## Accent colours

Accent colours can be added on a per-template basis. Add one of the following classes to the `.tna-template` element:

- `tna-template--black-accent`
- `tna-template--pink-accent`
- `tna-template--orange-accent`
- `tna-template--yellow-accent`
- `tna-template--green-accent`
- `tna-template--blue-accent`

Elements that can follow the accent colour such as `tna-phase-banner--accent`, `tna-button--accent` and `tna-card--accent` as well as generic classes such as `tna-background-accent` will inherit the accent theme colours.

### Black

{{ example({ group: "styles", item: "colours", example: "accent-black", html: false, nunjucks: false, size: "xl" }) }}

### Pink

{{ example({ group: "styles", item: "colours", example: "accent-pink", html: false, nunjucks: false, size: "xl" }) }}

### Orange

{{ example({ group: "styles", item: "colours", example: "accent-orange", html: false, nunjucks: false, size: "xl" }) }}

### Yellow

{{ example({ group: "styles", item: "colours", example: "accent-yellow", html: false, nunjucks: false, size: "xl" }) }}

### Green

{{ example({ group: "styles", item: "colours", example: "accent-green", html: false, nunjucks: false, size: "xl" }) }}

### Blue

{{ example({ group: "styles", item: "colours", example: "accent-blue", html: false, nunjucks: false, size: "xl" }) }}

## Block colours

The colours of all elements in an element can be controlled with background classes:

- `tna-background-tint` &mdash; a light, neutral background colour to highlight an area of the page
- `tna-background-contrast` &mdash; a contrasting background and text colour
- `tna-background-accent` &mdash; a background colour based on the current template accent colour
- `tna-background-accent-light` &mdash; a lighter background colour based on the current template accent colour

For component design, you can also use the SCSS mixins from the `tools/colour` module to acheve the same results:

- `@include colour.tint-background`
- `@include colour.invert`
- `@include colour.accent`
- `@include colour.light-accent-background`

The appropriate colours for all child elements such as text and links will also be set. You do not have to change their colours independently.

### Tint

{{ example({ group: "styles", item: "colours", example: "block-tint", html: false, nunjucks: false, size: "18_75rem", noPadding: true }) }}

### Contrast

{{ example({ group: "styles", item: "colours", example: "block-contrast", html: false, nunjucks: false, size: "18_75rem", noPadding: true }) }}

### Accent

{{ example({ group: "styles", item: "colours", example: "block-accent", html: false, nunjucks: false, size: "18_75rem", noPadding: true }) }}

### Light accent

{{ example({ group: "styles", item: "colours", example: "block-accent-light", html: false, nunjucks: false, size: "18_75rem", noPadding: true }) }}

## Colour contrast

You must make sure that the contrast ratio of text and interactive elements in your service meets [level AA of the Web Content Accessibility Guidelines (WCAG 2.2)](https://www.w3.org/TR/WCAG22/#contrast-minimum).

All [colour combinations in TNA Frontend](https://nationalarchives.github.io/tna-frontend/iframe.html?args=&id=utilities-colours-combinations--combinations&viewMode=story) been tested for contrast.
