---
layout: collection-page.njk
title: Pagination
group: components
---

{% from "_example.njk" import example %}

Use a list-type layout if users need to navigate through pages of similar items. For example, a list of search results or a list of cases in a case working system.

{{ example({ group: "components", item: "pagination", example: "default", html: true, nunjucks: true, open: false, size: "xxs" }) }}

Show the page number in the page `<title>` so that screen reader users know they’ve navigated to a different page. For example, ‘Search results (page 1 of 4)’.

## Number of page links

Show an appropriate number of pages to fit the horizontal space available.

For smaller screens, show page numbers for:

- the current page
- previous and next pages
- first and last pages

For larger screens, show page numbers for:

- the current page
- at least one page immediately before and after the current page
- first and last pages

Use ellipses (&hellip;) to replace any skipped pages. For example:

- **[1]** 2 &hellip; 42
- 1 **[2]** 3 &hellip; 42
- 1 2 **[3]** 4 &hellip; 42
- 1 2 3 **[4]** 5 &hellip; 42
- 1 &hellip; 4 **[5]** 6 &hellip; 42

- 1 &hellip; 37 **[38]** 39 &hellip; 42
- 1 &hellip; 38 **[39]** 40 41 42
- 1 &hellip; 39 **[40]** 41 42
- 1 &hellip; 40 **[41]** 42
- 1 &hellip; 41 **[42]**

## First and last pages

Do not show the previous page link on the first page — and do not show the next page link on the last page.

{{ example({ group: "components", item: "pagination", example: "first", html: false, nunjucks: false, open: false, size: "xxs" }) }}

{{ example({ group: "components", item: "pagination", example: "last", html: false, nunjucks: false, open: false, size: "xxs" }) }}

<!-- ## Previous and next pages

{{ example({ group: "components", item: "pagination", example: "previous-next", html: false, nunjucks: false, open: false, size: "xxs" }) }} -->
