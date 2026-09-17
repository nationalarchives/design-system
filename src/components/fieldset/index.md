---
layout: collection-page.njk
title: Fieldset
description: The fieldset can group together related form fields.
group: components
cardImage: /fieldset.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Fieldset example", group: "components", item: "fieldset", example: "default", html: true, nunjucks: true, size: "xxl" }, 2) }}

## How it works

A fieldset can be used to group similar inputs together.

Do not use [checkbox](../checkboxes/), [radio](../radios/) and [date input](../date-input/) components inside a fieldset as they already contain their own fieldsets. Nested fieldsets can cause accessibility issues.

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
