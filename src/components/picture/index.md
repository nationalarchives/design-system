---
layout: collection-page.njk
title: Picture
description: The picture component can display an image with additional information.
group: components
cardImage: /picture.svg
phase: official
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "picture", example: "default", html: true, nunjucks: true, size: "xxxl" }, 2) }}

{% include "partials/component-status.njk" %}

## Image sizes

Picture components need to show the entire image so they are free from aspect ratio restrictions.

Ensure the longest side of the image is no more than 900px.
