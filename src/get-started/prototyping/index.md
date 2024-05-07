---
layout: collection-page.njk
title: Prototyping
group: get-started
order: 1
---

{% from "partials/example.njk" import example %}

## Figma

In the early stages, Figma can be used as a prototyping tool.

Create a copy of the [National Archives base Figma document](https://www.figma.com/file/ZkJT4CzafD7t5nU1qN8non/Desktop%2C-tablet-and-mobile?type=design&node-id=1%3A84&mode=design&t=6Yg92HAGeqPDDhNM-1) to start designing your pages.

## HTML

Use the [GOV.UK Prototype kit](https://prototype-kit.service.gov.uk/docs/) to create rich, interactive and responsive prototypes.

[The National Archives frontend](https://github.com/nationalarchives/tna-frontend) includes support for the GOV.UK Prototype Kit. You can use the supplied components and styles with the prototype kit to make prototypes that look like National Archives services.

### Create a new National Archives prototype

1. Create an empty directory `mkdir my-new-prototype`
1. Enter the new directory `cd my-new-prototype`
1. Use `npx govuk-prototype-kit create` to create a new prototype project
1. Install the frontend styles with `npm install @nationalarchives/frontend`
1. Run `npm run dev` to start up the prototype kit
1. Visit [localhost:3000](http://localhost:3000) in your browser to see the prototype

[![Creating a new prototype](https://asciinema.org/a/618385.svg)](https://asciinema.org/a/618385)

### Adding custom styles

1. Create a new SCSS file in `app/assets/sass` called `custom.scss` (or whatever you prefer)
1. Create a new layout in `app/views/layout` called `base.html` (or whatever you prefer) which extends the National Archives prototype kit layout
1. Set a default `theme` (see [theme colours](/design-system/styles/colours/#theme-colours)) and `themeAccent` (see [accent colours](/design-system/styles/colours/#accent-colours))
1. Link in your custom CSS file
1. Ensure new pages extend your new layout with `{% raw %}{% extends "layouts/base.html" %}{% endraw %}`

#### Example layout

```html
{% raw %}{% extends "nationalarchives/templates/layouts/_prototype-kit.njk" %}

{% set theme = "light" %}
{% set themeAccent = "yellow" %}

{% block pageTitle %}My Service - The National Archives{% endblock %}

{% block stylesheets %}
  {{ super() }}
  <link href="/public/stylesheets/custom.css" rel="stylesheet" type="text/css" />
{% endblock %}{% endraw %}
```

### Using the components in your prototype

The National Archives components can be included in your prototype using the templating language [Nunjucks](https://mozilla.github.io/nunjucks/).

Examples are given in the [components section](/design-system/components/). Each component example shows all the Nunjucks options available to that component.

{{ example({ group: "components", item: "button", example: "default", html: false, nunjucks: true, size: "xxs", noOpenInNewTab: true }) }}
