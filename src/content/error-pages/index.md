---
layout: collection-page.njk
title: Error pages
description: Provide users with clear and helpful error pages when something goes wrong.
group: content
---

{% from "partials/example.njk" import example %}

{{ example({ group: "content", item: "error-pages", example: "layout", html: false, nunjucks: false, size: "xxxxl" }) }}

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

Some of the main types of error page are:

- [Page not found](#page-not-found)
- [Restricted access](#restricted-access)
- [Service issue](#service-issue)
- [Rate limited](#rate-limited)

A complete list of responses that are available for error pages can be found on [MDN - HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status).

## Page not found

{{ example({ group: "content", item: "error-pages", example: "page-not-found", html: true, nunjucks: false, size: "m" }) }}

Use a page not found error if someone is trying to view a page that does not exist. This happens if someone:

- selects a link or button that takes them to a page that does not exist
- types or copies a web address for a page that does not exist
- types or copies a web address incorrectly

The server should also return a `404` response for this page.

## Restricted access

{{ example({ group: "content", item: "error-pages", example: "restricted-access", html: true, nunjucks: false, size: "m" }) }}

Use a restricted access error if someone is trying to view a page  or resource that they shouldn’t be allowed to. This can happen if:

- the user is not known (unauthenticated)
- the user is known but not allowed to view (unauthorised)

The server should also return either a `401` (Unauthorized) or `403` (Forbidden) response for this page.

## Service issue

{{ example({ group: "content", item: "error-pages", example: "service-issue", html: true, nunjucks: false, size: "s" }) }}

Use a service issue error if someone is trying to view a page that the service is currently unable to render. This can happen if:

- the server is unavailable
- the server experienced an error that wasn’t handled properly
- an unknown issue occured that isn’t covered by other error messages

The server should also return a response code in the `5xx` range.

## Rate limited

{{ example({ group: "content", item: "error-pages", example: "rate-limited", html: true, nunjucks: false, size: "s" }) }}

Use a rate limited error if someone makes too many requests to a service.

This error will mainly be aimed at bots and tools that are used to scrape content from the site, often sending enough requests to slow down parts of our system.

Don’t give details on how many requests in a given timeframe will trigger the error or how long until they are able to make more requests.
