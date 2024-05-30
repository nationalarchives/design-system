---
layout: collection-page.njk
title: Forms
description: Allow users to enter information, search for content or perform tasks.
group: styles
---

{% from "partials/example.njk" import example %}

## User-submitted data

Allow users to enter data using:

- [checkboxes](../../components/checkboxes/)
- [date inputs](../../components/date-input)
- [radios](../../components/radios)
- [textareas](../../components/textarea)
- [text inputs](../../components/text-input)

Do not use the [date search](../../components/date-search/) or [select](../../components/select/) components in forms designed for users to submit data.

{{ example({ group: "styles", item: "forms", example: "user-submitted", html: true, nunjucks: true, size: "xxl", nunjucksOptions: false }) }}

### Displaying errors

Follow GOV.UK advice on [recovering from validation errors](https://design-system.service.gov.uk/patterns/validation/).

Use the [error summary component](../../components/error-summary/) to summarise the issues and provide links directly to the problem fields.

{{ example({ group: "styles", item: "forms", example: "user-submitted-with-errors", html: true, nunjucks: true, size: "xxl", nunjucksOptions: false }) }}

## User accounts

Use the `autocomplete` property to help people fill in forms with their own data. See the [list of input purposes on w3.org](https://www.w3.org/TR/WCAG21/#input-purposes).

{{ example({ group: "styles", item: "forms", example: "user-accounts", html: true, nunjucks: true, size: "xxl", nunjucksOptions: false }) }}

## Searching

Avoid allowing forms that are used for searching to produce errors.

Searching for dates should use the [date search component](../../components/date-search/). Using this component should mean that there is less chance of producing an error.

Use the [select component](../../components/select/) to offer simple options for sorting.

{{ example({ group: "components", item: "select", example: "default", html: true, nunjucks: true, nunjucksOptions: false, size: "xs" }) }}

## Backgrounds

Don't use forms within sections that use either accent or light accent [block colours](../colours/#block-colours). Use only regular, tinted or contrasting backgrounds.
