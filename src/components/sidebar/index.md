---
layout: collection-page.njk
title: Sidebar
description: The sidebar can be used in a page to provide additional navigation.
group: components
cardImage: /sidebar.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

The sidebar component comes in three styles:

- [Contents](#contents)
- [Sections](#sections)
- [Pages](#pages)

## Component status

{% include "partials/component-status.njk" %}

## Contents

The contents style sidebar is used to show a list of all the top two or three levels of headings in the page, usually the `<h2>`, `<h3>` and `<h4>` elements.

Use this style to help users navigate pages with a large amount of content.

Display this sidebar on the left hand side of the page and make sure that on smaller devices, the sidebar appears above the page to act as a table of contents.

{{ example({ group: "components", item: "sidebar", example: "contents", html: true, nunjucks: true, size: "xl" }) }}

## Sections

The sections style sidebar provides links to sections of the page and each item can be highlighted to show the current section.

Display this sidebar on the left hand side of the page and make sure that on smaller devices, the sidebar appears above the page to act as a simplified table of contents.

{{ example({ group: "components", item: "sidebar", example: "sections", html: true, nunjucks: true, size: "xl" }) }}

## Pages

The pages style sidebar is used to link to other pages such as similar pages in a section of a site.

The current page can be highlighted and also display the top-level headings within it.

Display this sidebar on the right hand side of the page so that on smaller devices, the sidebar appears below the page content to act as an onward journey.

When using the pages sidebar style, consider adding another style sidebar that is only visible at the top of the page on smaller displays to allow users to jump to content on the page.

{{ example({ group: "components", item: "sidebar", example: "pages", html: true, nunjucks: true, size: "xl" }) }}

## Whole page examples

{{ example({ group: "components", item: "sidebar", example: "contents-page", html: false, nunjucks: false, size: "xxl", noAutoSize: true }) }}

{{ example({ group: "components", item: "sidebar", example: "sections-page", html: false, nunjucks: false, size: "xxl", noAutoSize: true }) }}

{{ example({ group: "components", item: "sidebar", example: "pages-page", html: false, nunjucks: false, size: "xxl", noAutoSize: true }) }}
