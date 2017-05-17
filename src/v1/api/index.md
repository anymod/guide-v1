---
title: Component API
type: api
order: 0
---

`Component` is a global object that provides access to all of the components on a page. You can interact with it to read and write data in the browser and to hook into component events.

All components are built using the underlying API for [vue.js](https://vuejs.org). Calling `Component('_key_')`, where `_key_` is the key of the component, will give a handle to the Vue instance for that component.

For example, the component below renders the text `Hello World!`

``` html
<component key=ranno></component>
```
{% raw %}
<div class="demo">
  <component key=ranno></component>
</div>
{% endraw %}

In this case, `Component('ranno')` gives access to the text component. This type of access is the basis for interacting with components programmatically.

## getters

- **Usage:**

  ``` js
  Component('ranno').text
  ```

  Returns a value held by a component.

  The properties available to get vary by component.

## setters

- **Usage:**

  ``` js
  Component('ranno').text = 'New text'
  ```

  Sets a component property locally. Does not save the value for future page loads.

  The properties available to set vary by component.

## ready( function )

- **Usage:**

  ``` js
  Component.ready(function () {
    console.log('Components are ready')
  })

  Component.ready(function () {
    Component('ranno').text = 'New text'
  })
  ```

  Executes any registered functions once all components have been loaded. Multiple functions can be registered and they will all be executed when components are done loading.

  Any functions registered after components are ready will be executed immediately.

{% raw %}
<!-- Component IO script -->
<script project="component-io-team" src="https://cdn.component.io/v1"></script>
{% endraw %}

## buildImage

- **Usage:**

  ``` html
  <!-- Inside of Component IO editor HTML panel -->
  <img :src="buildImage(image, options)" />
  ```

  ``` js
  // Inside of Component IO editor JavaScript panel
  this.buildImage(image, options)
  ```

  Resizes and crops image based on `options` inputs.

| Option | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| w | `Integer` | - | Width of the image in pixels |
| h | `Integer` | - | Height of the image in pixels |
| c | `String` | `fit` | [Cropping mode](https://cloudinary.com/documentation/image_transformations#scale): `scale`, `fit`, `mfit`, `fill`, `lfill`, `limit`, `pad`, `lpad`, `mpad`, `crop`, or `thumb`. |
| g | `String` | `center` | [Cropping gravity](http://cloudinary.com/documentation/image_transformations#control_gravity): see link for options. |

- **Example:**

  Given an `image` field with an uploaded image:
  <img src="https://res.cloudinary.com/component/image/upload/v1495041007/guide_buildimage_example.jpg"/>

  ``` html
  <img :src="buildImage(image, { w: 400, h: 150, c: 'fill' })" />
  ```
  <img src="https://res.cloudinary.com/component/image/upload/c_fill,w_400,h_150/v1495041211/ctrl3kv9nb1gyhhhmcnz.jpg"/>

  ``` html
  <img :src="buildImage(image, { w: 150, h: 150, c: 'crop', g: 'face' })" />
  ```
  <img src="https://res.cloudinary.com/component/image/upload/c_crop,w_150,h_150,g_face/v1495041211/ctrl3kv9nb1gyhhhmcnz.jpg"/>
