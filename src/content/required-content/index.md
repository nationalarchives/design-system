---
layout: collection-page.njk
title: Required content
description: Ensure your service includes all legally required content.
group: content
---

{% from "nationalarchives/components/warning/macro.njk" import tnaWarning %}

## Accessibility statement

Your service must have an accessibility statement. This is covered under [regulation 8](https://www.legislation.gov.uk/uksi/2018/952/regulation/8/made) in the [Public Sector Bodies Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/contents/made) which applies to all public sector websites.

If your service sits under the main National Archives domain (**nationalarchives.gov.uk**) then it should use the [main accessibility statement](https://www.nationalarchives.gov.uk/help/web-accessibility/).

For services that don’t sit under the root domain (including subdomains), or use different domains entirely, the service must have its own accessibility statement. An example is [this design system’s accessibility statement](../../accessibility/).

GOV.UK has published an [example accessibility statement](https://www.gov.uk/government/publications/sample-accessibility-statement) to get you started.

## Cookies

<div class="tna-blockquote">
  <blockquote class="tna-blockquote__quote">
    <p>You must tell people if you set cookies, and clearly explain what the cookies do and why. You must also get the user’s consent. Consent must be actively and clearly given.</p>
    <p>There is an exception for cookies that are essential to provide an online service at someone’s request (eg to remember what’s in their online basket, or to ensure security in online banking).</p>
    <p>The same rules also apply if you use any other type of technology to store or gain access to information on someone’s device.</p>
  </blockquote>
  <p class="tna-blockquote__attribution">Information Commissioner’s Office,
    <cite class="tna-blockquote__citation">
      <a href="https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guide-to-pecr/cookies-and-similar-technologies/">Cookies and similar technologies</a>
    </cite>
  </p>
</div>

The National Archives uses four categories of cookies.

<dl class="tna-dl tna-dl--lined">
  <dt>
    <code>essential</code>
  </dt>
  <dd>These cookies are required in order to use the service. We don’t need to ask permission for them. An example would be session cookies, which are required to allow the user to log in to a service.</dd>
  <dt>
    <code>settings</code>
  </dt>
  <dd>Configured options for the site which are specific to the user. For example, default results view or light/dark mode preference.</dd>
  <dt>
    <code>usage</code>
  </dt>
  <dd>Used for analytics, tracking, and data gathering. This could include things like Google Analytics.</dd>
  <dt>
    <code>marketing</code>
  </dt>
  <dd>Used mainly by third parties such as Google when we embed YouTube videos in the site. These cookies are mostly used to profile users. The National Archives should not create marketing cookies directly.</dd>
</dl>

{{ tnaWarning({
  headingLevel: 3,
  body: "Ensure each of the cookies on your service adhere to one of these four categories and only create them once the user has accepted that category. For example, don’t add Google Analytics unless <code>usage</code> cookies have been accepted."
}) }}

If you use the [cookie banner component](../../components/cookie-banner/), you can write cookie preferences to any domain.

The main site sets cookies with the domain `.nationalarchives.gov.uk` in a cookie called `cookies_policy`. This means the user’s cookie preferences are available for all subdomains of **nationalarchives.gov.uk**.

If your service honors all of these preferences and uses the global domain (`.nationalarchives.gov.uk`) then you can link to the [National Archives cookie preferences page](https://www.nationalarchives.gov.uk/cookies/) to allow users to set their preferences in one place.

### TNA Frontend cookie library

TNA Frontend comes with a [cookie library](../../get-started/tna-frontend/#cookie-library) that allows you to validate the user’s cookie preferences and perform actions once policies have been accepted or rejected.

### Service-specific cookies

Publish a page that explains the cookies that your service uses, what their purposes is and how long they live. You can see an example of this on page describing [cookies used on The National Archives website](https://www.nationalarchives.gov.uk/cookies/details/).
