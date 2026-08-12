---
layout: collection-page.njk
title: Search field
description: Use the search field component as an entry point into searches.
group: components
cardImage: /search-field.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Search field example", group: "components", item: "search-field", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Prefilled

{{ example({ title: "Search field prefilled example", group: "components", item: "search-field", example: "prefilled", html: true, nunjucks: true, size: "xs" }) }}

## Hint

{{ example({ title: "Search field with hint example", group: "components", item: "search-field", example: "hint", html: true, nunjucks: true, size: "s" }) }}

## Errors

The search field component does not have the ability to show errors like other input fields.

For handling user input:

- When nothing has been entered, return either no results or all results, depending on your service needs. This field shouldn’t require a value.
- If the user enters an invalid search term (for example a broken query with unbalanced brackets) then show a warning where the results would normally be to explain the issue.
