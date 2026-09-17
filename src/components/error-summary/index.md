---
layout: collection-page.njk
title: Error summary
description: Summarise form errors on the page and provide links to help users complete them.
group: components
cardImage: /error-summary.svg
phase: official
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 2
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Error summary example", group: "components", item: "error-summary", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

## How it works

Add links to all the form issues in the order in which they appear on the page.

When linking to checkboxes, radios and date input fields, add the ID of the first field in the list such as the first checkbox, the first radio item or the day field of the date input.

Find out how to help users [recover from validation errors](../../patterns/validation/).

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
