---
title: React
type: usage
order: 103
published: true
---

## Setup

To use components with [React](https://facebook.github.io/react/), add the component tag via React's `render` and call `Anymod.render()` when the React component has mounted:

```js
componentDidMount () {
  Anymod.render()
},
render () {
  return <component data-key="mladl" data-load="md-mi"></component>
}
```
<p class="tip">Because React does not handle "custom" attributes like `key` and `load`, use `data-key` and `data-load` instead. React also requires you to use quotation marks (`"`) for attributes.</p>

You can use `Anymod.render()` by itself or with a callback or promise. See the section on [Anymod.render](/v1/api/index.html#Component-render-function) for more.

## Example

<iframe width="100%" height="700" src="https://jsfiddle.net/component/0f4m6sqs/embedded/js,html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Rendering multiple components

You can render multiple components the same way as a single component. However, React does require that its internal `render` function returns a single element. So to render multiple Anymod components in a single React component, you can wrap them in a common element such as a `<div>`, like so:

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

You can call `Anymod.render()` as often as you'd like in your React component (or elsewhere). This method will not lead to an API call every time; if a component has already been fetched once, `Anymod.render()` will use that data instead of making another API call.

See the section on [Anymod.render](/v1/api/index.html#Component-render-function) for more.
