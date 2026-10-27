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
priority: 1
---

{% from "nationalarchives/components/warning/macro.njk" import tnaWarning %}
{% from "partials/example.njk" import example %}

{{ example({ title: "Textarea example", group: "components", item: "textarea", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

## Prefilled

{{ example({ title: "Textarea prefilled example", group: "components", item: "textarea", example: "prefilled", html: true, nunjucks: true, size: "s" }) }}

## Hint

{{ example({ title: "Textarea with hint example", group: "components", item: "textarea", example: "hint", html: true, nunjucks: true, size: "m" }) }}

## Error

{{ example({ title: "Textarea error example", group: "components", item: "textarea", example: "error", html: true, nunjucks: true, size: "m" }) }}

## Character count

You can set a soft limit on the number of characters (or words) allowed in a textarea.

{{ tnaWarning({
  headingLevel: 3,
  body: 'This component feature is still in the <a href="../../component-statuses/#experimental">experimental phase</a>.'
}) }}

{{ example({ title: "Textarea error example", group: "components", item: "textarea", example: "character-count", html: true, nunjucks: true, size: "m" }) }}

### Considerations for counters

When counting characters, keep in mind:

- some characters consist of multiple characters, for example, emojis and some non-Latin characters
- line breaks are counted as single characters
- there is no way to stop the user posting beyond the maximum so you need to validate their text in the backend of your service

When counting words, keep in mind:

- in this component, "words" are simply defined as text surrounded by a space
- punctuation can count as words
- users might be able to circumvent the limit by using no spaces (e.g. `ThisCountsAsASingleWord`) so you might also need to implement a length restriction in your application

## Itemised

{{ tnaWarning({
  headingLevel: 3,
  body: 'This component feature is still in the <a href="../../component-statuses/#experimental">experimental phase</a>.'
}) }}

Allow users to enter a number of values into a field with the itemised textarea. This component does not feature autocomplete.

Without JavaScript, this renders a normal `<textarea>` where values can be separated by line breaks.

{{ example({ title: "Textarea itemised example", group: "components", item: "textarea", example: "itemised", html: true, nunjucks: true, size: "l" }) }}

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
