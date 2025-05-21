---
layout: collection-page.njk
title: Hero
description: Use the hero component to start an article.
group: components
cardImage: /hero.svg
phase: production
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "hero", example: "default", html: true, nunjucks: true, size: "l" }, 2) }}

{% include "partials/component-status.njk" %}

## Images

As the height of a hero component is defined by their content, the background image will sometimes be clipped.

Try to use an image with a 5:2 aspect ratio with a suggested resolution of 1200px wide and 480px tall.

The hero element can also accept images for other screen sizes so use a 3:2 aspect ratio with a suggested resolution of 600px wide and 400px tall for smaller screens.
