---
layout: collection-page.njk
title: Forms
description: Allow users to enter information, search for content or perform tasks.
group: styles
subGroup: content
---

{% from "partials/example.njk" import example %}

## Fields

There are some common form fields that allow users to enter information.

<dl class="tna-dl tna-dl--zebra">
  <dt>
    <a href="../../components/checkboxes/">checkboxes</a>
  </dt>
  <dd>Select multiple options from a defined list</dd>
  <dt>
    <a href="../../components/date-input/">date input</a>
  </dt>
  <dd>Enter a date using year, month and day fields</dd>
  <dt>
    <a href="../../components/file-input/">file input</a>
  </dt>
  <dd>Upload a file or multiple files</dd>
  <dt>
    <a href="../../components/radios/">radios</a>
  </dt>
  <dd>Select a single option from a defined list</dd>
  <dt>
    <a href="../../components/textarea/">textarea</a>
  </dt>
  <dd>Enter multiple lines of text</dd>
  <dt>
    <a href="../../components/text-input/">text input</a>
  </dt>
  <dd>Enter a single line of text</dd>
</dl>

If there are issues with information provided by a user, help them [recover from validation errors](../../patterns/validation/).

{{ example({ title: "Form fields example", group: "styles", item: "forms", example: "fields", html: true, nunjucks: true, size: "xxl", showNunjucksOptions: false }) }}

## Headings

Most form fields have support for a `headingLevel` property which adds a `<h1>` to `<h6>` to the form label which allows screen reader users to jump to different fields based on the headings.

If there is a single field on the page, use an `<h1>` in its label.

```html
<form>
  <h1>
    <label for="email">Enter your email</label>
  </h1>
  <input id="email">
</form>
```

If there are multiple fields, use an `<h1>` outside the form fields.

```html
<form>
  <h1>Create a new user</h1>
  <label for="username">Enter a username</label>
  <input id="username">
  <label for="email">Enter an email</label>
  <input id="email">
</form>
```

If there are multiple forms on the page, consider adding heading levels for secondary forms. If there is a single field, use a heading for the field label and if there are multiple fields, use a separate heading.

```html
<form>
  <h1>Create a new user</h1>
  <label for="username">Enter a username</label>
  <input id="username">
  <label for="email">Enter an email</label>
  <input id="email">
</form>

<form>
  <h2>
    <label for="search-username">Search for a user by username</label>
  </h2>
  <input id="search-username">
</form>

<form>
  <h2>Submit feedback</h2>
  <label for="feedback-email">Enter your email</label>
  <input id="feedback-email">
  <label for="feedback-feedback">Enter your feedback</label>
  <textarea id="feedback-feedback"></textarea>
</form>
```

## Autocomplete

Use the `autocomplete` property to help people fill in forms with their own data. See the [list of input purposes on w3.org](https://www.w3.org/TR/WCAG22/#input-purposes).

If you are working in production you’ll need to do this to meet [WCAG 2.2 success criterion 1.3.5 Identify input purpose](https://www.w3.org/WAI/WCAG22/Understanding/identify-input-purpose.html).

You will not normally need to use the `autocomplete` attribute in prototypes, as users will not generally be using their own devices.

{{ example({ title: "User accounts example", group: "styles", item: "forms", example: "autocomplete", html: true, nunjucks: true, size: "xxl", showNunjucksOptions: false }) }}

## Background colours

Don’t use forms within sections that use either accent or light accent [block colours](../colours/#block-colours). Use only plain, tinted or contrasting backgrounds.
