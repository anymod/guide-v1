---
title: React
type: usage
order: 101
published: true
---

> __TL;DR__ use data-key & data-load, and place the Component.render() method in `componentDidMount`

## Setup

To use components with [React](https://facebook.github.io/react/), add the component via React's `render` and call `Component.render()` when the React component is ready:

```js
componentDidMount () {
  Component.render()
},
render () {
  return <component data-key="mladl" data-load="md-mi"></component>
}
```
<p class="tip">Because React does not handle "custom" attributes like `key` and `load`, you should use `data-key` and `data-load` instead. React also requires you to use quotation marks (`"`) for attributes.</p>

You can use `Component.render()` by itself or with a callback or promise. See the section on [Component.render](/v1/api/index.html#Component-render-function) for more.

## Example

<iframe width="100%" height="700" src="https://jsfiddle.net/component/0f4m6sqs/embedded/js,html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Rendering multiple components

You can render multiple components the same way as a single component. However, React does require that its internal `render` function returns a single element. So to render multiple Component IO components in a single React component, you can wrap them in a common element such as a `<div>`, like so:

```js
render () {
  return (
    <div>
      <component data-key="mladl" data-load="md-mi"></component>
      <component data-key="ekaob" data-load="b"></component>
      <component data-key="aldlk" data-load="md"></component>
    </div>
  )
}
```

## Re-rendering

You can call `Component.render()` as often as you'd like in your React component (or elsewhere). This method will not lead to an API call every time; if a component has already been fetched once, `Component.render()` will use that data instead of making another API call.

See the section on [Component.render](/v1/api/index.html#Component-render-function) for more.
