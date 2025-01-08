---
layout: collection-page.njk
title: Global header
description: The global header component shows users they are on a main National Archives service and provides navigation links.
group: components
---

{% from "partials/example.njk" import example %}
{% from "partials/component-status.njk" import status %}

{{ example({ group: "components", item: "global-header", example: "default", html: true, nunjucks: true, size: "m" }, 2) }}

{{ status(true, 1, 1, 1, 1, false) }}

## Content

The logo should link to the home page of the main National Archives website at [www.nationalarchives.gov.uk](https://www.nationalarchives.gov.uk/).

The six main navigation links should be:

<dl class="tna-dl">
  <dt>Visit</dt>
  <dd>
    <a href="https://www.nationalarchives.gov.uk/about/visit-us/">https://www.nationalarchives.gov.uk/about/visit-us/</a>
  </dd>
  <dt>What’s on</dt>
  <dd>
    <a href="https://www.nationalarchives.gov.uk/about/visit-us/whats-on/">https://www.nationalarchives.gov.uk/about/visit-us/whats-on/</a>
  </dd>
  <dt>Explore the collection</dt>
  <dd>
    <a href="https://beta.nationalarchives.gov.uk/explore-the-collection/">https://beta.nationalarchives.gov.uk/explore-the-collection/</a>
  </dd>
  <dt>Help using the archive</dt>
  <dd>
    <a href="https://www.nationalarchives.gov.uk/help-with-your-research/">https://www.nationalarchives.gov.uk/help-with-your-research/</a>
  </dd>
  <dt>Education</dt>
  <dd>
    <a href="https://www.nationalarchives.gov.uk/education/">https://www.nationalarchives.gov.uk/education/</a>
  </dd>
  <dt>Professional guidance and services</dt>
  <dd>
    <a href="https://www.nationalarchives.gov.uk/professional-guidance-and-services/">https://www.nationalarchives.gov.uk/professional-guidance-and-services/</a>
  </dd>
</dl>

There should be two additional top links with an optional third:

<dl class="tna-dl">
  <dt>Search</dt>
  <dd>
    <a href="https://www.nationalarchives.gov.uk/search/">https://www.nationalarchives.gov.uk/search/</a>
  </dd>
  <dt>Shop</dt>
  <dd>
    <a href="https://shop.nationalarchives.gov.uk/">https://shop.nationalarchives.gov.uk/</a>
  </dd>
  <dt>Login</dt>
  <dd>Optional link per-service</dd>
</dl>

Links may need to change slightly based on your environment.
