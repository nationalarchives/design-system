---
layout: collection-page.njk
title: Error pages
group: content
---

{% from "_example.njk" import example %}

## Page not found pages

{{ example({ group: "content", item: "error-pages", example: "404", html: false, nunjucks: false, size: "xxl", noPadding: true }) }}

### When to use this pattern

Use a page not found if someone is trying to view a page that does not exist. This happens if someone:

- selects a link or button that takes them to a page that does not exist
- types or copies a web address for a page that does not exist
- types or copies a web address incorrectly

Test all links and buttons to make sure they work. Remember to [do the hard work to make it simple](https://www.gov.uk/guidance/government-design-principles#do-the-hard-work-to-make-it-simple).
