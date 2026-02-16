---
layout: simple-with-nav.njk
title: Our brand
description: Assets and resources to support The National Archives brand.
priority: 0.8
---

{%- from "nationalarchives/components/files-list/macro.njk" import tnaFilesList -%}
{% from "partials/example.njk" import example %}

## Logo

The HTML logo included with TNA Frontend can be used with a transparent or solid background.

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
          default: 96
        }
      ]
    }
  ], size: "m"
}, 2) }}

The logo is designed to work with all [colour blocks](../styles/colours/#block-colours) in both [light and dark themes](../styles/colours/#themes). By default, the logo uses the current text colour of the block as the logo's text and border.

Use the solid version of the logo to increase contrast with the background or when placing on top of an image.

{{ example({ group: "brand", item: "logo", example: "colours", html: false, nunjucks: false, size: "xxl" }, 2) }}

### Occasion adornments

On certain dates of the year, our logo can be adorned with images to celebrate certain events. When JavaScript is available, the `title` attribute will also be changed to provide a descriptive tooltip on hover.

{{ example({ group: "brand", item: "logo", example: "adornable", html: false, nunjucks: false, size: "s" }, 2) }}

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
  itemHeadingLevel: 2,
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
      fileSize: "51 KB",
      fileExtent: "1024 x 1024px",
      icon: "image"
    }
  ],
  fullAreaClick: true
}) }}
