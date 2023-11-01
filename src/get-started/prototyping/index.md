---
layout: collection-page.njk
title: Prototyping
group: get-started
---

{% from "_example.njk" import example %}

## GOV.UK Prototype kit

Use the [GOV.UK Prototype kit](https://prototype-kit.service.gov.uk/docs/) to create interactive, responsive prototypes which can be commited and contributed to on GitHub.

## Prototyping with The National Archives styles

[The National Archives frontend](https://github.com/nationalarchives/tna-frontend) includes support for the GOV.UK Prototype Kit.

You can use the supplied components and styles with the prototype kit to make rich HTML prototypes that look like National Archives services.

### Create a new National Archives prototype

1. Create an empty directory `mkdir my-new-prototype`
1. Enter the new directory `cd my-new-prototype`
1. Use `npx govuk-prototype-kit create` to create a new prototype project
1. Install the frontend styles with `npm install @nationalarchives/frontend`
1. Run `npm run dev` to start up the prototype kit
1. Visit [localhost:3000](http://localhost:3000) in your browser to see the prototype
1. Visit [localhost:3000/manage-prototype](http://localhost:3000/manage-prototype) in your browser to create pages including page templates from the National Archives Frontend
1. Use the National Archives components in your pages

[![asciicast](https://asciinema.org/a/618385.svg)](https://asciinema.org/a/618385)

### Using the components in your prototype

The National Archives components can be included in your prototype using the templating language [Nunjucks](https://mozilla.github.io/nunjucks/).

Examples are given in the [components section](/design-system/components/). Each component example shows all the Nunjucks options available to that component.

{{ example({ group: "components", item: "button", example: "default", html: false, nunjucks: true, open: false, size: "xxs", noOpenInNewTab: true }) }}
