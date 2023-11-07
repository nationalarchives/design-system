---
layout: collection-page.njk
title: Dates
group: content
---

## Formats in text

Use a human-readable date format for dates within text:

- Monday, 16th October 2023
- 16th October 2023
- October 2023
- 2023

Use the HTML `time` element where possible:

```html
<time datetime="2023-10-16">16th October 2023</time>
```

## Formats in data

Use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format for dates intended to be consumed by a machine, for example in a CSV export:

- `2023-10-16`
- `2023-10`
- `2023`

## Ranges

Always use the en dash (`–` or `&ndash;`) rather than a hyphen (`-`) for date ranges:

- 16th–24th October 2023
- October–November 2023
- 2023–2024

Use "to" when the range stretches over multiple date fields (dates/months/years):

- 16th October to 24th November 2023
- October 2023 to November 2024
