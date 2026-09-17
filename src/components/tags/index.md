---
layout: collection-page.njk
title: Tags
description: The tags component provides users with a list of tags which can link to other content.
group: components
cardImage: /tags.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 0
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Tags example", group: "components", item: "tags", example: "default", html: true, nunjucks: true, size: "xs" }, 2) }}

{% if phase != "official" %}
## Component status
{% include "partials/component-status.njk" %}
{% endif %}
