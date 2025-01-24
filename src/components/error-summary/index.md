---
layout: collection-page.njk
title: Error summary
description: Summarise form errors on the page and provide links to help users complete them.
group: components
statusProduction: true
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 2
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "error-summary", example: "default", html: true, nunjucks: true, size: "s" }, 2) }}

{% include "partials/component-status.njk" %}

## How it works

Add links to all the form issues in the order in which they appear on the page.

When linking to checkboxes, radios and date input fields, add the ID of the first field in the list such as the first checkbox, the first radio item or the day field of the date input.

Take a look at the [example form with errors](../../styles/forms/#displaying-errors).
