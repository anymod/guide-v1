---
title: Component API
type: api
order: 0
---

`jframe` is a global object that provides access to all of the components on a page. You can interact with it to read and write data in the browser and to hook into component events.

All jframe components are built using the underlying API for [vue.js](https://vuejs.org). Calling `jframe('-id-')`, where `-id-` is the id of the component, will give a handle to the Vue instance for that component.

For example, the component below renders the text `Hello World!`

``` html
<jframe text id="hello"></jframe>
```
{% raw %}
<div class="demo">
  <jframe text id="hello"></jframe>
</div>
{% endraw %}

In this case, `jframe('hello')` gives access to the text component. This type of access is the basis for interacting with jframe component programmatically.

## getters

- **Usage:**

  ``` js
  jframe('hello').text
  ```

  Returns a value held by a component.

  The properties available to get vary by component.

## setters

- **Usage:**

  ``` js
  jframe('hello').text = 'New text'
  ```

  Sets a component property locally. Does not save the value for future page loads.

  The properties available to set vary by component.

## ready( function )

- **Usage:**

  ``` js
  jframe.ready(function () {
    console.log('jframe is ready')
  })

  jframe.ready(function () {
    jframe('hello').text = 'New text'
  })
  ```

  Executes any registered functions once jframe has loaded all components. Multiple functions can be registered and they will all be executed when jframe has all loaded components.

  Any functions registered after jframe is ready will be executed immediately.

{% raw %}
<!-- jframe snippet code -->
<script>
  (function(s,i,m,p,l,e,r){s[p]=s[p]||{f:[],ready:function(c){s[p].f.push(c)}},e=i.createElement(m),
  e.async=1,r=i.getElementsByTagName(m)[0],e.src=l+p+'.js',r.parentNode.insertBefore(e,r);
  })(window,document,'script','jframe','//jfra.me/v0/');
</script>
{% endraw %}
