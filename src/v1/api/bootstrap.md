---
title: Bootstrap
type: api
order: 2
---

## Carousel (Slider)

### Structure
``` html
<jframe carousel id="jId"></jframe>
```
Is replaced by
```html
<div jframe carousel id="jId">
  <carousel :interval="interval || 0" :indicators="indicators" :controls="controls">
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
| width | `number` | `1200` | Width of the carousel in pixels (default is 16:9 ratio). |
| height | `number` | `675` | Height of the carousel in pixels (default is 16:9 ratio). |
| crop | `string` | `'fill'` | How to crop the images in the slider. Value can be `'fill'`, `'limit'`, `'fit'`, `'scale'`, or `'pad'`. |
| indicators | `boolean` | `true` | Whether to show the indicators. |
| controls | `boolean`   | `true` | Whether to show the directional arrow controls. |
| interval | `number`    | `5000` | The amount of time in milliseconds to delay between automatically cycling a slide. If set to 0 or a negative number, carousel will not automatically cycle.|
| slides | `array` | `[]` | Array of slides. See below. |

### Slide Options

| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| image | `string`    | - | Image url used for the slides src attribute. |
| rawHtml | `string`  | - | HTML content to show in the slide. |
| url | `string`  | - | Link url to use when the slide is clicked. |
| newWindowOnClick | `boolean` | `true` | Whether to open a new window when slide link is clicked. |

<a class="guide-link"></a>

## Coming soon

<p class="tip">More information about Bootstrap components coming soon</p>
