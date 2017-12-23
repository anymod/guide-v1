---
title: Global methods
type: guide
order: 200
published: true
---

`Anymod` is a global JavaScript object that provides access to all of the sections on a page along with several useful utility functions. You can interact with it to read and write data, hook into section events, load and render sections, and more.

<p class="tip">To use the global `Anymod` object in your own JavaScript, be sure that the Anymod `<script>` tag is placed in your HTML before (above) your JavaScript so that the Anymod script executes first.</p>

## Anymod( _id_ )

All sections are built using the underlying API for [vue.js](https://vuejs.org). Calling `Anymod('_id_')`, where `_id_` is the id of the section, will give a handle to the Vue instance for that section.

For example, the section below renders the text `Hello World!`

``` html
<section id=anymod-ranno></section>
```
{% raw %}
<div class="demo">
  <section id=anymod-ranno></section>
</div>
{% endraw %}

In this case, `Anymod('ranno')` gives access to the section. This type of access is the basis for interacting with sections programmatically.

## Anymod( _key_ ).attr

A getter method that returns a value held by a section.

- **Usage:**

  ``` js
  Anymod('ranno').text
  // -> "Hello World!"
  ```

The properties available to get vary by section.

## Anymod( _key_ ).attr =

A setter method that sets a section property locally. Does not save the value for future page loads.

- **Usage:**

  ``` js
  Anymod('ranno').text = 'New text'
  // -> "New text"
  ```

The properties available to set vary by section.

## Anymod.ready( _function_ )

Executes a function once all sections have been loaded.

Multiple functions can be registered with `ready()` and they will all be executed when sections are done loading. Any functions registered after sections are ready will be executed immediately.

- **Usage with callback:**

  ``` js
  Anymod.ready(function () {
    console.log('Anymod is ready (callback)')
    Anymod('ranno').text = 'New text'
  })
  ```

- **Usage with promise:**

  ``` js
  Anymod.ready()
  .then(function () {
    console.log('Anymod is ready (promise)')
    Anymod('ranno').text = 'New text'
  })
  ```

## Anymod.render( _function, { options }_ )

Renders any Anymod tags that have not been rendered.

- **Usage with callback:**

  ``` js
  Anymod.render(function () {
    console.log('Anymod rendered (callback)')
  })
  ```

- **Usage with promise:**

  ``` js
  Anymod.render()
  .then(function () {
    console.log('Anymod rendered (promise)')
  })
  ```

The `Anymod.render()` method runs automatically when the Anymod script loads. However, you may not have all sections on the page at that time, so you can call `Anymod.render()` at any time to render sections that have been added since initial page load. There are a few scenarios where this may happen, and the behavior for each is shown below:

<p class="tip">__TL;DR__ If a section's data has already been fetched, that data will be reused on subsequent renders without making additional API calls.</p>

| Scenario | Behavior |
|:---------|:---------|
| No unrendered sections | Execute promise or callback, if any. |
| New, unrendered sections | Fetch data with single API call for all new sections, then render unrendered sections, then execute promise or callback, if any. |
| Previously fetched (but now unrendered) sections | Use the existing data from `Anymod.Store` to render unrendered sections, then execute promise or callback, if any. |
| Mixed sections (some previously fetched, some new) | Fetch data with single API call for new sections, then add data to `Anymod.Store`, then use `Anymod.Store` to render all unrendered sections, then execute promise or callback, if any. |

<!-- - **Options**

| Property | Type | Default | Description |
|:---------|:-----|:--------|:------------|
| dataComponent | `boolean` | `false` | If true, use `<div data-component></div>` pattern instead of `<section></section>` |

> Options can be passed as the first parameter if no callback is needed, e.g. `Anymod.render({ dataComponent: true })` -->


## Anymod.buildImage( _image, { options }_ )

Resizes and crops an `image` based on `options` inputs.

- **Usage:**

  ``` html
  <!-- Inside of Anymod editor HTML panel -->
  <img :src="buildImage(image, options)" />
  ```

  ``` js
  // Inside of Anymod editor JavaScript panel
  Anymod.buildImage(image, options)
  ```

| Option | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| w | `Integer` | - | Width of the image in pixels |
| h | `Integer` | - | Height of the image in pixels |
| c | `String` | `fit` | [Cropping mode](https://cloudinary.com/documentation/image_transformations#scale): `scale`, `fit`, `mfit`, `fill`, `lfill`, `limit`, `pad`, `lpad`, `mpad`, `crop`, or `thumb`. |
| g | `String` | `center` | [Cropping gravity](http://cloudinary.com/documentation/image_transformations#control_gravity): see link for options. |

- **Example:**

  Given an `image` field with an uploaded image:
  <br>
  <img src="https://res.cloudinary.com/component/image/upload/v1495041007/guide_buildimage_example.jpg"/>

  You can resize and crop the image:

  ```html
  <img :src="buildImage(image, { w: 400, h: 150, c: 'fill' })" />
  ```
  OR
  ```js
  var newImage = Anymod.buildImage(component.data.image, { w: 400, h: 150, c: 'fill' })
  ```
  <img src="https://res.cloudinary.com/component/image/upload/c_fill,w_400,h_150/v1495041211/ctrl3kv9nb1gyhhhmcnz.jpg"/>

  If the image has a face, you can smart crop by using the `g: 'face'` option:

  ``` html
  <img :src="buildImage(image, { w: 150, h: 150, c: 'crop', g: 'face' })" />
  ```
  OR
  ```js
  var newImage = Anymod.buildImage(component.data.image, { w: 150, h: 150, c: 'crop', g: 'face' })
  ```
  <img src="https://res.cloudinary.com/component/image/upload/c_crop,w_150,h_150,g_face/v1495041211/ctrl3kv9nb1gyhhhmcnz.jpg"/>

## Anymod.loadScript( _url, callback, { opts }_ )

Loads a script as denoted by `url` and executes an optional `callback` function once the script is loaded.

- **Usage:**

  ```js
  Anymod.loadScript('https://www.google.com/recaptcha/api.js', function () {
    console.log('reCaptcha script has loaded.')
  })
  ```

- **Options**

| Property | Type | Default | Description |
|:---------|:-----|:--------|:------------|
| id | `string` | none | Sets the `id` attribute for the `<script>` tag. |

<p class="tip">If a `<script>` tag with the specified `url` or `id` already exists, a new tag will not be added, and the `callback` function will be invoked immediately if present.</p>


## Anymod.loadStylesheet( _url, callback, { opts }_ )

Loads a stylesheet as denoted by `url` and then executes a `callback` function once the script is loaded.

- **Usage:**

  ```js
  Anymod.loadStylesheet('https://cdnjs.cloudflare.com/ajax/libs/bulma/0.4.2/css/bulma.css', function () {
    console.log('Bulma CSS has loaded.')
  })
  ```

- **Options**

| Property | Type | Default | Description |
|:---------|:-----|:--------|:------------|
| id | `string` | none | Sets the `id` attribute for the `<script>` tag. |

<p class="tip">If a `<link>` tag with the specified `url` or `id` already exists, a new tag will not be added, and the `callback` function will be invoked immediately if present.</p>

<!-- Anymod script -->
<script project="anymod" src="https://cdn.anymod.com/v1"></script>
