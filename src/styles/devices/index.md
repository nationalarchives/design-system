---
layout: collection-page.njk
title: Devices
description: Provide services for a variety of screen sizes as well as print media.
group: styles
subGroup: layout
---

## Device sizes

Responsive breakpoints are referred to in relative size terms rather than specific devices such as "desktop", "tablet" and "mobile". This is because of the huge variation of devices available.

[TNA Frontend](https://github.com/nationalarchives/tna-frontend) has definitions for four different device sizes:

| Device size | Description                | Pixel width         |
| ----------- | -------------------------- | ------------------- |
| `large`     | desktop-like devices       | `1025px` and above  |
| `medium`    | landscape handheld devices | `769px` to `1024px` |
| `small`     | portrait tablets           | `481px` to `768px`  |
| `tiny`      | portrait mobile phones     | `480px` and below   |
| {caption: The device sizes used in TNA Frontend} |

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

The available mixins for the device sizes are:

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
| {caption: The device sizes affected by each media query} |

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
