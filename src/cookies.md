---
layout: simple-with-nav.njk
title: Cookies
---

{% from "nationalarchives/components/button/macro.njk" import tnaButton %}
{% from "nationalarchives/components/warning/macro.njk" import tnaWarning %}

Cookies are files saved on your phone, tablet or computer when you visit a website.

This site has three categories of cookies:

- [essential](#strictly-necessary-cookies)
- [settings](#cookies-that-remember-your-settings)
- [usage](#cookies-that-measure-website-use)

{{ tnaWarning({
  body: "JavaScript is not available on your browser. This could be a network issue. Without JavaScript available your cookie preferences cannot be changed.",
  classes: "tna-ds--hide-on-js"
}) }}

## Strictly necessary cookies

These essential cookies do things like remember your progress or allow you to log in to admin areas. They always need to be on.

Strictly necessary cookies used on this site are:

| Name                      | Purpose                                                     | Expires |
| ------------------------- | ----------------------------------------------------------- | ------- |
| `cookies_preferences_set` | Lets us know that you’ve saved your cookie consent settings | 1 year  |
| `cookies_policy`          | Saves your cookie consent settings                          | 1 year  |

## Cookies that remember your settings

These cookies do things like remember your preferences and the choices you make, to personalise your experience of using the site.

Settings cookies used on this site are:

| Name                      | Purpose                                              | Expires |
| ------------------------- | ---------------------------------------------------- | ------- |
| `dark_theme`              | Saves your preference to a light or dark themed site | 1 year  |

<p aria-live="assertive" class="tna-ds--show-on-js" data-showcookiepreference="settings" data-showcookiepreferenceonaccepted="Cookies that remember your settings have been accepted." data-showcookiepreferenceonrejected="Cookies that remember your settings have been rejected."></p>

<div class="tna-button-group tna-ds--show-on-js">
  {{ tnaButton({
    text: "Allow settings cookies",
    buttonElement: true,
    attributes: {
      "data-setcookiepreference": "settings",
      "data-setcookiepreferencevalue": "true"
    }
  }) }} {{ tnaButton({
    text: "Decline settings cookies",
    buttonElement: true,
    attributes: {
      "data-setcookiepreference": "settings",
      "data-setcookiepreferencevalue": "false"
    }
  }) }}
</div>

## Cookies that measure website use

These cookies may be set by third party websites and do things like measure how you view YouTube videos that are on the National Archives Design System.

This site currently collects no usage data.

<p aria-live="assertive" class="tna-ds--show-on-js" data-showcookiepreference="usage" data-showcookiepreferenceonaccepted="Cookies that measure website use have been accepted." data-showcookiepreferenceonrejected="Cookies that measure website use have been rejected."></p>

<div class="tna-button-group tna-ds--show-on-js">
  {{ tnaButton({
    text: "Allow usage cookies",
    buttonElement: true,
    attributes: {
      "data-setcookiepreference": "usage",
      "data-setcookiepreferencevalue": "true"
    }
  }) }} {{ tnaButton({
    text: "Decline usage cookies",
    buttonElement: true,
    attributes: {
      "data-setcookiepreference": "usage",
      "data-setcookiepreferencevalue": "false"
    }
  }) }}
</div>
