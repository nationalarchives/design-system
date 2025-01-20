---
layout: collection-page.njk
title: Grid
description: Use the TNA grid system to help position and organise content on your pages.
group: styles
subGroup: layout
---

{% from "partials/example.njk" import example %}

[TNA Frontend](https://github.com/nationalarchives/tna-frontend) comes with a responsive grid system based on the user's [device size](../devices/#device-sizes).

{{ example({ group: "styles", item: "grid", example: "columns", html: true, nunjucks: false, size: "l", noPadding: true }) }}

## Grid elements

There are two grid elements:

- [containers](#containers)
- [columns](#columns)

### Containers

A container can be made by adding a `tna-container` class to an element.

The container will restrict the total width of the site to the calue of the `$largest-container-width` variable which has a default of `1280px`.

Columns can then be added inside a container.

### Columns

A column exists as a direct child of a container and can be created by using the class `tna-column`.

By default, a column is as narrow as the content that it contains and is aligned to the left of a container.

{{ example({ group: "styles", item: "grid", example: "columns-no-width", html: true, nunjucks: false, size: "s", noPadding: true }) }}

## Column widths

[Different sized devices](../devices/#device-sizes) have a different number of columns in their grid:

<dl class="tna-dl tna-dl--plain">
  <dt>Large devices</dt>
  <dd>12 column grid</dd>
  <dt>Medium devices</dt>
  <dd>6 column grid</dd>
  <dt>Small devices</dt>
  <dd>4 column grid</dd>
  <dt>Tiny devices</dt>
  <dd>2 column grid</dd>
</dl>

Based on the number of columns for each size, there are size classes for all fractions of column widths up to that number.

{{ example({ group: "styles", item: "grid", example: "responsive-columns", html: true, nunjucks: false, size: "l", noPadding: true }) }}

> Columns are only available in their simplest fractional forms. This means that there is no `tna-column--width-8-12` class; only a `tna-column--width-2-3`.

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

## Flexible columns

Widths such as `1-4` or `1-3` are "absolute" value widths. The width of the column will be exactly as specified.

If you don’t know the width you need, or want a column to expand to fill a gap, use `tna-column--flex-x` (suffixed with `-medium`, `-small` or `-tiny` if required for different device sizes) to specify how much 'weight' the size of that column gets.

{{ example({ group: "styles", item: "grid", example: "flexible-columns", html: true, nunjucks: false, size: "s", noPadding: true }) }}

## Changing alignment

### Horizontal alignment

{{ example({ group: "styles", item: "grid", example: "container-alignment", html: true, nunjucks: false, size: "l", noPadding: true }) }}

### Vertical alignment

{{ example({ group: "styles", item: "grid", example: "column-alignment", html: true, nunjucks: false, size: "l", noPadding: true }) }}

## Nested containers

Sometimes it is necessary to nest containers within columns. In this instance, the inner container needs the additional class of `tna-container--nested`.

{{ example({ group: "styles", item: "grid", example: "nested-containers", html: true, nunjucks: false, size: "l", noPadding: true }) }}
