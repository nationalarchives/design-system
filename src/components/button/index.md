---
layout: collection-page.njk
title: Button
description: Use the button component for call to action links or to submit data within forms.
group: components
cardImage: /button.svg
phase: production
statusTestedWithoutJavaScript: 0
statusTestedWithoutCSS: 1
statusPassedDacAudit: 1
statusAnalytics: 0
statusDocumentationComplete: true
---

{% from "partials/example.njk" import example %}

The button component can be used as a call to action link on the page instead of a plain text link or as a `<button>` element for use within forms.

{{ example({ group: "components", item: "button", example: "default", html: true, nunjucks: true, size: "xxxs" }, 2) }}

{% include "partials/component-status.njk" %}

## Variations

### Accent

An accented button will inherit the [accent colour](../../styles/colours/#accent-colours) from the page

Avoid overwhelming the user by using accented buttons sparingly.

{{ example({ group: "components", item: "button", example: "accent", html: true, nunjucks: true, size: "xxxs" }, 2) }}

### Plain

Use plain buttons to provide the same size and spacing as other buttons but with a more subtle visual style.

{{ example({ group: "components", item: "button", example: "plain", html: true, nunjucks: true, size: "xxxs" }, 2) }}

### Small

Smaller buttons can be used when space is limited, such as in admin interfaces.

{{ example({ group: "components", item: "button", example: "small", html: true, nunjucks: true, size: "xxxs" }, 2) }}

### Icons

Buttons can contain icons. Read more about [using icons in TNA services](../../styles/icons/#call-to-action-icons).

Icons can be used on either the left or right of the button. The default alignment is to the left.

The set of icons available by default is [Font Awesome's free classic icons](https://fontawesome.com/search?o=r&ic=free&ip=classic). You can set the `icon` parameter by using the Font Awesome icon name, for example "chevron-left" or "heart".

{{ example({ group: "components", item: "button", example: "icon", html: true, nunjucks: true, size: "xxxs" }, 2) }}

#### Icon-only buttons

Use icon-only buttons in services with expert users who understand the interface well enough.

Icon-only buttons still need descriptive text and might benefit from a title to provide extra information when hovered.

You can choose to either only show an icon-only button or to show the button text on larger devices and then only the icon on smaller devices. This can be controlled with either `iconOnly` or `iconOnlyOnMobile`.

Avoid using plain icon-only buttons as they might not have a distinct enough hover or focus state.

{{ example({ group: "components", item: "button", example: "icon-only", html: true, nunjucks: true, size: "xxxs" }, 2) }}

#### SVG icons

To avoid relying on the Font Awesome CSS and font files, you can embed SVGs directly into the button using `iconSvg`.

Remember to escape quotes (`"` or `'`) in the SVG correctly.

Add `aria-hidden="true"` and `focusable="false"` to avoid the icon being read by screen readers. Include a `wdith` parameter if possible to avoid the icon being too large when viewed without CSS.

{{ example({ group: "components", item: "button", example: "icon-svg", html: true, nunjucks: true, size: "xxxs" }, 2) }}

### Disabled buttons

Because disabled buttons can confuse some users, they have been intentionally omitted from this design system. Avoid them if possible.

Only use disabled buttons if research with users shows their use makes the user interface easier to understand.

## Button elements

Set `buttonElement` to `true` to change the button to an HTML `<button>` element.

The default [HTML button type](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/button#type) is `button`. This can be changed to either `submit` or `reset` with the `buttonType` attribute.

{{ example({ group: "components", item: "button", example: "button-element", html: true, nunjucks: true, size: "xxxs" }, 2) }}

## Button groups

Use a button group (`tna-button-group`) to display buttons alongside one another. The buttons will stack on smaller screens.

Add `tna-button-group--small` to make all buttons in the group smaller for dense interfaces.

{{ example({ group: "components", item: "button", example: "group", html: true, nunjucks: true, size: "xs" }) }}
