---
layout: collection-page.njk
title: Cookies
description: Ensure users know what cookies are being set and allow them to choose which cookies they would like to use.
group: content
subGroup: legal requirements
---

{% from "nationalarchives/components/warning/macro.njk" import tnaWarning %}

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

## User preferences

The National Archives uses four categories of cookies.

<dl class="tna-dl tna-dl--lined">
  <dt>
    <code>essential</code>
  </dt>
  <dd>These cookies are required in order to use the service. We don’t need to ask permission for them. An example would be a session cookie which is required to allow the user to log in to a service.</dd>
  <dt>
    <code>settings</code>
  </dt>
  <dd>Configured options for the site which are specific to the user. For example, default results view (grid/list) or light/dark mode preference.</dd>
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
  headingLevel: 2,
  body: "Ensure each of the cookies on your service adhere to one of these four categories and only create them once the user has accepted that category. For example, don’t add Google Analytics until <code>usage</code> cookies have been accepted."
}) }}

The main site sets cookies with the domain `.nationalarchives.gov.uk` in a cookie called `cookie_preferences`. This means the user’s cookie preferences are available for all subdomains of **nationalarchives.gov.uk**.

The preferences are stored as an escaped JSON string.

```plain:cookie_preferences
%7B%22usage%22%3Afalse%2C%22settings%22%3Afalse%2C%22marketing%22%3Afalse%2C%22essential%22%3Atrue%7D
```

When escaped and parsed, this produces a JSON object of preferences.

```json
{
  "essential": true,
  "marketing": false,
  "settings: false,
  "usage": false
}
```

If your service honors all of these preferences and sits under the **nationalarchives.gov.uk** domain then you can link to the [National Archives cookie preferences page](https://www.nationalarchives.gov.uk/cookies/) to allow users to set their global preferences in one place.

## Explain cookies on your service

Publish a page that explains the cookies that your service uses, what their purpose is and how long they live.

You can see an example of this on page describing [cookies used on The National Archives website](https://www.nationalarchives.gov.uk/cookies/details/).

## TNA Frontend cookie library

Use the [cookie library](../../get-started/tna-frontend-cookies/) to allows you to validate the user’s cookie preferences and perform actions once preferences have been accepted or rejected.
