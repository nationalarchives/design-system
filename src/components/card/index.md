---
layout: collection-page.njk
title: Card
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{% from "nationalarchives/components/picture/macro.njk" import tnaPicture %}

Use the card component for providing previews to articles and pages.

{{ example({ group: "components", item: "card", example: "default", html: true, nunjucks: true, size: "xl" }) }}

{{ status(false, 0, 2, 2, 2, false) }}

## Horizontal

Use larger horizontal cards to draw attention to a specific article.

{{ example({ group: "components", item: "card", example: "horizontal", html: true, nunjucks: true, nunjucksOptions: false }) }}

## List of cards

Use a `<ul>` element to create a list of cards.

{{ example({ group: "components", item: "card", example: "list", html: true, nunjucks: false, size: "xl", noPadding: true, nunjucksOptions: false }) }}

### Plain list

Cards don't require an image. It could be benificial to use them for a list of pages.

{{ example({ group: "components", item: "card", example: "list-plain", html: true, nunjucks: false, size: "xxl", noPadding: true, nunjucksOptions: false }) }}

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
