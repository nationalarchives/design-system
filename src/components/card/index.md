---
layout: collection-page.njk
title: Card
group: components
---

{% from "_example.njk" import example %}

Use the card component for providing previews to articles and pages.

{{ example({ group: "components", item: "card", example: "default", html: true, nunjucks: true, open: false, size: "xl" }) }}

## Horizontal

Use larger horizontal cards to draw attention to a specific article.

{{ example({ group: "components", item: "card", example: "horizontal", html: true, nunjucks: true, open: false }) }}

## List of cards

Use a plain list element (`<ul class="tna-ul tna-ul--plain">`) to create a list of cards.

{{ example({ group: "components", item: "card", example: "list", html: true, nunjucks: false, open: false, size: "xl", noPadding: true }) }}
