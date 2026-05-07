---
layout: collection-page.njk
title: Prototyping
description: Create and iterate on prototypes to explore options and test your assumptions.
group: get-started
order: 1
---

{% from "partials/example.njk" import example %}

There are a few options for prototyping new services or features which range in fidelity.

## Sketching or whiteboard (low fidelity)

Sketching is typically done with a pen and paper and is sometimes called paper prototyping. You can also use a collaborative tool such as Miro or Microsoft Whiteboard.

Sketching is used to test designs early in the process.

### Advantages

- Quick and cheap.
- Builds a design foundation.
- Enables you to create, iterate and throw away ideas without getting invested.
- You can focus on the flow and key concepts, not details.

### Disadvantages

- Paper prototyping is harder to share (and collaborate on) remotely.
- Can be challenging to test with participants remotely.

## Figma (high fidelity)

In the early stages, Figma can be used as a prototyping tool to building user flows and making simple, clickable prototypes to show navigation.

Create a copy of the [National Archives base Figma document](https://www.figma.com/file/ZkJT4CzafD7t5nU1qN8non/Desktop%2C-tablet-and-mobile?type=design&node-id=1%3A84&mode=design&t=6Yg92HAGeqPDDhNM-1) to start designing your pages.

### Advantages

- Fairly quick and easy.
- No coding knowledge needed.
- Enables the whole team to work together, including making and viewing comments.

### Disadvantages

- Interactions are quite limited.
- Harder to present realistic data.
- Cannot handle specific user testing, for example with assistive technology.
- Cannot respond to data input in testing.
- Not always easy to make responsive.

## HTML (high fidelity)

HTML prototypes allow user testing with real data and interactions, plus keyboard navigation and other assistive technologies.

### Advantages

- The team and stakeholders get a better sense of how a product will behave.
- Responds to different devices and screen sizes.
- Easier handover from design to development (and for working out if a design is feasible).

### Disadvantages

- Takes more time to build.
- You need coding skills.
- Harder to collect comments and feedback from the whole team.

### Prototyping with the GOV.UK Prototype Kit

Use the [GOV.UK Prototype Kit](https://prototype-kit.service.gov.uk/docs/) to create rich, interactive and responsive prototypes.

[TNA Frontend](../tna-frontend/) includes support for the GOV.UK Prototype Kit. You can use the supplied components and styles with the prototype kit to make prototypes that look like National Archives services.

1. Create an empty directory `mkdir my-prototype`
1. Enter the new directory `cd my-prototype`
1. Use `npx govuk-prototype-kit create` to create a new prototype project
1. Install the frontend styles with `npm install @nationalarchives/frontend`
1. Run `npm run dev` to start up the prototype kit
1. Visit [localhost:3000](http://localhost:3000) in your browser to see the prototype

[![Creating a new prototype](https://asciinema.org/a/618385.svg)](https://asciinema.org/a/618385)

#### Adding custom styles

1. Create a new SCSS file in `app/assets/sass` called `custom.scss`
1. Create a new layout in `app/views/layouts` called `base.html`, extending the base National Archives prototype kit layout
1. Link your custom CSS file in the base layout in the `stylesheets` block
1. Create new pages that extend your new base layout

```scss:app/assets/sass/custom.scss
* {
  outline: 2px #f0a solid !important;
}
```

```js:app/views/layouts/base.html
{% raw %}{% extends "nationalarchives/templates/prototype-kit/_base.njk" %}

{% block stylesheets %}
  {{ super() }}
  <link href="/public/stylesheets/custom.css" rel="stylesheet" type="text/css" />
{% endblock stylesheets %}{% endraw %}
```

```js:my-page.html
{% raw %}{% extends "layouts/base.html" %}

{% set pageTitle = 'My new page' %}
{% set theme = 'system' %}
{% set themeAccent = 'green' %}

{% block content %}
<p>Hello, world!</p>
{% endblock content %}
{% endraw %}
```

#### Using the components in your prototype

The National Archives components can be included in your prototype using the templating language [Nunjucks](https://mozilla.github.io/nunjucks/).

Examples are given in the [components section](../../components/). Each component example shows all the Nunjucks options available to that component.

{{ example({ group: "components", item: "button", example: "default", html: false, nunjucks: true, showNunjucksOptions: false, jinja: false, size: "xxs", noOpenInNewTab: true }) }}

### Custom HTML prototype

Install and use [TNA Frontend](../tna-frontend/) to make a rich, HTML prototype using the framework of your choice.

Read more about [how to install and use TNA Frontend](../production/).
