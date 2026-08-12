---
layout: collection-page.njk
title: Error pages
description: Provide users with clear and helpful error pages when something goes wrong.
group: patterns
---

{% from "partials/example.njk" import example %}

Provide the user with information about the error:

<dl class="tna-dl tna-dl--zebra">
    <dt>Error type</dt>
    <dd>A very short description of the error in present tense such as "Page not found"</dd>
    <dt>Error details (optional)</dt>
    <dd>More details about why the error may have occurred</dd>
    <dt>Suggested next steps</dt>
    <dd>Some possible next steps that the user can take</dd>
</dl>

Also include the [response code from the service](#response-codes) to allow the user to pass on helpful information to the supporting team.

{{ example({ title: "Error page example", group: "patterns", item: "error-pages", example: "layout", html: false, nunjucks: false, size: "xxxxl" }) }}

Test all links and buttons to make sure they work. Remember to [do the hard work to make it simple](https://www.gov.uk/guidance/government-design-principles#do-the-hard-work-to-make-it-simple).

The page should have:

- the error appear as the page title
- contact information, if it exists and helps meet a user need
- a link to another service, if they can use it to do what they came to do

Contact information should either be:

- a link to a specific page that includes numbers and opening times
- include all numbers and opening times

Have clear and concise content and do not use:

- breadcrumbs
- vague, unhelpful words like maintenance, improvements
- technical words like proxy, unauthenticated
- red text to warn people

## Page not found

{{ example({ title: "Page not found example", group: "patterns", item: "error-pages", example: "page-not-found", html: true, nunjucks: false, size: "m" }) }}

Use a page not found error if someone is trying to view a page that does not exist. This happens if someone:

- selects a link or button that takes them to a page that does not exist
- types or copies a web address for a page that does not exist
- types or copies a web address incorrectly

The server should return a `404` [response code](#response-codes).

Follow the advice on [Page not found pages on the GOV.UK Design System](https://design-system.service.gov.uk/patterns/page-not-found-pages/).

## Restricted access

{{ example({ title: "Restricted access example", group: "patterns", item: "error-pages", example: "restricted-access", html: true, nunjucks: false, size: "m" }) }}

Use a restricted access error if someone is trying to view a page or resource that they shouldn’t be allowed to. This can happen if:

- the user is not known
- the user is known but not allowed to view
- the user did not provide login details to a proxy server that handled the request

The server should return a `401`, `403` or `407` [response code](#response-codes).

## Unknown request

{{ example({ title: "Unknown request example", group: "patterns", item: "error-pages", example: "unknown-request", html: true, nunjucks: false, size: "m" }) }}

Use a unknown request error if someone is requesting something that doesn't make sense.

For example, the user could manually change a URL from having `?year=2001` at the end to `?year=abc`. In this instance, we don't know how to respond to the request because we expect a year to be a number.

If the user uses a URL that is valid but just doesn't have any results (for example `?year=1234567890`), use a [page not found](#page-not-found) instead.

A user could also try and visit a URL that was meant to receive form data (using `GET` rather than a `POST`). In this instance, the server should respond with an unknown request error.

The server should return a `400`, `405` or `406` [response code](#response-codes).

## Service issue

{{ example({ title: "Service issue example", group: "patterns", item: "error-pages", example: "service-issue", html: true, nunjucks: false, size: "s" }) }}

Use a service issue error if someone is trying to view a page that the service is currently unable to render. This can happen if:

- the server is unavailable
- the server experienced an error that wasn’t handled properly
- an unknown issue occurred that isn’t covered by other error messages

The server should also return a [response code](#response-codes) in the `5xx` range.

Follow the advice on [Service unavailable pages on the GOV.UK Design System](https://design-system.service.gov.uk/patterns/service-unavailable-pages/).

## Service down

{{ example({ title: "Service down example", group: "patterns", item: "error-pages", example: "service-down", html: true, nunjucks: false, size: "s" }) }}

Tell the user a service is unavailable on purpose (for example during maintenance). These are also known as shutter pages.

The server should return a `503` [response code](#response-codes).

Follow the advice on [Service unavailable pages on the GOV.UK Design System](https://design-system.service.gov.uk/patterns/service-unavailable-pages/).

## Rate limited

{{ example({ title: "Rate limited example", group: "patterns", item: "error-pages", example: "rate-limited", html: true, nunjucks: false, size: "s" }) }}

Use a rate limited error if someone makes too many requests to a service.

This error will mainly be aimed at bots and tools that are used to scrape content from the site, often sending enough requests to slow down parts of our system.

Don’t give details on how many requests in a given timeframe will trigger the error or how long until they are able to make more requests.

The server should return a `429` [response code](#response-codes).

## Page archived

{{ example({ title: "Page archived example", group: "patterns", item: "error-pages", example: "page-archived", html: true, nunjucks: false, size: "s" }) }}

If the page has been archived, inform the user where the page has moved to and if possible, when the page was last captured.

For pages archived in the [UK Government Web Archive](https://www.nationalarchives.gov.uk/webarchive/), you can check for the information using the CDXJ API. See [CDXJ API documentation](https://github.com/webrecorder/pywb/wiki/CDX-Server-API) for more details.

As an example, the API can provide a list of the [captures for this design system](https://webarchive.nationalarchives.gov.uk/ukgwa/cdx?url=https://design-system.nationalarchives.gov.uk/&output=json&filter=status:200).

The server should return a `410` [response code](#response-codes).

## Response codes

This is a suggested list of error pages for each server response code.

| Code  | Response                                                                                                | Error page                          |
| ----- | ------------------------------------------------------------------------------------------------------- | ----------------------------------- |
| `400` | [Bad Request](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/400)                   | [Unknown request](#unknown-request) |
| `401` | [Unauthorized](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/401)                  | [Restricted](#restricted-access)    |
| `403` | [Forbidden](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/403)                     | [Restricted](#restricted-access)    |
| `404` | [Not Found](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/404)                     | [Page not found](#page-not-found)   |
| `405` | [Method Not Allowed](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/405)            | [Unknown request](#unknown-request) |
| `406` | [Not Acceptable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/406)                | [Unknown request](#unknown-request) |
| `407` | [Proxy Authentication Required](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/407) | [Restricted](#restricted-access)    |
| `410` | [Gone](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/410)                          | [Page archived](#page-archived)     |
| `414` | [URI Too Long](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/414)                  | [Unknown request](#unknown-request) |
| `429` | [Too Many Requests](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/429)             | [Rate limited](#rate-limited)       |
| `500` | [Internal Server Error](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/500)         | [Service error](#service-issue)     |
| `502` | [Bad Gateway](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/502)                   | [Service error](#service-issue)     |
| `503` | [Service Unavailable](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/503)           | [Service down](#service-down)       |
| `504` | [Gateway Timeout](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status/504)               | [Service error](#service-issue)     |

A complete list of responses that are available for error pages can be found on [MDN: HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Reference/Status). Use your own judgement when writing error pages for other response codes.
