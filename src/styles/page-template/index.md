---
layout: collection-page.njk
title: Page template
description: Use the TNA Frontend base template to create consistent page layouts.
group: styles
subGroup: layout
---

{% from "partials/example.njk" import example %}

A template is included in [TNA Frontend](https://github.com/nationalarchives/tna-frontend) that has support for the blocks specified below.

You can use this template in your prototypes or copy the structure into your production application.

See the [generic page template](https://github.com/nationalarchives/tna-frontend/blob/main/src/nationalarchives/templates/layouts/_generic.njk) in TNA Frontend.

<!-- {{ example({ group: "styles", item: "layout", example: "template", html: false, nunjucks: false, size: "xxl" }) }} -->

## Blocks

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
| {caption: The default blocks available on the base template} |

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

## Variables

| Variable      | Purpose                                                                                            | Default                 |
| ------------- | -------------------------------------------------------------------------------------------------- | ----------------------- |
| `htmlLang`    | Sets the `lang` attribute of the `<html>` element                                                  | `en`                    |
| `htmlClasses` | Classes to add to the `<html>` element                                                             | [none]                  |
| `pageTitle`   | Sets the title of the page in the `<title>` element, before the `siteTitle`                        | [none]                  |
| `siteTitle`   | Sets the title of the page in the `<title>` element, after the `pageTitle`                         | `The National Archives` |
| `theme`       | Sets the [theme colour](../../styles/colours/#theme-colours) of the site                           | `system`                |
| `themeAccent` | Sets the [accent colour](../../styles/colours/#accent-colours) of the site                         | [none]                  |
| `themeColor`  | The [theme-color](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta/name/theme-color) | `#010101`               |
| `assetPath`   | The path for the icons and images included from TNA Frontend                                       | `/assets`               |
| `bodyClasses` | Classes to add to the `<body>` element                                                             | [none]                  |
| `mainClasses` | Classes to add to the `<main>` element                                                             | [none]                  |
| {caption: The default variables available in the base template} |

## CSS classes

There are two template classes that need to be present in order to correctly apply a page layout:

- `tna-template` - applied to the `<html>` element
- `tna-template__body` - applied to the `<body>` element
