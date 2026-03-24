---
layout: collection-page.njk
title: Required content
description: Ensure the correct legal content is available in your service.
group: content
---

## Accessibility statement

Your service must have an accessibility statement.

If your service sits under the main National Archives domain (**nationalarchives.gov.uk**) then it should use the [main accessibility statement](https://www.nationalarchives.gov.uk/help/web-accessibility/).

For services that don't sit under the root domain (including subdomains), or use different domains entirely, the service must have its own accessibility statement.

GOV.UK has published an [example accessibility statement](https://www.gov.uk/government/publications/sample-accessibility-statement) to get you started.

## Cookies

If you use the [cookie banner component](../../components/cookie-banner/), you can write cookie preferences to any domain.

The main site sets cookies with the domain `.nationalarchives.gov.uk` in a cookie called `cookies_policy`. This means the user's cookie preferences are available for all subdomains of **nationalarchives.gov.uk**.

The four categories of cookies are:

<dl class="tna-dl tna-dl--lined">
    <dt>essential</dt>
    <dd>These cookies are required in order to use the service. We don't need to ask permission for them. An example would be session cookies, which are required to allow the user to log in to a service.</dd>
    <dt>settings</dt>
    <dd>Configured options for the site which are specific to the user. For example,default results view or light/dark mode preference.</dd>
    <dt>usage</dt>
    <dd>Used for analytics, tracking, and data gathering. This could include things like Google Analytics.</dd>
    <dt>marketing</dt>
    <dd>Used mainly by third parties such as Google when we embed YouTube videos in the site. These cookies are mostly used to profile users. The National Archives should not create marketing cookies directly.</dd>
</dl>

> Ensure each of the cookies on your service adhere to one of these four categories and only create them once the user has accepted that category. For example, don't add Google Analytics unless `usage` cookies have been accepted.

If your service honors these preferences then you can link to the [National Archives cookie preferences page](https://www.nationalarchives.gov.uk/cookies/) to allow users to set their preferences in one place.

### Service-specific cookies

Publish a page that explains the cookies that your service uses, what their purposes is and how long they live. You can see an example of [cookies used on the main site](https://www.nationalarchives.gov.uk/cookies/details/).
