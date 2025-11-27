---
layout: collection-page.njk
title: Back link
description: Use a back link to allow users to return to a previous page or step of a process.
group: components
cardImage: /back-link.svg
phase: to-be-reviewed
statusTestedWithoutJavaScript: 1
statusTestedWithoutCSS: 1
statusPassedDacAudit: 2
statusAnalytics: 1
statusDocumentationComplete: true
---

{% from "partials/example.njk" import example %}

{{ example({ group: "components", item: "back-link", example: "default", html: true, nunjucks: true, size: "xxxs" }, 2) }}

{% include "partials/component-status.njk" %}

## When to use this component

You can include a back link on other pages within a multi-page transaction, if it makes sense to do so.

## When not to use this component

Never use the back link component together with the [breadcrumbs component](../breadcrumbs/). If necessary, you should do research with your users to learn which they find more helpful in your service.

## How it works

Always place back links at the top of a page, before the `<main>` element. Placing them here means that the ‘Skip to main content’ link allows the user to skip all navigation links, including the back link.

Make sure the link takes users to the previous page they were on, in the state they last saw it.

Where possible, ensure the back link works even when JavaScript is not available. If this is not possible, you should hide the back link when JavaScript is not available.

Using the default link text (‘Back’) is ideal for services with a simple journey.

For more complex user journeys, consider using different link text, like ‘Go back to [page]’. For example, in an admin system with many different areas. In this case, if you used ‘Back’, it might not be clear to users what they are going back to.
