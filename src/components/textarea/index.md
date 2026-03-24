---
layout: collection-page.njk
title: Textarea
description: Use the textarea component to allow the users to enter a longer string of text information such as feedback.
group: components
cardImage: /textarea.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "nationalarchives/components/warning/macro.njk" import tnaWarning %}
{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "textarea", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Prefilled

{{ example({ group: "components", item: "textarea", example: "prefilled", html: true, nunjucks: true, size: "s" }) }}

## Hint

{{ example({ group: "components", item: "textarea", example: "hint", html: true, nunjucks: true, size: "m" }) }}

## Error

{{ example({ group: "components", item: "textarea", example: "error", html: true, nunjucks: true, size: "m" }) }}

<!-- ## Inline

{{ example({ group: "components", item: "textarea", example: "inline", html: true, nunjucks: true, size: "xs" }) }} -->

## Itemised

{{ tnaWarning({
  headingLevel: 3,
  body: "This component feature is still under development."
}) }}

Allow users to enter a number of values into a field with the itemised textarea. This component does not feature autocomplete.

Without JavaScript, this renders a normal `<textarea>` where values can be separated by line breaks.

{{ example({ group: "components", item: "textarea", example: "itemised", html: true, nunjucks: true, size: "l" }) }}
