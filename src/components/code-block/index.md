---
layout: collection-page.njk
title: Code block
description: Display blocks of code for documentation purposes.
group: components
cardImage: /code-block.svg
phase: official
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 1
---

{% from "nationalarchives/components/warning/macro.njk" import tnaWarning %}
{% from "partials/example.njk" import example %}

{{ example({ title: "Code block example", group: "components", item: "code-block", example: "default", html: true, nunjucks: true, size: "m" }) }}

## How it works

The code block can be used to display any plain text content but is designed for showing programming code.

{{ tnaWarning({
  headingLevel: 3,
  body: "When displaying code, ensure that it is properly escaped to avoid potential security vulnerabilities."
}) }}

Both Nunjucks and Jinja have the ability to autoescape template content and both enable the option by default. See [Autoescaping in Nunjucks](https://mozilla.github.io/nunjucks/api.html#autoescaping) and [Autoescaping in Jinja](https://jinja.palletsprojects.com/en/stable/api/#autoescaping).

### Syntax highlighting

The code in a code block can be coloured with [Prism.js](https://prismjs.com/).

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
