---
layout: collection-page.njk
title: TNA Frontend Cookies
description: A small, flexible cookies library designed to work with National Archives cookie preferences.
group: get-started
subGroup: tools
order: 3
---

TNA Frontend Cookies is an open source library for managing cookies and following the [cookie policies](../../content/required-content/#cookies) used by The National Archives.

See the [TNA Frontend Cookies source code on GitHub](https://github.com/nationalarchives/tna-frontend-cookies).

## Installation

Install the frontend package from [npm](https://www.npmjs.com/package/@nationalarchives/cookies):

```bash
npm install @nationalarchives/cookies
```

## Configuration

The default cookie library settings can be set either by adding attributes added to the `<html>` element or within the JavaScript.

| HTML attribute                  | JavaScript property | Purpose                                                                                                                   | Default if not set         |
| ------------------------------- | ------------------- | ------------------------------------------------------------------------------------------------------------------------- | -------------------------- |
| `data-tna-cookies-domain`       | `defaultDomain`     | The domain to write the cookies to                                                                                        | `window.location.hostname` |
| `data-tna-cookies-path`         | `defaultPath`       | The path to write the cookies to                                                                                          | `/`                        |
| `data-tna-cookies-insecure`     | `secure`            | If the HTML attribute is set to `true` or the JavaScript value is `false`, allow insecure cookies (able to use over HTTP) | (secure)                   |
| `data-tna-cookies-preferences-key` | `preferencesKey`       | The name of the cookie to save the user preferences to                                                                    | `cookie_preferences`           |
| `data-tna-cookies-default-age`  | `defaultAge`        | The default age of a cookie in seconds                                                                                    | `31536000` (365 days)      |
| {caption: Cookie library options} |

```html
<html
  data-tna-cookies-domain=".nationalarchives.gov.uk"
  data-tna-cookies-path="/path/"
  data-tna-cookies-insecure="false"
  data-tna-cookies-preferences-key="custom_cookie_preferences"
  data-tna-cookies-default-age="3600"
>
```

```js:my-service.js
import { Cookies } from "@nationalarchives/cookies";

// This instance uses the values from the <html> element
const cookies_default = new Cookies();

// This instance ignores the values set in the `<html>` element
const cookies_custom = new Cookies({
  defaultDomain: ".nationalarchives.gov.uk",
  defaultPath: "/path/",
  secure: false,
  preferencesKey: "custom_cookie_preferences",
  defaultAge: 3600
});
```

## User preferences

The cookie preferences follow the four categories of cookies defined by The National Archives and the user's preference for each.

```js
import { Cookies } from "@nationalarchives/cookies";

const cookies = new Cookies();

// Get all policies
console.log("Cookie policies:", cookies.policies);

// Check if a preference has been enabled
console.log(`Marketing cookies have${
    cookies.preference("marketing") ? " " : " not "
  }been accepted.`);

// Enable a preference
document.getElementById("accept-usage-cookies-button")
  .addEventListener("click", () => {
    cookies.enablePreference("usage");
  });

// Accept all policies
document.getElementById("accept-all-cookies-button")
  .addEventListener("click", () => {
    cookies.enableAllPreferences();
  });
```

## Getting and setting cookies

The cookie library can also help you write other cookies to the browser.

```js
import { Cookies } from "@nationalarchives/cookies";

const cookies = new Cookies();

// Get all cookies
const all = cookies.all;

// Check for the existence of a cookie
const exists = cookies.exists("my-cookie");

// Get the value of a cookie
const value = cookies.get("my-cookie");

// Check if a cookie has a certain value
const hasExpectedValue = cookies.hasValue("my-cookie", "foobar");

// Create or update a cookie
cookies.set("my-new-cookie", "wizzbang");

// Create or update a session cookie
cookies.set("my-session-cookie", "wizzbang", {
  session: true
});

// Delete a cookie
cookies.delete("my-new-cookie");
```

## Events

The cookie library has support for events. You can perform actions when certain events occur.

Use the `on` function to add a callback for every event of that type. Use `once` to add a one-time event.

The events available are:

- `setCookie`
- `deleteCookie`
- `deleteAllCookies`
- `enablePreference`
- `disablePreference`
- `changePreference`
- `enableAllPreferences`
- `disableAllPreferences`

```js
import { Cookies } from "@nationalarchives/cookies";

const cookies = new Cookies();

// Listen for events
cookies.on("setCookie", (data) => {
  console.log("A cookie was set", data);
});

// Set a one-time event listener
cookies.once("deleteCookie", (data) => {
  console.log("A cookie was deleted", data);
});

// Wait for a preference to change
cookies.on("changePreference", (data) => {
  if (Object.prototype.hasOwnProperty.call(data, "settings")) {
    if(data.settings !== true) {
      console.log("Settings cookies accepted.");
    } else {
      console.log("Settings cookies rejected.");
    }
  } else {
    console.log("A preference other than settings has changed.");
  }
});
```
