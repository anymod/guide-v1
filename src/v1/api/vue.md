---
title: Component.Vue
type: guide
order: 206
published: true
---

Anymod is built on top of [Vue.js version 2](https://vuejs.org), a lightweight JavaScript framework for building components. That means that any methods available in a Vue.js instance are available in all components on Anymod.

## Accessing a component instance

Calling `Component('_key_')` returns a Vue instance for a given component. The Vue team typically refers to these instances as `vm` in their [documentation](https://vuejs.org/v2/api/#Instance-Properties).

```js
Component('orllm').text
// -> 'Foobar'
```

## Editing the JavaScript

In the dashboard JavaScript editor, you can access the component instance with the `component` keyword. For example, to add a method to a component, you can enter the following into the JavaScript editor:

```JS
component.methods = {
  sayHello: function () {
    console.log('Hello World!')
  }
}
```

In the HTML portion of the component editor, you could call that method whenever a click occurs like so:

```HTML
<div @click="sayHello">Click me</div>
```

## Accessing the Vue library

If you want to use Vue.js alongside Anymod, you don't need to include both (though you can). The Anymod script automatically includes Vue.js, available globally as `Component.Vue`.

For example, you could create a new Vue instance like so:

```html
<div id="example"></div>
```
```js
new Component.Vue({
  el: '#example',
  data: { a: 1 }
})
```
