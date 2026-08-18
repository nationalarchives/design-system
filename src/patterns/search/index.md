---
layout: collection-page.njk
title: Search
description: Allow users to search and filter for things in your service.
group: patterns
---

{% from "partials/example.njk" import example %}

Avoid allowing forms that are used for searching to produce errors.

## Fields

Use the [search field component](../../components/search-field/) for the main search query term.

Searching for dates should use the [date search component](../../components/date-search/). Using this component should mean that there is less chance of producing an error.

Use the [select component](../../components/select/) to offer simple options for sorting.

Use any of the other [form fields](../../styles/forms/#fields) to helpp with filtering results.

{{ example({ title: "Searching example", group: "patterns", item: "search", example: "searching", html: true, nunjucks: true, size: "xl", showNunjucksOptions: false }) }}

## Displaying results

Use an unordered list (`<ul>`) element to display results.

Paginate search results using the [pagination component](../../components/pagination/) at the bottom of the page.

Select a result page size of between 10 and 100, depending on your service needs and result size.

### Number of results

Tell the user how many results were found, which results they are looking at and the main term used for the search (if there is one).

Use commas for large numbers. Make the current results range and total count [bold](../../styles/typography/#bold).

Good examples of result text are:

- Showing **1–20** of **2,000** results
- Showing **1–20** of **200** results for "pizza"
- Showing **1–20** of **1,000** results for "cheese" or "pizza"

If there is only one type of result, use that in the text rather than "results":

- Showing **1–20** of **100** teaching resources




