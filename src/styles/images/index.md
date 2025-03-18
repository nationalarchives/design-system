---
layout: collection-page.njk
title: Images
description: Use images to provide additional visual context.
group: styles
subGroup: content
---

{% from "partials/example.njk" import example %}
{% from "nationalarchives/components/picture/macro.njk" import tnaPicture %}

## Formats

Use JPEG as the default format for images. All WebP images must have a JPEG fallback.

For line art and vector images, use SVG.

Use PNGs when transparency is required but avoid overusing due to the larger file size.

## File sizes

Try to keep each image on the page under 100kB. This will help the page to load quickly.

Compress JPEGs and WebPs where possible. The suggested starting compression should be 60% for JPEGs and 80% for WebPs. This will need to be changed based on your images and presentation.

The exception to this would be where you have to show an image in great detail, such as showing a large map or displaying an image in an image viewer with the ability to zoom.

## Alternative text

Always include an `alt` attribute on images, even if is blank (i.e. `alt=""`).

Avoid using purely decorative images. Icons should be added using an [icon font](../icons/) or SVGs and spacing should be applied with CSS.

Follow [GOV.UK advice on using alternative text](https://design-system.service.gov.uk/styles/images/#alt-text) where possible.

### Recommendations

Some recommendations when writing alternative text for images are:

- convey the key meaning and details in as few words as possible
- avoid starting with "A photo of&hellip;"
- mention the image format (e.g. painting) only if it’s notable in context
- mention colours only if they are important
- describe a map, chart or diagram in three ways:
    - what type it is (e.g. line graph, contour map, cross-section)
    - the type of data in it (e.g. marriage rates, level of GDP)
    - the main trend/most notable feature it shows
- don’t make assumptions about people’s genders or relationships
- mention people’s life stage, clothing or hair colour if they are meaningful in context
- use full punctuation as you would elsewhere, e.g. always end with a full stop

### Alternative text examples

{% set exampleAltTexts = [
    {
        src: "https://picsum.photos/id/8/600/400",
        alt: "An open laptop with a blank screen on a wooden desk. To the left of the laptop is a pen on top of an open pad and on the right of the laptop is a mobile phone and a small cup of coffee."
    },
    {
        src: "https://picsum.photos/id/129/600/400",
        alt: "Two people sitting on a wooden bench with their backs turned. In between them is a dog sitting on the floor and in the distance is the Golden Gate Bridge. The photo has an warm, orange tint."
    }
] %}

{% for exampleAltText in exampleAltTexts %}

#### Example {{ loop.index }}

{{ tnaPicture({
  src: exampleAltText.src,
  alt: exampleAltText.alt,
  width: exampleAltText.width or 600,
  height: exampleAltText.height or 400,
  caption: "<p>Example alternative text for the image above could be:</p><p>&quot;" + exampleAltText.alt + "&quot;</p>"
}) }}

{% endfor %}
