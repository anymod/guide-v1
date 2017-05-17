---
title: Bootstrap
type: api
order: 2
---

## Carousel (Slider)

### Structure
``` html
<component carousel id="jId"></component>
```
Is replaced by
```html
<div content carousel id="jId">
  <carousel>
    <slider v-for="slide in slides">
      <a :href="slide.url" :target="slide.target">
        <img :src="slide.image"/>
        <div class="carousel-caption">
          <div v-html="slide.rawHtml"></div>
        </div>
      </a>
    </slider>
  </carousel>
</div>
```

### Options

| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| width   | `number` | `1200`   | Width of the carousel in pixels (default is 2.33:1 ratio). |
| height  | `number` | `514`    | Height of the carousel in pixels (default is 2.33:1 ratio). |
| crop    | `string` | `'fill'` | How to crop the images in the slider. Value can be `'fill'`, `'limit'`, `'fit'`, `'scale'`, or `'pad'`. |
| speed   | `number` | `5` | The amount of time in seconds to delay between cycling slides. If set to 0 or a negative number, carousel will not automatically cycle.|
| hideControls | `boolean` | `false` | Whether to hide the directional arrow controls. |
| slides  | `array`  | `[]` | Array of slides. See below. |
<!-- | hideIndicators | `boolean` | `false` | Whether to hide the bottom dot indicators. | -->

### Slide Options

| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| image   | `string`    | - | Image url used for the slides src attribute. |
| rawHtml | `string`  | - | HTML content to show in the slide. |
| url     | `string`  | - | Link url to use when the slide is clicked. |
| newWindowOnClick | `boolean` | `true` | Whether to open a new window when slide link is clicked. |

<a class="guide-link"></a>

## Coming soon

<p class="tip">More information about Bootstrap components coming soon</p>
