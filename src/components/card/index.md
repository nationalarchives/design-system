---
layout: collection-page.njk
title: Card
description: Use the card component for providing previews to articles and pages.
group: components
statusProduction: true
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{% from "nationalarchives/components/picture/macro.njk" import tnaPicture %}

Use the card component for providing previews to articles and pages.

{{ example({ group: "components", item: "card", example: "default", html: true, nunjucks: true, size: "xl" }, 2) }}

{% include "partials/component-status.njk" %}

## Horizontal

Use larger horizontal cards to draw attention to a specific article.

{{ example({ group: "components", item: "card", example: "horizontal", html: true, nunjucks: true }) }}

## Images

Use 3:2 aspect ratio images as the default for thumbnails on card components.

Thumbnails should be around 600px wide and 400px tall to ensure they display well across all screen sizes.

{{ tnaPicture({
  src: "https://picsum.photos/600/400",
  alt: "An example image for the card component",
  width: 600,
  height: 400,
  caption: "An example 600x400 pixel image that is a suitable size for the card component."
}) }}
