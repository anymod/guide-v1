---
title: Vue.js
type: usage
order: 104
published: true
---

## Setup

To use sections with [Vue.js](https://vuejs.org/), add the `<section>` tag and call like any other element:

```html
<div id="example">
  <section id="anymod-aldlk" data-load="md-mi"></section>
</div>
```
```js
new Vue({
  el: '#demo'
})
```

## Inside a custom Vue component

To use sections inside a custom Vue component, call `Anymod.render()` once Vue has mounted:

```html
<div id="example">
  <my-component></my-component>
</div>
```
```js
// register
Vue.component('my-component', {
  template: '<section id="anymod-aldlk" data-load="md-mi"></section>'
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

## Rendering multiple sections

You can render multiple sections the same way as a single section, like so:

```html
<div id="demo">
  <section id=anymod-mladl data-load=md-mi></section>
  <section id=anymod-ekaob data-load=b></section>
  <section id=anymod-aldlk data-load=md></section>
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

You can call `Anymod.render()` as often as you'd like in your Vue.js application (or elsewhere). This method will not lead to an API call every time; if a section has already been fetched once, `Anymod.render()` will use that data instead of making another API call.

See the section on [Anymod.render](/v1/api/index.html#Anymod-render-function-options) for more.
