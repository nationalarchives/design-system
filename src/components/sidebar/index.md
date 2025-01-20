---
layout: collection-page.njk
title: Sidebar
description: The sidebar can be used in a page to provide additional navigation.
group: components
statusProduction: true
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

{% include "partials/component-status.njk" %}

## Contents

The contents style sidebar is used to show a list of all the top two or three levels of headings in the page, usually the `<h2>`, `<h3>` and `<h4>` elements.

Use this style to help users navigate a large amount of content.

An example of a page with a content sidebar is the [accessibility statement](../../accessibility/) of this Design System.

{{ example({ group: "components", item: "sidebar", example: "contents", html: true, nunjucks: true, size: "l" }) }}

## Sections

The sections style sidebar provides links to sections of the page and each item can be highlighted to show the current section.

{{ example({ group: "components", item: "sidebar", example: "sections", html: true, nunjucks: true, size: "l" }) }}

## Pages

The pages style sidebar is used to link to other pages such as similar pages in a section of a site.

The current page can be highlighted and also display the top-level headings within it.

{{ example({ group: "components", item: "sidebar", example: "pages", html: true, nunjucks: true, size: "l" }) }}
