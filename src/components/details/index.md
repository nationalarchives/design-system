---
layout: collection-page.njk
title: Details
description: Make a page easier to scan by letting users reveal more detailed information only if they need it.
group: components
cardImage: /details.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "details", example: "default", html: true, nunjucks: true, size: "xs", extraExpandableHeight: true }, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Caller function

The details macro can also be used with a [Nunjucks call block](https://mozilla.github.io/nunjucks/templating.html#call) or [Jinja2 call block](https://jinja.palletsprojects.com/en/stable/templates/#call).

Using a `call` block avoids having to escape complex HTML for the contents of the details component and replaces the need for the `body` and `text` options.

{{ example({ group: "components", item: "details", example: "caller", html: true, nunjucks: true, size: "xs", extraExpandableHeight: true }, 2) }}
