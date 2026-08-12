---
layout: collection-page.njk
title: Recover from validation errors
description: Allow users to understand issues with the information they provide and help them to fix it.
group: patterns
---

{% from "partials/example.njk" import example %}

Check the information the user gives you to make sure it’s valid. If there’s a validation error, tell the user what’s gone wrong and how to fix it. Turn off HTML5 validation.



Follow GOV.UK advice on [recovering from validation errors](https://design-system.service.gov.uk/patterns/validation/).

Use the [error summary component](../../components/error-summary/) to summarise the issues and provide links directly to the problem fields.

{{ example({ title: "Errors example", group: "patterns", item: "validation", example: "errors", html: true, nunjucks: true, size: "xxl", showNunjucksOptions: false }) }}
