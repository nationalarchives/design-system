---
layout: collection-page.njk
title: Error pages
description: Provide users with clear and helpful error pages when something goes wrong.
group: content
---

{% from "partials/example.njk" import example %}

{{ example({ group: "content", item: "error-pages", example: "layout", html: false, nunjucks: false, size: "xxxl", noPadding: true }) }}

Provide the user with information about the error:

<dl class="tna-dl">
    <dt>Error type</dt>
    <dd>A very short description of the error in present tense such as "Page not found"</dd>
    <dt>Error details (optional)</dt>
    <dd>More details about why the error may have occured</dd>
    <dt>Suggested next steps</dt>
    <dd>Some possible next steps that the user can take to either access the content they want or report the issue</dd>
</dl>

Test all links and buttons to make sure they work. Remember to [do the hard work to make it simple](https://www.gov.uk/guidance/government-design-principles#do-the-hard-work-to-make-it-simple).

Remove all the header and footer links to keep the page focused on the error. This avoids error pages looking the same as "normal" content pages.

Some of the main types of error page are:

- [Page not found](#page-not-found)
- [Restricted access](#restricted-access)
- [Service issue](#service-issue)

## Page not found

{{ example({ group: "content", item: "error-pages", example: "page-not-found", html: true, nunjucks: false, size: "m" }) }}

Use a page not found if someone is trying to view a page that does not exist. This happens if someone:

- selects a link or button that takes them to a page that does not exist
- types or copies a web address for a page that does not exist
- types or copies a web address incorrectly

## Restricted access

{{ example({ group: "content", item: "error-pages", example: "restricted-access", html: true, nunjucks: false, size: "m" }) }}

Use a restricted access if someone is trying to view a page  or resource that they shouldn't be allowed to. This can happen if:

- the user is not known (unauthenticated)
- the user is known but not allowed to view (unauthorised)

## Service issue

{{ example({ group: "content", item: "error-pages", example: "service-issue", html: true, nunjucks: false, size: "s" }) }}

Use a service issue if someone is trying to view a page that the service is currently unable to render. This can happen if:

- the server is unavailable
- the server experienced an error that wasn't handled properly
- an unknown issue occured that isn't covered by other error messages
