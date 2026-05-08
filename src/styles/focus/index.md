---
layout: collection-page.njk
title: Focus
description: Show users which page element has keyboard focus.
group: styles
subGroup: visual
---

{% from "partials/example.njk" import example %}

In accordance with the Web Content Accessibility Guidelines (WCAG) version 2.2 level AA, [Success Criteria 2.4.7: Focus visible (level AA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-visible), we need to show users which page element has keyboard focus.

The National Archives use [WCAG technique C40](https://www.w3.org/WAI/WCAG22/Techniques/css/C40); creating a two-color focus indicator to ensure sufficient contrast with all components.

This focus indicator uses yellow and black borders which also meets [Success Criteria 2.4.13: Focus appearance (level AAA)](https://www.w3.org/WAI/WCAG22/Understanding/focus-appearance).

{{ example({ group: "styles", item: "focus", example: "buttons", size: "xl" }) }}

## Larger hit areas

We can increase the hit area and focus indicator to parent elements to make elements easier to click on. This technique is used for the [fully clickable cards](../../components/card/#fully-clickable).

{{ example({ group: "styles", item: "focus", example: "larger-focus", html: true, size: "s" }) }}

To expand the hit area, use the `faux-full-outline` function from the accessibility tools. Consider adding a hover state to the parent element to reinforce the interactable area.

```scss:larger-hit-area.scss
@use "@nationalarchives/frontend/nationalarchives/tools/a11y";
@use "@nationalarchives/frontend/nationalarchives/tools/colour";

.click-parent {
  &:hover {
    box-shadow: 0 0 0 3px colour.colour-var("link");
  }

  @include a11y.faux-full-outline("a");
}
```