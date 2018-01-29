---
title: Vue.js
type: usage
order: 104
published: true
---

## Setup

To use mod with [Vue.js](https://vuejs.org/), add the mod's tag and call like any other element:

```html
<div id="example">
  <div id="anymod-aldlk" data-load="md-mi"></div>
</div>
```
```js
new Vue({
  el: '#demo'
})
```

## Inside a custom Vue component

To use mods inside a custom Vue component, call `Anymod.render()` once Vue has mounted:

```html
<div id="example">
  <my-component></my-component>
</div>
```
```js
// register
Vue.component('my-component', {
  template: '<div id="anymod-aldlk" data-load="md-mi"></div>'
})

// create a root instance
new Vue({
  el: '#example',
  mounted: function () {
    Anymod.render()
  }
})
```

## Example

<iframe height='500' scrolling='no' title='Anymod with Vue.js' src='//codepen.io/anymod/embed/dJONGy/?height=265&theme-id=0&default-tab=html,result&embed-version=2' frameborder='no' allowtransparency='true' allowfullscreen='true' style='width: 100%;'>
</iframe>

## Rendering multiple mods

You can render multiple mods the same way as a single mod, like so:

```html
<div id="demo">
  <div id=anymod-mladl data-load=md-mi></div>
  <div id=anymod-ekaob data-load=b></div>
  <div id=anymod-aldlk data-load=md></div>
</div>
```
```js
new Vue({
  el: '#demo',
  mounted: function () {
    Anymod.render()
  }
})
```

## Re-rendering

You can call `Anymod.render()` as often as you'd like in your Vue.js application (or elsewhere). This method will not lead to an API call every time; if a mod has already been fetched once, `Anymod.render()` will use that data instead of making another API call.

See the section on [Anymod.render](/v1/api/index.html#Anymod-render-function-options) for more.
