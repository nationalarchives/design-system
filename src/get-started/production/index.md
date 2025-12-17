---
layout: collection-page.njk
title: Production
description: Work with established technologies to create stable, consistent services.
group: get-started
order: 2
---

When making services in production, refer to the [National Archives Engineering Handbook](https://nationalarchives.github.io/engineering-handbook/) for information on our standards and ways of working.

## Include TNA Frontend in your project

See the [TNA Frontend Documentation](https://nationalarchives.github.io/tna-frontend-docs/) for instructions on how to use and customise National Archives styles and components in your applciation.

## Using Jinja2 for templating

For production services, you can use the macros in [TNA Frontend Jinja](https://github.com/nationalarchives/tna-frontend-jinja) to provide the same configuration options and HTML output as the [Nunjucks macros](../prototyping/#using-the-components-in-your-prototype).

The only difference between the Nunjucks examples and their Jinja equivalents is having to quote key names, e.g. `"text"` instead of just `text`.
