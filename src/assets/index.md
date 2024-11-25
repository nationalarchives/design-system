---
layout: simple-with-nav.njk
title: Assets
---

{%- from "nationalarchives/components/files-list/macro.njk" import tnaFilesList -%}

## Logos

{{ tnaFilesList({
  itemHeadingLevel: 3,
  items: [
    {
      id: "logo-svg",
      text: "The National Archives logo",
      href: "/design-system/static/assets/images/tna-square-logo.svg",
      fileType: "SVG",
      fileSize: "3 KB"
    },
    {
      id: "logo-favicon",
      text: "The National Archives favicon",
      href: "/design-system/static/assets/images/favicon.ico",
      fileType: "ICO",
      fileSize: "7 KB"
    },
    {
      id: "logo-png",
      text: "The National Archives logo (rasterised)",
      href: "/design-system/static/assets/images/icon-1024x1024.png",
      fileType: "PNG",
      fileSize: "51 KB",
      fileExtent: "1024 x 1024px"
    }
  ],
  fullAreaClick: true
}) }}
