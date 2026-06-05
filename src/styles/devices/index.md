---
layout: collection-page.njk
title: Devices
description: Provide services for a variety of screen sizes as well as print media.
group: styles
subGroup: layout
---

## Device sizes

Responsive breakpoints are referred to in relative size terms rather than specific devices such as "desktop", "tablet" and "mobile". This is because of the huge variation of devices available.

[TNA Frontend](../../get-started/tna-frontend/) has definitions for four different device sizes:

| Device size                                      | Description                | Pixel width         |
| ------------------------------------------------ | -------------------------- | ------------------- |
| `large`                                          | desktop-like devices       | `1025px` and above  |
| `medium`                                         | landscape handheld devices | `769px` to `1024px` |
| `small`                                          | portrait tablets           | `481px` to `768px`  |
| `tiny`                                           | portrait mobile phones     | `480px` and below   |
| {caption: The device sizes used in TNA Frontend} |

## Media queries

Use the provided media tools from TNA Frontend to help you with media queries.

```scss
@use "@nationalarchives/frontend/nationalarchives/tools/media";

.my-div {
  display: flex;

  @include media.on-tiny {
    flex-direction: column;
  }
}
```

| Query                                                    | Tiny                                                           | Small                                                          | Medium                                                         | Large                                                          |
| -------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- | -------------------------------------------------------------- |
| `on-tiny`                                                | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  |
| `on-small`                                               | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  |
| `on-medium`                                              | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  |
| `on-large`                                               | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes |
| `on-mobile`                                              | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  |
| `on-smaller-than-large`                                  | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  |
| `on-larger-than-tiny`                                    | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes |
| `on-larger-than-mobile`                                  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-xmark" aria-hidden="true"></i> No  | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes | <i class="fa-solid fa-fw fa-check" aria-hidden="true"></i> Yes |
| {caption: Device sizes affected by each media query} |
