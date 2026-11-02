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
  body: 'This component feature is still in the <a href="../../component-statuses/#experimental">experimental phase</a>. Length calculations can differ between older and newer browsers.'
}) }}

{{ example({ title: "Textarea character count example", group: "components", item: "textarea", example: "character-count", html: true, nunjucks: true, size: "m" }) }}

### Count types

There are three types of counter:

<dl class="tna-dl tna-dl--stacked tna-dl--lined">
  <dt>
    <code>length</code> (default)
  </dt>
  <dd>
    <p>The length is calculated using code points (raw characters). Using this counter type means that some multibyte characters such as emojis and certain non-Latin characters are counted as multiple characters.</p>
    <p>Use when you have technical limitations on the length of text, such as stoaring the value in a database or sending it through an API.</p>
  </dd>
  <dt>
    <code>characters</code>
  </dt>
  <dd>
    <p>The character count tries to use locale-sensitive text segmentation. This more closely aligns to the number of visual characters on screen.</p>
    <p>Use when there is no technical limitation in your service or the limit far exceeds your desired length by a factor of at least 10 to account for multibyte characters.</p>
  </dd>
  <dt>
    <code>words</code>
  </dt>
  <dd>
    <p>Like <code>characters</code>, the number of words is counted using locale-sensitive text segmentation. Some older browsers that lack the necessary features will fall back to simply counting words as blocks of characters with spaces in between.</p>
    <p>Use when you want to try and limit the complexity of text input, for example keeping an enquiry simple by requiring it doesn't exceed 100 words.</p>
  </dd>
</dl>

| Example text             | `length` | `characters` | `words` | `words` (older browser) |
| ------------------------ | -------- | ------------ | ------- | ----------------------- |
| `text`                   | `4`      | `4`          | `1`     | `1`                     |
| `♥`                     | `1`      | `1`          | `0`     | `1`                     |
| `❤️`                     | `2`      | `1`          | `0`     | `1`                     |
| `🤦🏼‍♂️`                     | `7`      | `1`          | `0`     | `1`                     |
| `cafȩ́`                   | `6`      | `4`          | `1`     | `1`                     |
| `TheNationalArchives`    | `19`     | `19`         | `1`     | `1`                     |
| `The_National💪🏼Archives` | `24`     | `21`         | `2`     | `1`                     |
| {caption: Comparison of count types} |

{{ example({ title: "Textarea character count types example", group: "components", item: "textarea", example: "character-count-types", html: true, nunjucks: true, size: "m" }) }}

### Considerations for counters

Keep in mind:

- this feature relies on JavaScript
- there is no way for this component to stop a user posting more than the maximum number of characters - you also need to validate their input in the backend of your service
- line breaks can sometimes be either one or two characters depending on your backend service's operating system
- users will be easily able to circumvent word count limits by using no spaces so you might need to also implement a length restriction in your application
- where possible, ensure your service calculates the length using a similar method to the frontend to avoid validation disagreements between the front and back ends

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
