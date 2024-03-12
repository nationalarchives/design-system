---
layout: collection-page.njk
title: Card
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

Use the card component for providing previews to articles and pages.

{{ example({ group: "components", item: "card", example: "default", html: true, nunjucks: true, size: "xl" }) }}

{{ status(false, 0, 2, 2, 2, false) }}

## Horizontal

Use larger horizontal cards to draw attention to a specific article.

{{ example({ group: "components", item: "card", example: "horizontal", html: true, nunjucks: true, nunjucksOptions: false }) }}

## List of cards

Use a [`<menu>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu) styled as a plain list (`<menu class="tna-ul tna-ul--plain">`) to create a list of cards.

{{ example({ group: "components", item: "card", example: "list", html: true, nunjucks: false, size: "xl", noPadding: true, nunjucksOptions: false }) }}

### Plain list

Cards don't require an image. It could be benificial to use them for a list of pages.

{{ example({ group: "components", item: "card", example: "list-plain", html: true, nunjucks: false, size: "xl", noPadding: true, nunjucksOptions: false }) }}
