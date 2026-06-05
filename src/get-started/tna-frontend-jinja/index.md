---
layout: collection-page.njk
title: TNA Frontend Jinja
description: Jinja2 macros for all the components and layouts in TNA Frontend.
group: get-started
subGroup: tools
order: 2
---

{% from "partials/example.njk" import example %}

See the [TNA Frontend Jinja source code on GitHub](https://github.com/nationalarchives/tna-frontend-jinja).

For service built with Python and using Jinja2 templating, you can use the macros in TNA Frontend Jinja to provide the same configuration options and HTML output as the [Nunjucks macros](../prototyping/#using-the-components-in-your-prototype) from [TNA Frontend](../tna-frontend/).

The only difference between the Nunjucks examples and their Jinja equivalents is having to quote key names, e.g. `"text"` instead of just `text`.

{{ example({ group: "components", item: "button", example: "default", html: false, nunjucks: true, showNunjucksOptions: false, size: "xxs", noOpenInNewTab: true }) }}

## Framework support

Jinja2 is supported by both [Flask](https://flask.palletsprojects.com/en/stable/) and [Django](https://www.djangoproject.com/), two of the [approved Python frameworks](https://nationalarchives.github.io/engineering-handbook/technology/backend/python/#frameworks) used by The National Archives.

## WTForms support

TNA Frontend Jinja also contains the macros needed to work with [WTForms](https://wtforms.readthedocs.io/en/3.2.x/) which is a "flexible forms validation and rendering library for Python web development".

See the [TNA Frontend Jinja WTForms integration documentation](https://nationalarchives.github.io/tna-frontend-jinja/wtforms/) for more information.
