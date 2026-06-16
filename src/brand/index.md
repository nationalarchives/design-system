---
layout: simple-with-nav.njk
title: Our brand
description: Assets and resources to support The National Archives brand.
priority: 0.8
---

{%- from "nationalarchives/components/files-list/macro.njk" import tnaFilesList -%}
{% from "partials/example.njk" import example %}

## Logo

The HTML logo included with [TNA Frontend](../get-started/tna-frontend/) can be used with a transparent or solid background.

{{ example({
  group: "brand",
  item: "logo",
  example: "default",
  html: true,
  nunjucks: true,
  nunjucksOptions: [
    {
      name: "Primary options",
      id: "primary",
      options: [
        {
          name: "solid",
          type: "boolean",
          required: false,
          description: "<p>If <code>true</code>, make the background of the logo a solid colour.</p>",
          default: false
        },
        {
          name: "size",
          type: "number",
          required: false,
          description: "<p>Set the initial size of the logo on the page. This can be modified later with CSS.</p>",
          default: 96
        },
        {
          name: "adornable",
          type: "boolean",
          required: false,
          description: "<p>If <code>true</code>, allow the logo to have adornments for special occasions.</p>",
          default: false
        }
      ]
    }
  ], size: "m"
}) }}

The logo is designed to work with all [colour blocks](../styles/colours/#block-colours) in both [light and dark themes](../styles/colours/#themes). By default, the logo uses the current text colour of the block as the logo’s text and border.

Use the solid version of the logo to increase contrast with the background or when placing on top of an image.

{{ example({ group: "brand", item: "logo", example: "colours", html: false, nunjucks: false, size: "xxl" }) }}

### Occasion adornments

On certain dates of the year, our logo can be adorned with images to celebrate certain events. When JavaScript is available, the `title` attribute will also be changed to provide a descriptive tooltip on hover.

{{ example({ group: "brand", item: "logo", example: "adornable", html: false, nunjucks: false, size: "s" }) }}

To enable this, add the following CSS and JavaScript to your page. It will automatically adorn the logos on your site on the correct day.

```html
<!-- Add to the <head> element -->
<link
  rel="stylesheet"
  href="https://www.nationalarchives.gov.uk/enrichment/css/logo-adornments.css"
  media="screen"
/>

<!-- Add just before the closing </body> element -->
<script
  type="module"
  src="https://www.nationalarchives.gov.uk/enrichment/js/logo-adornments.js"
  defer
></script>
```

### Static assets

{{ tnaFilesList({
  itemHeadingLevel: 4,
  items: [
    {
      id: "logo-svg",
      text: "The National Archives logo",
      href: "/static/assets/images/tna-square-logo.svg",
      fileType: "SVG",
      fileSize: "3 KB",
      icon: "code"
    },
    {
      id: "logo-svg-dark",
      text: "The National Archives logo (dark)",
      href: "/static/assets/images/tna-square-logo-dark.svg",
      fileType: "SVG",
      fileSize: "3 KB",
      icon: "code"
    },
    {
      id: "logo-favicon",
      text: "The National Archives favicon",
      href: "/static/assets/images/favicon.ico",
      fileType: "ICO",
      fileSize: "7 KB",
      icon: "image"
    },
    {
      id: "logo-png",
      text: "The National Archives logo (rasterised)",
      href: "/static/assets/images/icon-1024x1024.png",
      fileType: "PNG",
      fileSize: "43 KB",
      fileExtent: "1024 x 1024px",
      icon: "image"
    },
    {
      id: "logo-png-dark",
      text: "The National Archives logo (rasterised, dark)",
      href: "/static/assets/images/icon-1024x1024-dark.png",
      fileType: "PNG",
      fileSize: "43 KB",
      fileExtent: "1024 x 1024px",
      icon: "image"
    }
  ],
  fullAreaClick: true
}) }}

## Open Graph images

The [Open Graph protocol](https://ogp.me/) allows sites to define how they appear when shared on social media and other applications.

You can add an image to your page using `<meta>` elements in your HTML.

```html
<meta property="og:image" content="nationalarchives-opengraph-image.png">
<meta property="og:image:width" content="600">
<meta property="og:image:height" content="400">
<meta property="og:image:type" content="image/png">
```

{{ tnaFilesList({
  itemHeadingLevel: 3,
  items: [
    {
      id: "og-light",
      text: "The National Archives OpenGraph image",
      href: "/static/assets/images/nationalarchives-opengraph-image.png",
      fileType: "PNG",
      fileSize: "8 KB",
      fileExtent: "1200 x 630px",
      icon: "image"
    },
    {
      id: "og-dark",
      text: "The National Archives OpenGraph image (dark)",
      href: "/static/assets/images/nationalarchives-opengraph-image-dark.png",
      fileType: "PNG",
      fileSize: "8 KB",
      fileExtent: "1200 x 630px",
      icon: "image"
    }
  ],
  fullAreaClick: true
}) }}
