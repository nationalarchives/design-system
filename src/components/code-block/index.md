---
layout: collection-page.njk
title: Code block
description: Display blocks of code for documentation purposes.
group: components
cardImage: /select.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "nationalarchives/components/warning/macro.njk" import tnaWarning %}
{% from "partials/example.njk" import example %}

{{ tnaWarning({
  headingLevel: 3,
  body: "When displaying code, ensure that it is properly escaped to avoid potential security vulnerabilities."
}) }}

Both Nunjucks and Jinja have the ability to autoescape template content and both enable the option by default. See [Autoescaping in Nunjucks](https://mozilla.github.io/nunjucks/api.html#autoescaping) and [Autoescaping in Jinja](https://jinja.palletsprojects.com/en/stable/api/#autoescaping).

{{ example({ group: "components", item: "code-block", example: "default", html: true, nunjucks: true, size: "m" }) }}

## Component status

{% include "partials/component-status.njk" %}

## Syntax highlighting

Code blocks can be syntax highlighted with [Prism.js](https://prismjs.com/).
