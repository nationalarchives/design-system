---
layout: component.njk
title: Grid
---

The grid component is for...

{% from "_example.njk" import example %}

{{ example({group: "components", item: "grid", example: "default", html: true, nunjucks: true, open: false}) | safe }}

## Column widths

- Large devices have a 12 column grid
- Medium devices have a 6 column grid
- Small devices have a 4 column grid
- Tiny devices have a 2 column grid

Based on the number of columns set for each size, (i.e. `$column-count`), there are size classes for all column widths up to that number. These numbers will **only be available in their simplest form**. This means that there is no `.tna-column--width-8-12` class, and only a `.tna-column--width-2-3`.

### Large devices

On a 12 column grid (large devices), the widths available are:

| Width required | Class                     |
| -------------- | ------------------------- |
| `1/12`         | `tna-column--width-1-12`  |
| `2/12`         | `tna-column--width-1-6`   |
| `3/12`         | `tna-column--width-1-4`   |
| `4/12`         | `tna-column--width-1-3`   |
| `5/12`         | `tna-column--width-5-12`  |
| `6/12`         | `tna-column--width-1-2`   |
| `7/12`         | `tna-column--width-7-12`  |
| `8/12`         | `tna-column--width-2-3`   |
| `9/12`         | `tna-column--width-3-4`   |
| `10/12`        | `tna-column--width-5-6`   |
| `11/12`        | `tna-column--width-11-12` |
| `12/12`        | `tna-column--full`        |

### Medium devices

On a 6 column grid (medium devices), the widths available are:

| Width required | Class                          |
| -------------- | ------------------------------ |
| `1/6`          | `tna-column--width-1-6-medium` |
| `2/6`          | `tna-column--width-1-3-medium` |
| `3/6`          | `tna-column--width-1-2-medium` |
| `4/6`          | `tna-column--width-2-3-medium` |
| `5/6`          | `tna-column--width-5-6-medium` |
| `6/6`          | `tna-column--full-medium`      |

### Small devices

On a 4 column grid (small devices), the widths available are:

| Width required | Class                         |
| -------------- | ----------------------------- |
| `1/4`          | `tna-column--width-1-4-small` |
| `2/4`          | `tna-column--width-1-2-small` |
| `3/4`          | `tna-column--width-3-4-small` |
| `4/4`          | `tna-column--full-small`      |

### Tiny devices

On a 2 column grid (tiny devices), the widths available are:

| Width required | Class                        |
| -------------- | ---------------------------- |
| `1/2`          | `tna-column--width-1-2-tiny` |
| `2/2`          | `tna-column--full-tiny`      |

## Responsive example

{{ example({group: "components", item: "grid", example: "responsive", html: true, nunjucks: true, open: false}) | safe }}

## Flexible columns

Widths such as `1-4` or `1-3` are "absolute" value widths. The width of the column will be exactly as specified.

If you don't know the width you need, or want a column to expand to fill a gap, use `flex-x` to specify how much 'weight' the size of that column gets.

You can also mix them to create full-fluid layouts For example, you can 'pad' empty space around fixed-width columns with no common denominator like so:

```
|<--------------------------------------------- 100% --------------------------------------------->|
|                                                                                                  |
 ________________________ ________________________________ ________________________________________
| tna-column--width-1-4  | tna-column--width-1-3          | tna-column--flex-1                     |
|<-------- 25%  -------->|<----------- 33.3%  ----------->|<---------------- ???  ---------------->|
|                        |                                |                                        |
|                        |                                | Rather than us trying to calculate the |
|                        |                                | remainder of 100% - ¼ - ⅓, this column |
|                        |                                | will flex to whatever space is left    |
|                        |                                |                                        |

```

## Media query units

- https://zellwk.com/blog/media-query-units/
- https://betterprogramming.pub/px-em-or-rem-examining-media-query-units-in-2021-e00cf37b91a9
