---
layout: collection-page.njk
title: Layout
group: styles
---

{% from "partials/example.njk" import example %}

## Base template

A template is included in [TNA Frontend](https://github.com/nationalarchives/tna-frontend) that has support for the blocks specified below.

You can use this template in your prototypes or copy the structure into your production application.

See the [generic page template](https://github.com/nationalarchives/tna-frontend/blob/main/src/nationalarchives/templates/layouts/_generic.njk) in TNA Frontend.

<!-- {{ example({ group: "styles", item: "layout", example: "template", html: false, nunjucks: false, size: "xxl", noPadding: true }) }} -->

### Blocks

| Block           | Purpose                                                                          |
| --------------- | -------------------------------------------------------------------------------- |
| `pageTitle`     | Explictly writes to the `<title>` element                                        |
| `headIcons`     | Contains favicon and `apple-touch-icon` icons                                    |
| `head`          | Empty block for the addition of other contents in the `<head>`                   |
| `stylesheets`   | Block for including stylesheets                                                  |
| `bodyStart`     | Contains the top-of-page elements `cookies` and `skipLink`                       |
| `cookies`       | Contains the `tnaCookieBanner` component                                         |
| `skipLink`      | Contains the `tnaSkipLink` element                                               |
| `header`        | Block for the site’s header component (e.g. `tnaHeader`)                         |
| `main`          | Contains the main body of content along with the `<main>` element                |
| `beforeContent` | Can be used for pre-main elements such as breadcrumbs                            |
| `content`       | The main body of content                                                         |
| `afterContent`  | Can be used for post-main elements such as page feedback                         |
| `footer`        | Block for the site’s footer component (e.g. `tnaFooter`)                         |
| `bodyEnd`       | Contains code that needs to be included at the end of the page (e.g. JavaScript) |

### Block nesting

The blocks are nested in the following way:

- `<html>`
  - `<head>`
    - `pageTitle`
    - `headIcons`
    - `head`
    - `stylesheets`
  - `<body>`
    - `bodyStart`
      - `cookies`
      - `skipLink`
    - `header`
    - `main`
      - `beforeContent`
      - `<main>`
        - `content`
      - `afterContent`
    - `footer`
    - `bodyEnd`

| Variable      | Purpose                                                                                            | Default                 |
| ------------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| `htmlLang`    | Sets the `lang` attribute of the `<html>` element                                                  | `en-GB`                 |
| `htmlClasses` | Classes to add to the `<html>` element                                                             | [none]                  |
| `pageTitle`   | Sets the title of the page in the `<title>` element, before the `siteTitle`                        | [none]                  |
| `siteTitle`   | Sets the title of the page in the `<title>` element, after the `pageTitle`                         | `The National Archives` |
| `theme`       | Sets the [theme colour](/design-system/styles/colours/#theme-colours) of the site                  | `system`                |
| `themeAccent` | Sets the [accent colour](/design-system/styles/colours/#accent-colours) of the site                | `black`                 |
| `themeColor`  | The [theme-color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color) | `#000000`               |
| `assetPath`   | The path for the icons and images included from TNA Frontend                                       | `/assets`               |
| `bodyClasses` | Classes to add to the `<body>` element                                                             | [none]                  |
| `mainClasses` | Classes to add to the `<main>` element                                                             | [none]                  |

## Grid

{{ example({ group: "styles", item: "layout", example: "grid", html: true, nunjucks: false, size: "l", noPadding: true }) }}

### Column widths

- Large devices have a 12 column grid
- Medium devices have a 6 column grid
- Small devices have a 4 column grid
- Tiny devices have a 2 column grid

Based on the number of columns set for each size, (i.e. `$column-count`), there are size classes for all column widths up to that number. These numbers will **only be available in their simplest form**. This means that there is no `tna-column--width-8-12` class; only a `tna-column--width-2-3`.

#### Large devices

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

#### Medium devices

On a 6 column grid (medium devices), the widths available are:

| Width required | Class                          |
| -------------- | ------------------------------ |
| `1/6`          | `tna-column--width-1-6-medium` |
| `2/6`          | `tna-column--width-1-3-medium` |
| `3/6`          | `tna-column--width-1-2-medium` |
| `4/6`          | `tna-column--width-2-3-medium` |
| `5/6`          | `tna-column--width-5-6-medium` |
| `6/6`          | `tna-column--full-medium`      |

#### Small devices

On a 4 column grid (small devices), the widths available are:

| Width required | Class                         |
| -------------- | ----------------------------- |
| `1/4`          | `tna-column--width-1-4-small` |
| `2/4`          | `tna-column--width-1-2-small` |
| `3/4`          | `tna-column--width-3-4-small` |
| `4/4`          | `tna-column--full-small`      |

#### Tiny devices

On a 2 column grid (tiny devices), the widths available are:

| Width required | Class                        |
| -------------- | ---------------------------- |
| `1/2`          | `tna-column--width-1-2-tiny` |
| `2/2`          | `tna-column--full-tiny`      |

### Responsive example

{{ example({ group: "styles", item: "layout", example: "grid-responsive", html: true, nunjucks: false, size: "l", noPadding: true }) }}

### Flexible columns

Widths such as `1-4` or `1-3` are "absolute" value widths. The width of the column will be exactly as specified.

If you don’t know the width you need, or want a column to expand to fill a gap, use `flex-x` to specify how much 'weight' the size of that column gets.

You can also mix them to create full-fluid layouts For example, you can 'pad' empty space around fixed-width columns with no common denominator like so:

```text
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

### Media query units

- https://zellwk.com/blog/media-query-units/
- https://betterprogramming.pub/px-em-or-rem-examining-media-query-units-in-2021-e00cf37b91a9
