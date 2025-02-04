---
layout: simple-with-nav.njk
title: Accessibility
---

The Digital Services team at The National Archives (TNA) maintains the following products:

- [National Archives Design System website](https://design-system.nationalarchives.gov.uk)
- [TNA Frontend Storybook website](https://nationalarchives.github.io/tna-frontend)
- [TNA Frontend codebase](https://github.com/nationalarchives/tna-frontend)

This page explains how the team works to ensure these products are accessible.

We mirror the [GOV.UK accessibility strategy](https://design-system.service.gov.uk/community/accessibility-strategy/) to improve the accessibility of the National Archives Design System.

We also use the same [accessibility acceptance criteria](https://github.com/nationalarchives/tna-frontend/wiki/Accessibility-acceptance-criteria) as GOV.UK to test our components.

## Accessibility statement

This statement applies to content published on the **nationalarchives.github.io/design-system** site.

This website is run by The National Archives Digital Services team. We want as many people as possible to be able to use this website. For example, that means you should be able to:

- change colours, contrast levels and fonts using browser or device settings
- zoom in up to 400% without problems
- navigate most of the website using just a keyboard
- navigate most of the website using just a mouse and on-screen keyboard
- navigate most of the website using speech recognition software
- listen to most of the website using a screen reader (including the most recent versions of JAWS, NVDA and VoiceOver)

We’ve also made the website text as simple as possible to understand.

AbilityNet has [advice on making your device easier to use](https://mcmw.abilitynet.org.uk/) if you have a disability.

### Feedback and contact information

The National Archives Design System team is always looking to improve the accessibility of this website. If you find any problems that are not listed on this page or think this website is not meeting accessibility requirements, email us at [webmaster@nationalarchives.National Archives](mailto:webmaster@nationalarchives.gov.uk).

The National Archives Design System team will review your request and get back to you in 2 working days.

### Enforcement procedure

The National Archives Digital Service Team is committed to making its websites accessible, in accordance with the [Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/contents).

The Equality and Human Rights Commission (EHRC) is responsible for enforcing the Public Sector Bodies (Websites and Mobile Applications) (No. 2) Accessibility Regulations 2018 (the ‘accessibility regulations’). If you contact us with a complaint and you’re not happy with our response, [contact the Equality Advisory and Support Service (EASS)](https://www.equalityadvisoryservice.com/).

### Compliance status

The Design System website at [nationalarchives.github.io/design-system](https://design-system.nationalarchives.gov.uk) is partially compliant with the Web Content Accessibility Guidelines (WCAG) version 2.2 AA standard. Non-accessible content is documented in the next section.

The TNA Frontend Storybook website at [nationalarchives.github.io/tna-frontend](https://nationalarchives.github.io/tna-frontend) is partially compliant with the Web Content Accessibility Guidelines (WCAG) version 2.2 AA standard. Non-accessible content is documented in the next section.

The TNA Frontend codebase at [github.com/nationalarchives/tna-frontend](https://github.com/nationalarchives/tna-frontend) is fully compliant with the Web Content Accessibility Guidelines (WCAG) version 2.1 AA standard.

### Non-accessible content

In this section, we only list non-accessible content that has been reported, verified and tracked in the following repositories:

- [National Archives Design System website](https://design-system.nationalarchives.gov.uk)
- [TNA Frontend Storybook website](https://nationalarchives.github.io/tna-frontend)
- [TNA Frontend codebase](https://github.com/nationalarchives/tna-frontend)

#### Non-compliance with the accessibility regulations

These accessibility concerns have been classified as being non-compliant, due to a failure in one or more WCAG 2.2 Level A and AA criteria.

From the National Archives Design System website:

There is currently no known non-compliant content in the National Archives Design System website.

From the TNA Frontend Storybook website:

There is currently no known non-compliant content in the TNA Frontend Storybook website.

From the TNA Frontend codebase:

There is currently no known non-compliant content in the TNA Frontend codebase.

#### Disproportionate burden

We do not currently make any claims of disproportionate burden for any of our services.

#### Content that’s not within the scope of the accessibility regulations

The accessibility regulations apply to all portions of the National Archives Design System website, TNA Frontend Storybook website and TNA Frontend codebase.

We do not have any content within these products which we consider to be outside the scope of the accessibility regulations.

#### Other identified and tracked accessibility concerns

Above and beyond non-compliant content, we also track accessibility concerns which:

- show strong evidence of being accessibility barriers
- do not constitute a failure in one or more WCAG 2.1 Level AA criteria
- are not classified as non-compliance with the accessibility regulations
- are determined as worth featuring in this accessibility statement

From the National Archives Design System website:

There are currently no known accessibility concerns in the National Archives Design System website which we have determined to be worth featuring in this accessibility statement.

From the TNA Frontend Storybook website:

There are currently no known accessibility concerns in the TNA Frontend Storybook website which we have determined to be worth featuring in this accessibility statement.

From the TNA Frontend codebase:

1. The details component doesn’t work well with Dragon and VoiceOver. This is a known issue with the assistive tech and the `<details>` HTML element, rather than an issue with our details component specifically. Track the progress of GOV.UK Design System team with regards to this on the [GitHub issue: ‘Details component does not work well with Dragon and VoiceOver’](https://github.com/alphagov/govuk-frontend/issues/3693).

### Testing our products for accessibility

The [National Archives Design System website](https://design-system.nationalarchives.gov.uk/) was last tested internally for accessibility issues on <time datetime="2023-11-09">9 November 2023</time>.

The [TNA Frontend Storybook website](https://nationalarchives.github.io/tna-frontend) was last tested internally for accessibility issues on <time datetime="2023-11-09">9 November 2023</time>.

The [TNA Frontend codebase](https://github.com/nationalarchives/tna-frontend) was last tested internally for accessibility issues on <time datetime="2023-11-09">9 November 2023</time>.

### How the National Archives Design System team makes their websites accessible

The National Archives Design System team works to make sure the Design System and Frontend websites, and the codebase they use, are accessible.

Where possible, the team aims to research components and patterns with a representative range of users, including those with disabilities.

We also test components to make sure they work with a broad range of browsers, devices and assistive technologies &mdash; including screen magnifiers, screen readers and speech recognition tools.

When we publish new content, we’ll continue to make sure that it meets accessibility standards.

### Preparation of this accessibility statement

This statement was prepared on <time datetime="2023-11-09">9 November 2023</time>. It was last reviewed on <time datetime="2023-11-09">9 November 2023</time>.

## Using the Design System and Frontend in your service

While the National Archives Digital Services team takes steps to ensure the Design System is as accessible as possible by default, you still need to carry out contextual research.

Simply using code from the TNA Frontend codebase is not enough to accessibly implement the National Archives Design System. There is important written guidance in the [National Archives Design System website](https://design-system.nationalarchives.gov.uk/) on how to implement styles, components and patterns in an accessible way.

Using the Design System guidance and Frontend codebase does not mean your service automatically meets level AA of WCAG 2.2. You will still need to make sure your service as a whole meets accessibility requirements.

You must research styles, components and patterns as part of your service to make sure they are accessible in context.

Find out what you need to do to [make your service accessible](https://www.gov.uk/service-manual/helping-people-to-use-your-service/making-your-service-accessible-an-introduction) in the GOV.UK Service Manual.
