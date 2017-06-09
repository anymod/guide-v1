---
title: Component API
type: guide
order: 200
published: true
---

`Component` is a global object that provides access to all of the components on a page. You can interact with it to read and write data in the browser and to hook into component events.

<p class="tip">To use the global `Component` object in your own JavaScript, be sure that the Component IO `<script>` tag is placed in your HTML before (above) your JavaScript so that the Component IO script executes first.</p>

## Component( _key_ )

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

In this case, `Component('ranno')` gives access to the component. This type of access is the basis for interacting with components programmatically.

## Component( _key_ ).attr

A getter method that returns a value held by a component.

- **Usage:**

  ``` js
  Component('ranno').text
  // -> "Hello World!"
  ```

The properties available to get vary by component.

## Component( _key_ ).attr =

A setter method that sets a component property locally. Does not save the value for future page loads.

- **Usage:**

  ``` js
  Component('ranno').text = 'New text'
  // -> "New text"
  ```

The properties available to set vary by component.

## Component.ready( _function_ )

Executes a function once all components have been loaded.

Multiple functions can be registered with `ready()` and they will all be executed when components are done loading. Any functions registered after components are ready will be executed immediately.

- **Usage with callback:**

  ``` js
  Component.ready(function () {
    console.log('Components are ready (callback)')
    Component('ranno').text = 'New text'
  })
  ```

- **Usage with promise:**

  ``` js
  Component.ready()
  .then(function () {
    console.log('Components are ready (promise)')
    Component('ranno').text = 'New text'
  })
  ```

## Component.render( _function_ )

Renders any `<component>` tags that have not been rendered.

- **Usage with callback:**

  ``` js
  Component.render(function () {
    console.log('Components were rendered (callback)')
  })
  ```

- **Usage with promise:**

  ``` js
  Component.render()
  .then(function () {
    console.log('Components were rendered (promise)')
  })
  ```

The `Component.render()` method runs automatically when the Component IO script loads. However, you may not have all components on the page at that point, so you can call `Component.render()` at any time to render any components that have been added. There are a few scenarios that may happen, and the behavior for each is shown below:

| Scenario | Behavior |
|:---------|:---------|
| No unrendered components | Execute promise or callback, if any. |
| New, unrendered components | Fetch data with single API call for new components, then render unrendered components, then execute promise or callback, if any. |
| Previously fetched (but now unrendered) components | Use the existing data from `Component.Store` to render unrendered components, then execute promise or callback, if any. |
| Mixed components (some previously fetched, some new) | Fetch data with single API call for new components, then add data to `Component.Store`, then use `Component.Store` to render all unrendered components, then execute promise or callback, if any. |

<p class="tip">__TL;DR__ If a component's data has already been fetched, that data will be reused on subsequent renders without making additional API calls.</p>

## Component.buildImage( _image, { options }_ )

Resizes and crops an `image` based on `options` inputs.

- **Usage:**

  ``` html
  <!-- Inside of Component IO editor HTML panel -->
  <img :src="buildImage(image, options)" />
  ```

  ``` js
  // Inside of Component IO editor JavaScript panel
  Component.buildImage(image, options)
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
  var newImage = Component.buildImage(component.data.image, { w: 400, h: 150, c: 'fill' })
  ```
  <img src="https://res.cloudinary.com/component/image/upload/c_fill,w_400,h_150/v1495041211/ctrl3kv9nb1gyhhhmcnz.jpg"/>

  If the image has a face, you can smart crop by using the `g: 'face'` option:

  ``` html
  <img :src="buildImage(image, { w: 150, h: 150, c: 'crop', g: 'face' })" />
  ```
  OR
  ```js
  var newImage = Component.buildImage(component.data.image, { w: 150, h: 150, c: 'crop', g: 'face' })
  ```
  <img src="https://res.cloudinary.com/component/image/upload/c_crop,w_150,h_150,g_face/v1495041211/ctrl3kv9nb1gyhhhmcnz.jpg"/>

## Component.Event

Component IO comes with a built-in message bus you can use for communication between components or within your application. It is based on the [event system](https://vuejs.org/v2/api/#Instance-Methods-Events) available to Vue.js components.

### Component.Event.$on( _event, callback_ )

- **Usage:**

  Listen for a custom event. Events can be triggered by `Component.Event.$emit`. The callback will receive all the additional arguments passed into these event-triggering methods.

- **Example:**

  ```JS
  Component.Event.$on('test', function (msg) {
    console.log(msg)
  })
  Component.Event.$emit('test', 'hi')
  // -> "hi"
  ```

### Component.Event.$once( _event, callback_ )

- **Usage:**

  Listen for a custom event, but only once. The listener will be removed once it triggers for the first time.

### Component.Event.$off( _event, callback_ )

- **Usage:**

  Remove custom event listener(s).

  - If no arguments are provided, remove all event listeners;
  - If only the event is provided, remove all listeners for that event;
  - If both event and callback are given, remove the listener for that specific callback only.

### Component.Event.$emit( _event, data_ )

- **Usage:**

  Trigger an event. Any additional arguments will be passed into the listener’s callback function.

- **Example:**

  ```JS
  Component.Event.$on('test', function (data) {
    console.log(data.foo + data.baz)
  })
  Component.Event.$emit('test', { foo: 'bar', baz: 'qux' })
  // -> "barqux"
  ```

### Example in a component

We've created a component with key `mldrn` that has the following JavaScript code:

```JS
Component.Event.$on('updateComponent', function(data) {
  component.data.title = data.title
  component.data.content = data.content
})
```

This code was added via the dashboard code editor, so now the component will respond to the `updateComponent` event by updating its `title` and `content`. Note that there is nothing special about the name `updateComponent` -- the event can be named anything.

Now in our application code we can call `Component.Event.$emit('updateComponent', ...)` and our component will respond accordingly. Below we have a button set to run the following when it is clicked:

```JS
Component.Event.$emit('updateComponent', {
  title: 'New title',
  content: 'New content at ' + new Date().toLocaleTimeString() + '<br><br>'
})
```

Thus clicking the button will cause the `updateComponent` event to fire, which is then picked up by our component, and the `title` and `content` are updated:

<iframe width="100%" height="500" src="//jsfiddle.net/component/L1ugm6gn/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

With this approach, you can send events to any component from your application code or from other components.


<!-- Component IO script -->
<script project="component-io-team" src="https://cdn.component.io/v1"></script>
