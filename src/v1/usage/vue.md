---
title: Vue.js
type: usage
order: 104
published: true
---

## Setup

To use components with [Vue.js](https://vuejs.org/), add the component tag with `data-key` and `data-load` and call `Component.render()` when the Vue instance has mounted:

```html
<div id="demo">
  <component data-key=mladl data-load=md-mi></component>
</div>
```
```js
new Vue({
  el: '#demo',
  mounted: function () {
    Component.render()
  }
})
```
<p class="tip">Because `key` is a reserved attribute in Vue.js, you should use `data-key` and `data-load` instead.</p>

## Console warning

The above example will work; however, Vue.js will log a warning to the console along the lines of `Unknown custom element: <component>`. To prevent this, we can use the `data-component` attribute on a `div` element instead:

```html
<div id="demo">
  <div data-component data-key=mladl data-load=md-mi></div>
</div>
```

When using this approach, specify that `Component.render` should use `data-component`:

```js
new Vue({
  el: '#demo',
  mounted: function () {
    Component.render({ dataComponent: true })
  }
})
```

## Register component tag

Another way to avoid the console warning above is to register `<component>` as a custom element in Vue. This enables you to continue using `<component>` tags if desired:

```html
<div id="demo">
  <component data-key=mladl data-load=md-mi></component>
</div>
```
```js
Vue.component('component', {
  props: ['dataKey', 'dataLoad'],
  template: '<div data-component :data-key="dataKey" :data-load="dataLoad"></div>'
})
new Vue({
  el: '#demo',
  mounted: function () {
    Component.render({ dataComponent: true })
  }
})
```

## Example

<iframe width="100%" height="650" src="https://jsfiddle.net/component/rcbwv8zj/embedded/js,html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Rendering multiple components

You can render multiple components the same way as a single component, like so:

```html
<div id="demo">
  <component data-key=mladl data-load=md-mi></component>
  <component data-key=ekaob data-load=b></component>
  <component data-key=aldlk data-load=md></component>
</div>
```
```js
Vue.component('component', {
  props: ['dataKey', 'dataLoad'],
  template: '<div data-component :data-key="dataKey" :data-load="dataLoad"></div>'
})
new Vue({
  el: '#demo',
  mounted: function () {
    Component.render({ dataComponent: true })
  }
})
```

## Re-rendering

You can call `Component.render()` as often as you'd like in your Vue.js application (or elsewhere). This method will not lead to an API call every time; if a component has already been fetched once, `Component.render()` will use that data instead of making another API call.

See the section on [Component.render](/v1/api/index.html#Component-render-function) for more.
