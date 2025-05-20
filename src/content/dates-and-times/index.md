---
layout: collection-page.njk
title: Dates and times
description: Write dates and times in a consistent format.
group: content
---

## Formats

Dates should be written in a human-readable format. Date numbers do not need "st", "th" or "rd" suffixes.

Good examples of dates are:

<dl class="tna-dl">
  <dt>Time</dt>
  <dd>16 October 2023, 19:00</dd>
  <dt>Day</dt>
  <dd>16 October 2023</dd>
  <dt>Month</dt>
  <dd>October 2023</dd>
  <dt>Year</dt>
  <dd>2023</dd>
</dl>

You can include a day of the week if space allows:

<dl class="tna-dl">
  <dt>Time</dt>
  <dd>Monday 16 October 2023, 19:00</dd>
  <dt>Day</dt>
  <dd>Monday 16 October 2023</dd>
</dl>

Use the HTML `time` element where possible:

```html
<time datetime="2023-10-16">16 October 2023</time>
<time datetime="2023-10-16T19:00:00Z">16 October 2023, 19:00</time>
```

### Time

Use the [24-hour notation](https://en.wikipedia.org/wiki/24-hour_clock) for writing times.

Do not 0-prefix the hour:

- 9:30

## Ranges

Always use "to" rather than dashes or hyphens for date ranges.

Avoid unnecessary duplication of days, months or years to allow users to scan more easily.

<dl class="tna-dl">
  <dt>Times in the same day</dt>
  <dd>16 October 2023, 19:00 to 20:00</dd>
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

Use "From &hellip;" for open-ended events and "Now to &hellip;" when describing events that are currently ongoing:

- From 1 January 1970
- Now to 19 January 2038

## Formats in data

Use the [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format for dates intended to be consumed by a machine, for example in a CSV export:

- `2023-10-16T19:00:00Z`
- `2023-10-16`
- `2023-10`
- `2023`
