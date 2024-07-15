---
layout: collection-page.njk
title: Sidebar
description: The sidebar can be used in a page to provide additional navigation.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

The sidebar component comes in three styles:

- [Contents](#contents)
- [Sections](#sections)
- [Pages](#pages)

{{ status(false, 0, 1, 2, 2, false) }}

## Contents

The contents style sidebar is used to show a list of all the top two or three levels of headings in the page, usually the `<h2>`, `<h3>` and `<h4>` elements.

Use this style to help users navigate a large amount of content.

An example of a page with a content sidebar is the [accessibility statement](../../accessibility/) of this Design System.

{{ example({ group: "components", item: "sidebar", example: "contents", html: true, nunjucks: true, size: "l" }) }}

## Sections

The sections style sidebar provides links to sections of the page and each item can be highlighted to show the current section.

{{ example({ group: "components", item: "sidebar", example: "sections", html: true, nunjucks: true, size: "l" }) }}

## Pages

The pages style sidebar is used to link to other relevant pages. It can show similar pages in a section of a site.

The current page can be highlighted.

This page uses a pages style sidebar to list all the components in the Design System.

{{ example({ group: "components", item: "sidebar", example: "pages", html: true, nunjucks: true, size: "l" }) }}








