---
title: Vue.js
type: usage
order: 104
published: true
---

## Setup

To use sections with [Vue.js](https://vuejs.org/), add the `<section>` tag and call `Anymod.render()` when the Vue instance has mounted:

```html
<div id="demo">
  <section id=anymod-mladl data-load=md-mi></section>
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

## Example

<iframe width="100%" height="650" src="https://jsfiddle.net/component/2rdevyt5/embedded/js,html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

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
