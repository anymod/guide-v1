---
title: Bootstrap
type: api
order: 2
---

## Carousel (Slider)

### Structure

``` html
<jframe carousel id="jId">
  <div id="app-jId">
    <carousel>
      <slider v-for="slide in slides">
        <img :src="slide.image"/>
        <div class="carousel-caption">
          <h3 v-text="slide.title"></h3>
          <p v-text="slide.caption"></p>
        </div>
      </slider>
    </carousel>
  </div>
</jframe>
```

### Options

| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| indicators | `Boolean` | `true` | Whether to show the indicators. |
| controls | `Boolean`   | `true` | Whether to show the direction controls. |
| interval | `Number`    | `5000` | The amount of time to delay between automatically cycling an item. If set to 0 or a negative number, carousel will not automatically cycle.|

### Slide Options

| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| title | `string`    | - | Title text to show in the slide. |
| caption | `string`  | - | Caption text to show in the slide. |
| image | `string`    | - | Url used for the slides src attribute. |

<a class="guide-link"></a>

## Coming soon

<p class="tip">More information about Bootstrap components coming soon</p>
