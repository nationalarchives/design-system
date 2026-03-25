---
layout: collection-page.njk
title: Forms
description: Allow users to enter information, search for content or perform tasks.
group: styles
subGroup: content
---

{% from "partials/example.njk" import example %}

## User-submitted data

Allow users to enter data using:

- [checkboxes](../../components/checkboxes/)
- [date inputs](../../components/date-input)
- [radios](../../components/radios)
- [textareas](../../components/textarea)
- [text inputs](../../components/text-input)

Do not use the [date search](../../components/date-search/) or [select](../../components/select/) components in forms designed for users to submit data for storage.

{{ example({ group: "styles", item: "forms", example: "user-submitted", html: true, nunjucks: true, size: "xxl", showNunjucksOptions: false }) }}

### Displaying errors

Follow GOV.UK advice on [recovering from validation errors](https://design-system.service.gov.uk/patterns/validation/).

Use the [error summary component](../../components/error-summary/) to summarise the issues and provide links directly to the problem fields.

{{ example({ group: "styles", item: "forms", example: "user-submitted-with-errors", html: true, nunjucks: true, size: "xxl", showNunjucksOptions: false }) }}

## User accounts

Use the `autocomplete` property to help people fill in forms with their own data. See the [list of input purposes on w3.org](https://www.w3.org/TR/WCAG22/#input-purposes).

{{ example({ group: "styles", item: "forms", example: "user-accounts", html: true, nunjucks: true, size: "xxl", showNunjucksOptions: false }) }}

## Searching

Avoid allowing forms that are used for searching to produce errors.

Searching for dates should use the [date search component](../../components/date-search/). Using this component should mean that there is less chance of producing an error.

Use the [select component](../../components/select/) to offer simple options for sorting.

{{ example({ group: "styles", item: "forms", example: "searching", html: true, nunjucks: true, size: "xl", showNunjucksOptions: false }) }}

## Background colours

Don’t use forms within sections that use either accent or light accent [block colours](../colours/#block-colours). Use only regular, tinted or contrasting backgrounds.

## Field headings

Most form fields have support for a `headingLevel` property which adds a `<h1>` to `<h6>` to the form label. This allows screen reader users to jump to different fields based on the headings.

For simple pages with only a few fields, use `headingLevel: 1` to add an `<h1>` to the first field and omit headings for the other fields.

For pages with more complex forms or multiple forms, add a heading to the first field in each form or section.

For example, when you have a search form alongside your main form:

```html
<main>
  <h1><label for="question">Question</label></h1>
  <input id="question">

  <!-- // … -->
</main>

<aside>
  <h2><label for="search">Search</label></h2>
  <input id="search">

  <label for="sort-by">Sort by</label>
  <select id="sort-by">

  <!-- // … -->
</aside>
```

When you have forms that ask about multiple things:

```html
<main>
  <h1>Your team</h1>

  <!-- // … -->
</main>

<section>
  <h2><label for="designer-name">Name of designer</label></h2>
  <input id="designer-name">

  <label for="designer-email">Email of designer</label>
  <input id="designer-email">

  <!-- // … -->
</section>

<section>
  <h2><label for="delivery-manager-name">Name of delivery manager</label></h2>
  <input id="delivery-manager-name">

  <label for="delivery-manager-email">Email of delivery manager</label>
  <input id="delivery-manager-email">

  <!-- // … -->
</section>
```
