---
layout: simple.njk
title: Cookies
---

{% from "nationalarchives/components/button/macro.njk" import tnaButton %}
{% from "nationalarchives/components/message/macro.njk" import tnaMessage %}

# Cookies

Cookies are files saved on your phone, tablet or computer when you visit a website.

This site has three categories of cookies:

- [essential](#strictly-necessary-cookies)
- [settings](#cookies-that-remember-your-settings)
- [usage](#cookies-that-measure-website-use)

{{ tnaMessage({
  message: "JavaScript is not available on your browser. This could be a network issue. Without JavaScript available your cookie preferences cannot be saved.",
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
| `dark-theme`              | Saves your preference to a light or dark themed site | 1 year  |

<p aria-live="assertive">Cookies that remember your settings have been <strong data-showcookiepreference="settings">not set</strong>.</p>

<div class="tna-button-group">
{{ tnaButton({
  text: "Allow setting cookies",
  buttonElement: true,
  attributes: {
    "data-setcookiepreference": "settings",
    "data-setcookiepreferencevalue": "true"
  }
}) }} {{ tnaButton({
  text: "Decline setting cookies",
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
