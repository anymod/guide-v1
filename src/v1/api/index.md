---
title: Component API
type: api
order: 0
---

`Component` is a global object that provides access to all of the components on a page. You can interact with it to read and write data in the browser and to hook into component events.

All components are built using the underlying API for [vue.js](https://vuejs.org). Calling `Component('-id-')`, where `-id-` is the id of the component, will give a handle to the Vue instance for that component.

For example, the component below renders the text `Hello World!`

``` html
<component text id="hello"></component>
```
{% raw %}
<div class="demo">
  <component text id="hello"></component>
</div>
{% endraw %}

In this case, `Component('hello')` gives access to the text component. This type of access is the basis for interacting with components programmatically.

## getters

- **Usage:**

  ``` js
  Component('hello').text
  ```

  Returns a value held by a component.

  The properties available to get vary by component.

## setters

- **Usage:**

  ``` js
  Component('hello').text = 'New text'
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
    Component('hello').text = 'New text'
  })
  ```

  Executes any registered functions once all components have been loaded. Multiple functions can be registered and they will all be executed when components are done loading.

  Any functions registered after components are ready will be executed immediately.

{% raw %}
<!-- Component IO script -->
<script src="https://cdn.component.io/v1" project="component-io-team"></script>
{% endraw %}
