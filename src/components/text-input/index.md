---
layout: collection-page.njk
title: Text input
description: The text input component allows users to enter short string of text such as their email address, a record title or a postcode.
group: components
cardImage: /text-input.svg
phase: official
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 1
statusDocumentationComplete: false
---

{% from "partials/example.njk" import example %}

{{ example({ title: "Text input example", group: "components", item: "text-input", example: "default", html: true, nunjucks: true, size: "xxs" }, 2) }}

## Component status

{% include "partials/component-status.njk" %}

## Prefilled

{{ example({ title: "Text input prefilled example", group: "components", item: "text-input", example: "prefilled", html: true, nunjucks: true, size: "xxs" }) }}

## Hint

{{ example({ title: "Text input with hint example", group: "components", item: "text-input", example: "hint", html: true, nunjucks: true, size: "xs" }) }}

## Error

{{ example({ title: "Text input error example", group: "components", item: "text-input", example: "error", html: true, nunjucks: true, size: "xs" }) }}

## Password

The password text input is enhanced with JavaScript to allow the hiding and showing of the password.

By default, the password input will try and autofill from existing passwords. Use `newPassword: true` to use a password box that allows password managers to generate a new password.

{{ example({ title: "Text input password example", group: "components", item: "text-input", example: "password", html: true, nunjucks: true, size: "xs" }) }}
