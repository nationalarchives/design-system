---
layout: collection-page.njk
title: Skip link
description: Use the skip link at the start of a page to allow the user to jump straight to the most important content.
group: components
cardImage: /skip-link.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Skip link example", group: "components", item: "skip-link", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

## How it works

Include a skip link at the start of every page to allow users to skip to the main content of the page.

By default, the skip link tries to skip to the element with `id="main-content"`.

## Multiple skip links

When navigating through paginated search results, there could be a lot of repeated content in the form of filters in a sidebar that keyboard users will have to skip past on every page load.

In this instance, add two skip links to the top of the page:

- Skip to search results
- Skip to main content

Order the skip links so that the least generic one comes first. Keyboard users will get the skip link that is probably most relevant first and if they don’t want to use it, the very next <kbd>Tab</kbd> will take them to the "normal" skip link to the main content that they should probably be familiar with.

If used so that the "Skip to main content" is first, the keyboard user might never know that there is a more helpful skip link.

If there is another part of the page that you see users frequently using, consider adding a skip link to that:

- Skip to main content
- Skip to list of other pages in this section

Avoid adding more than two skip links to a page.

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
