---
layout: collection-page.njk
title: Media
description: Provide services for a variety of screen sizes as well as print media.
group: styles
subGroup: layout
---

## Device sizes

Responsive breakpoints are referred to in relative size terms rather than specific devices such as "desktop", "tablet" and "mobile".

[TNA Frontend](https://github.com/nationalarchives/tna-frontend) has definitions for four different device sizes:

- large (desktop-like devices)
- medium (medium and small tablets)
- small (landscape mobile phones)
- tiny (portrait mobile phones)

The [default device breakpoints](https://github.com/nationalarchives/tna-frontend/blob/main/src/nationalarchives/variables/_media.scss) for these sizes are:

- `1025px` and above for large devices
- `769px`&ndash;`1024px` for medium devices
- `481px`&ndash;`768px` for small devices
- `480px` and below for tiny devices

### Media queries

Use the provided media tools from TNA Frontend to help you with media queries.

```css
@use "@nationalarchives/frontend/nationalarchives/tools/media";

.my-div {
  display: flex;

  @include media.on-tiny {
    flex-direction: column;
  }
}
```

The available mixins are:

| Query                   | Tiny                                                           | Small                                                          | Medium                                                         | Large                                                          |
| ----------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `on-tiny`               | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  |
| `on-small`              | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  |
| `on-medium`             | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  |
| `on-large`              | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes |
| `on-mobile`             | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  |
| `on-smaller-than-large` | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No |
| `on-larger-than-tiny`   | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes |
| `on-larger-than-mobile` | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes |

## Print

TNA Frontend includes a separate `print.css` stylesheet.

The stylesheet will hide some page elements when printing such as the header and footer components.

Other elements can be hidden with the class `tna-!--hide-on-print`.

## High contrast

TNA Frontend has support for additional styles in high contrast mode.

See [colours - high contrast themes](../colours/#high-contrast-themes) on how to impliment these.

<!--
## Media query units

- https://zellwk.com/blog/media-query-units/
- https://betterprogramming.pub/px-em-or-rem-examining-media-query-units-in-2021-e00cf37b91a9 -->
