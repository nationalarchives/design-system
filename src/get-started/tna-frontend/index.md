---
layout: collection-page.njk
title: TNA Frontend
description: The code you need to start building user interfaces for National Archives platforms and services.
group: get-started
subGroup: tools
order: 1
---

{% from "nationalarchives/components/accordion/macro.njk" import tnaAccordion %}

TNA Frontend is an open source and standardised set of styles, components and layouts made for National Archives services. It is the source of truth for all global HTML, CSS and JavaScript across the National Archives.

See the [TNA Frontend source code on GitHub](https://github.com/nationalarchives/tna-frontend).

## Instalation

Install the frontend package from [npm](https://www.npmjs.com/package/@nationalarchives/frontend):

```bash
npm install @nationalarchives/frontend
```

{% set precompiled_install %}
Each release (as of `v0.1.21-prerelease`) should contain a ZIP of the package with all the necessary files.

Find the release you want on the [tna-frontend releases page](https://github.com/nationalarchives/tna-frontend/releases) and download the package from the "Assets" dropdown.
{% endset %}

{% set cdn_install %}
The `@nationalarchives/frontend` package is available on [jsdelivr.com](https://www.jsdelivr.com/package/npm/@nationalarchives/frontend).

While you can use the CSS and JavaScript from there, the font files which includes the icon font will have to be hosted from your web application.

As a result, **if you require icons, using a CDN like jsdelivr.com is not the preferred method** for using the tna-frontend library.

Include the CSS in the <head> element of your page.

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@nationalarchives/frontend@0.40.0/nationalarchives/all.css"
  integrity="sha256-P7YckP528dIMGQIYL0xcaQnOs7CVYt9neLAdJxuSI18="
  crossorigin="anonymous">
```

Add the JavaScript to the end of your page just before your closing </body> tag.

```html
<script
  src="https://cdn.jsdelivr.net/npm/@nationalarchives/frontend@0.40.0/nationalarchives/all.js"
  integrity="sha256-N9ELrwj1Oq7TFcnCHevyG8GTG58FtfwP1EtqZdiB3Ys="
  crossorigin="anonymous"></script>
```

For more guidance, read [how to use CDNs in the National Archives Engineering Handbook](https://nationalarchives.github.io/engineering-handbook/third-party/cdn/).
{% endset %}

{{ tnaAccordion({
  itemHeadingLevel: 3,
  items: [
    {
      title: "Alternative setup using precompiled files",
      body: precompiled_install
    },
    {
      title: "Using TNA Frontend from a CDN",
      body: cdn_install
    }
  ],
  id: "install-tna-frontend"
}) }}

## HTML

TNA Frontend uses [Nunjucks](https://mozilla.github.io/nunjucks/) for its component templates. If your production service has Nunjucks available then you can use these macros.

With Python services, it is recommended to use the [Jinja2](https://jinja.palletsprojects.com/en/stable/) templating engine with [TNA Frontend Jinja](../tna-frontend-jinja/).

## CSS

Include `nationalarchives/all.scss` in your root SCSS file. This will allow you to customise or extend TNA Frontend.

```scss:my-service.scss
@use "@nationalarchives/frontend/nationalarchives/all";
```

### Fonts

In order to use the correct fonts, you need to include some extra CSS files from Adobe TypeKit and Google Fonts.

```html
<link rel="preconnect" href="https://use.typekit.net" crossorigin>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://use.typekit.net/kaq6qqh.css" media="screen,print">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400..700&family=Roboto+Mono:wght@400..500&display=swap" media="screen,print">
```

### Customising CSS variables

Any of the variables in the [`variables` directory](https://github.com/nationalarchives/tna-frontend/tree/main/src/nationalarchives/variables) can be overwritten on a per-project basis.

```scss:my-service.scss
// Set any variables from the variables directory
@use "@nationalarchives/frontend/nationalarchives/variables/assets" with (
  $tna-font-path: "/my_fonts_path"
);
@use "@nationalarchives/frontend/nationalarchives/variables/features" with (
  $debug-interactable-areas: true,
  $image-loader-animations: false
);
@use "@nationalarchives/frontend/nationalarchives/variables/grid" with (
  $largest-container-width: 1600px
);

// Include all the styles using the variables set above
@use "@nationalarchives/frontend/nationalarchives/all";
```

### Only using some components

To reduce your CSS file size, you can choose which components are included.

```scss:my-service.scss
// Include global utilities (such as typography and the grid system)
@use "@nationalarchives/frontend/nationalarchives/utilities";

// Include only the components you need...
@use "@nationalarchives/frontend/nationalarchives/components/accordion";
@use "@nationalarchives/frontend/nationalarchives/components/button";

// ...or include all the "presentation" components (non-form components)
@use "@nationalarchives/frontend/nationalarchives/components/presentation";

// ...or just the form components (e.g. text input, checkboxes)
@use "@nationalarchives/frontend/nationalarchives/components/forms";
```

### Print styles

Import the print SCSS to use and extend the default print styles.

```scss:my-service.print.scss
@use "@nationalarchives/frontend/nationalarchives/print";

.tna-\!--full-width-on-print {
  width: 100% !important;
}
```

The basic styles will remove global page elements like the header and footer when printing. It will also display the URL of any links in the page alongside the link text.

There is also a `tna-\!--hide-on-print` class that you can use to hide certain elements when printing.

### Static CSS (from precompiled files or a CDN)

Link the `all.css` file in your project through the HTML. This includes all the styles for things like [components](../../components/), [typography](../../styles/typography/) and the [grid system](../../styles/grid/).

Include `print.css` to include some basic print styles.

```html
<!-- Include all of TNA Frontend -->
<link rel="stylesheet" href="all.css" media="screen,print">
<!-- Include the basic print styles -->
<link rel="stylesheet" href="print.css" media="print">
```

### Icons

Optionally, you can include the `font-awesome.css` (or `font-awesome.scss`) file which enables you to use the free [Font Awesome icons](https://fontawesome.com/search?o=r&m=free) in your service.

When using the static CSS, your Font Awesome font files will need to be hosted in a `./assets/fonts` directory, relative to your `font-awesome.css` file.

If using SCSS, you can change the path to the font files and omit brand (or solid) icons if required.

```scss:my-font-awesome.scss
@use "variables/assets";
@use "@fortawesome/fontawesome-free/scss/variables" with (
  $font-path: "my_fonts_path"
);

// Main Font Awesome styles
@use "@fortawesome/fontawesome-free/scss/fontawesome";

// Font Awesome solid icons
@use "@fortawesome/fontawesome-free/scss/solid";

// Optionally include the brand icons
@use "@fortawesome/fontawesome-free/scss/brands";
```

## JavaScript

Import and call the `initAll` function from `all.mjs` to initialise all the interactive components.

```js:my-service.js
import { initAll } from "@nationalarchives/frontend/nationalarchives/all.mjs";

initAll();
```

### Cookies library

TNA Frontend comes with a small cookie library. You can use it to check acceptance of the standard National Archives cookie preferences and set your own cookies.

Read about the [required cookie policies for National Archives websites](../../content/required-content/#cookies). The cookie library can help you manage the user’s preferences for our policies.

```js
import { Cookies } from "@nationalarchives/frontend/nationalarchives/lib/cookies.mjs";

const cookies = new Cookies();

// Get all policies
console.log("Cookie policies:", cookies.policies);

// Check if a policy has been accepted
console.log(`Marketing cookies have${
    cookies.isPolicyAccepted("marketing") ? " " : " not "
  }been accepted.`);

// Wait for a policy to change
cookies.on("changePolicy", (data) => {
  if (Object.prototype.hasOwnProperty.call(data, "settings")) {
    if(data.settings !== true) {
      console.log("Settings cookies accepted.");
    } else {
      console.log("Settings cookies rejected.");
    }
  } else {
    console.log("A policy other than settings has changed.");
  }
});

document.getElementById("accept-usage-cookies-button")
  .addEventListener("click", function() {
    cookies.acceptPolicy("usage");
  });

document.getElementById("accept-all-cookies-button")
  .addEventListener("click", function() {
    cookies.acceptAllPolicies();
  });
```

#### Getting and setting cookies

The cookie library can also help you write other cookies to the browser.

```js
import { Cookies } from "@nationalarchives/frontend/nationalarchives/lib/cookies.mjs";

const cookies = new Cookies();

// Check for the existance of a cookie
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

// Listen for events
cookies.on("setCookie", function(data) {
  console.log("Cookie was set", data);
});

// Set a one-time event listener
cookies.once("deleteCookie", function(data) {
  console.log("A cookie was deleted", data);
});
```

#### Changing default cookie settings

The default cookie library settings can be set using attributes added to the `<html>` element.

```html
<html
  data-tna-cookies-domain=".nationalarchives.gov.uk"
  data-tna-cookies-path="/"
  data-tna-cookies-insecure="false"
  data-tna-cookies-policies-key="cookies_policy"
  data-tna-cookies-default-age="31536000"
>
```

| Attribute                       | Purpose                                                 | Default if not set         |
| ------------------------------- | ------------------------------------------------------- | -------------------------- |
| `data-tna-cookies-domain`       | The domain to write the cookies to                      | `window.location.hostname` |
| `data-tna-cookies-path`         | The path to write the cookies to                        | `/`                        |
| `data-tna-cookies-insecure`     | If `true`, set insecure cookies (able to use over HTTP) | `false`                    |
| `data-tna-cookies-policies-key` | The name of the cookie to save the user preferences to  | `cookies_policy`           |
| `data-tna-cookies-default-age`  | The default age of a cookie in seconds                  | `31536000` (365 days)      |
| {caption: Cookie HTML attributes} |

You can also pass these into the object instantiation. These will overwrite the values set in the `<html>` element.

```js:my-service.js
import { Cookies } from "@nationalarchives/frontend/nationalarchives/lib/cookies.mjs";

const cookies = new Cookies({
  defaultDomain: ".nationalarchives.gov.uk",
  defaultPath: "/",
  secure: true,
  policiesKey: "cookies_policy",
  defaultAge: 31536000,
  newInstance: true  // Create a new instance with these settings (else the singleton is returned)
});
```

### Static JavaScript (from precompiled files or a CDN)

Including the `all.js` file in your HTML will add a `TNAFrontend` object to the `window`.

Make sure to add your JavaScript at the end of the page, after the main body of the HTML.

```js
// Initialise all the components
window.TNAFrontend.initAll();

// ...or initialise them yourself
new window.TNAFrontend.Accordion(document.getElementById("my-accordion"));

// You can also use the cookie library
var cookies = new window.TNAFrontend.Cookies();
console.log("Cookie policies:", cookies.policies);
```

## Assets

TNA Frontend includes some basic assets like logos and icons.

For logo documentation, read our [brand](../../brand/) page.

### Favicon

TNA Frontend includes a favicon. To use it, copy the [assets/images/favicon.ico](https://github.com/nationalarchives/tna-frontend/blob/main/src/nationalarchives/assets/images/favicon.ico) file into your static assets and include it in the `<head>` of the HTML.

```html
<link
  rel="shortcut icon"
  sizes="16x16 32x32 48x48"
  href="/favicon.ico"
  type="image/x-icon">
```

## Structure

The layers of the TNA Frontend SCSS library is built as:

1. [Variables](#variables)
1. [Tools](#tools)
1. [Libraries](#libraries)/[Utilities](#utilities)
1. [Components](#components)
1. [Overrides](#overrides)

### Variables

TNA Frontend variables are defined in `src/nationalarchives/variables`.

Lots of variables can be modified but some are fixed, such as our brand colours.

An example fixed variable is `$relative-1rem-px` where we set the value of `1rem` to `16px` which makes it easier to define widths as a function of `1rem` as we mostly work on a 4px grid:

| Pixels | REM         |
| ------ | ----------- |
| `1px`  | `0.0625rem` |
| `2px`  | `0.125rem`  |
| `4px`  | `0.25rem`   |
| `8px`  | `0.5rem`    |
| `16px` | `1rem`      |
| `32px` | `2rem`      |
| `64px` | `4rem`      |

An example of a variable that can be modified is `$body-font-size-px` which we set to `19px` by default. This font size might not be right for all services so we have allowed it to be modified.

### Tools

The tools provided are reusable `@mixin` and `@function` blocks to make writing styles easier. They are defined in `src/nationalarchives/tools`.

Tools rely directly on variables and can be used throughout the frontend library.

As an exmaple, `colour-font()` will apply a font colour in a way that should work for all browsers and takes into consideration the light/dark theme used.

### Libraries

The libraries in `src/nationalarchives/lib` are a mix of third party libraries as well as some National Archives ones.

They can join up tools to make larger, more useful elements.

### Utilities

The utilities in `src/nationalarchives/utilities` are some global styles that aren’t associated with a specific component.

This layer is where we define some general purpose elements such as:

- The `tna-template` and `tna-template__body` elements
- Headings and heading groups
- Lists (`<ul>`, `<ol>` and `<dl>`)
- Chips
- Columns
- Forms and form elements
- Tables

These elements all adhere to the [BEM methodology](https://getbem.com/).

There are also some classless elements that are styled at this level:

- `<p>` elements
- Inline `<strong>` and `<small>` elements
- `<a>` elements
- Media elements (`<img>`, `<svg>`, `<picture>`, `<video>` and `<canvas>`)
- `<hr>` elements

Utilities should not implement any `!important` rules.

### Components

The most prominent layer of styling, the components in `src/nationalarchives/components` should use the tools already defined.

Components shouldn’t use variables directly. They shouldn’t use static values for colour unless the colour of that component will never change, for example the message component which is always yellow.

Some components may use utilities such as headings. Where these styles have already been defined, they should not be redefined. The heading in a cookie banner should use the existing `tna-heading` and `tna-heading--m` styles that already exist rather than implimenting its own.

Components should not implement any `!important` rules. There are exceptions such as the skip link that needs to be visually hidden in a way that it is still available for someone navigating a site with a keyboard.

Components should not care about the context or layout within which they are used. As an example, a breadcrumb _could_ be placed within a card or a footer element although in reality we wouldn’t allow this.

### Overrides

Overrides start with `tna-!--` and can only be used in HTML classes. They have `!important` rules.

Examples of overrides are:

- spacing (margin, padding etc.)
- no focus style (`.tna-!--no-focus-style`) for items such as the target element of a skip link
- visibly hidden content (used to add extra descriptions which appear for screenreaders only)
