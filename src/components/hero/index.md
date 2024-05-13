---
layout: collection-page.njk
title: Hero
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Use the hero component to start an article.

{{ example({ group: "components", item: "hero", example: "default", html: true, nunjucks: true, size: "xl" }) }}

{{ status(true, 0, 1, 1, 2, false) }}

## Images

As the height of a hero component is defined by their content, the background image will sometimes be clipped.

Try to use an image with a 5:2 aspect ratio with a suggested resolution of 1200px wide and 480px tall.

The hero element can also accept images for other screen sizes so use a 3:2 aspect ratio with a suggested resolution of 600px wide and 400px tall for smaller screens.
