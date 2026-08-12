---
layout: collection-page.njk
title: Accessibility statements
description: You must publish an accessibility statement on your service.
group: content
subGroup: legal requirements
---

{% from "nationalarchives/components/warning/macro.njk" import tnaWarning %}

Your service must have an accessibility statement. This is covered under [regulation 8](https://www.legislation.gov.uk/uksi/2018/952/regulation/8/made) in the [Public Sector Bodies Accessibility Regulations 2018](https://www.legislation.gov.uk/uksi/2018/952/contents/made) which applies to all public sector websites.

If your service sits under the main National Archives domain (**nationalarchives.gov.uk**) then it should use the [main accessibility statement](https://www.nationalarchives.gov.uk/accessibility-statement/).

For services that don’t sit under the root domain (including subdomains), or use different domains entirely, the service must have its own accessibility statement. An example is [this design system’s accessibility statement](../../accessibility/).

{{ tnaWarning({
  headingLevel: 3,
  body: "Internal services and third party services are not exempt from receiving a proper accessibility audit and having to publish an accessibility statement."
}) }}

## Writing an accessibility statement

GOV.UK has published an [example accessibility statement](https://www.gov.uk/government/publications/sample-accessibility-statement) to get you started.

In order to properly complete an accessibility statement, you need to have your service audited.

You can audit your service yourself as long as you declare this in the accessibility statement. A better option is to use someone like the [Digital Accessibility Centre](https://digitalaccessibilitycentre.org/) (DAC) to check your service. DAC have access to people with real accessibility needs and are capable of assessing against all criteria of the [Web Content Accessibility Guidelines](https://www.w3.org/WAI/standards-guidelines/wcag/) (WCAG).

## Exemptions

You don't have to publish an accessibility statement on your service if:

- the service is not publically available, and
- you are the only user of the service, and
- no one else will ever be given access to the service (including if you leave your position)
