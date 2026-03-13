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

{{ example({ group: "components", item: "search-field", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Prefilled

{{ example({ group: "components", item: "search-field", example: "prefilled", html: true, nunjucks: true, size: "xs" }) }}

## Hint

{{ example({ group: "components", item: "search-field", example: "hint", html: true, nunjucks: true, size: "s" }) }}

## Handling errors

The search field component does not have the ability to show errors like other input fields.

Use these solutions for handing user input:

- When nothing has been entered, return either no results or all results, depending on your service needs. This field shouldn't need to require a value.
- If the user enters an invalid search term (for example a broken query with unbalanced brackets) then show a warning where the results would normally be to explain the issue.
