---
layout: collection-page.njk
title: Dates and times
description: Write dates and times in a consistent format.
group: content
---

Dates should be written in a human-readable format.

## Days

Date numbers do not need "st", "th" or "rd" suffixes.

Do not add a leading 0 to the date; use "9 June" rather than "09 June".

If using the day of the week, either use the full name ("Monday", "Tuesday", "Wednesday") or if there is not enough space, the first three letters ("Mon", "Tue", "Wed").

## Months

Use either the full month name ("January", "February", "March") or if there is not enough space, the first three letters ("Jan", "Feb", "Mar").

## Years

Use four-digit years rather than two-digit years ("2024" rather than "24").

## Time

Use the [24-hour notation](https://en.wikipedia.org/wiki/24-hour_clock) for writing times and 0-prefix the hour:

- 09:30

## Examples

Good examples of dates are:

<dl class="tna-dl tna-dl--zebra">
  <dt>Date with time</dt>
  <dd>16 October 2023, 19:00</dd>
  <dt>Date</dt>
  <dd>16 October 2023</dd>
  <dt>Month</dt>
  <dd>October 2023</dd>
  <dt>Year</dt>
  <dd>2023</dd>
</dl>

For full dates, you can include a day of the week:

<dl class="tna-dl tna-dl--zebra">
  <dt>Date with day and time</dt>
  <dd>Monday 16 October 2023, 19:00</dd>
  <dt>Date with day</dt>
  <dd>Monday 16 October 2023</dd>
</dl>

## Ranges

Always use "to" rather than dashes or hyphens for date ranges.

Avoid unnecessary duplication of days, months or years to allow users to scan more easily. The exception is times over multiple dates where it could be confusing to try and simplify.

<dl class="tna-dl tna-dl--zebra">
  <dt>Times in the same day</dt>
  <dd>16 October 2023, 19:00 to 20:00</dd>
  <dt>Times different days</dt>
  <dd>16 October 2023, 19:00 to 24 October 2023, 20:00</dd>
  <dt>Dates in the same month</dt>
  <dd>16 to 24 October 2023</dd>
  <dt>Dates over multiple months</dt>
  <dd>16 October to 24 November 2023</dd>
  <dt>Dates over multiple years</dt>
  <dd>16 October 2023 to 24 November 2024</dd>
  <dt>Months in the same year</dt>
  <dd>October to November 2023</dd>
  <dt>Months over multiple years</dt>
  <dd>October 2023 to November 2024</dd>
  <dt>Range of years</dt>
  <dd>2023 to 2024</dd>
</dl>

If there is limited space, you can use an en-dash for a range of years, for example 2023–2024.

### Ranges with no beginning or end

Use "From &hellip;" for open-ended events and "Now to &hellip;" when describing events that are currently ongoing:

- From 1 January 1970
- Now to 19 January 2038

## Formats in data

Use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format for dates intended to be consumed by a machine, for example in a CSV export:

- `2023-10-16T19:00:00Z`
- `2023-10-16`
- `2023-10`
- `2023`

Where possible, use [Coordinated Universal Time (UTC)](https://en.wikipedia.org/wiki/Coordinated_Universal_Time) (also known as the Zulu time zone).

<!--
If using [TNA Frontend](../../get-started/tna-frontend/), add a `tna-template--enhance-time-elements` class to your `tna-template` element to automatically update any `<time>` elements with a valid `datetime` to a localised time (taking daylight savings time into account).

```html
<time datetime="2026-03-05T13:48:00-05:00">
  5 March 2026, 13:48 (UTC -5)
</time>
```

would be updated to:

```html
<time datetime="2026-03-05T13:48:00-05:00" title="5 March 2026, 13:48 (UTC -5)">
  Thursday 5 March 2026, 09:48
</time>
```
-->

Use the [HTML `time` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/time) where possible in HTML:

```html
<time datetime="2023-10-16">16 October 2023</time>
<time datetime="2023-10-16T19:00:00Z">16 October 2023, 19:00</time>
```

## Tools

[TNA Python Utilities](https://nationalarchives.github.io/python-utilities/dates-and-times/) is a Python package that allows you to format dates, times and ranges that match The National Archives’ standards.
