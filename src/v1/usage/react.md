---
title: React
type: usage
order: 103
published: true
---

## Setup

To use sections with [React](https://facebook.github.io/react/), add the section tag via React's `render` and call `Anymod.render()` when the React component has mounted:

```js
componentDidMount () {
  Anymod.render()
},
render () {
  return <section id="anymod-mladl" data-load="md-mi"></section>
}
```
<p class="tip">React requires you to use quotation marks (`"`) for attributes.</p>

You can use `Anymod.render()` by itself or with a callback or promise. See the section on [Anymod.render](/v1/api/index.html#Anymod-render-function-options) for more.

## Example

<iframe width="100%" height="700" src="https://jsfiddle.net/component/1vpf4coh/embedded/js,html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Rendering multiple sections

You can render multiple sections the same way as a single section. However, React does require that its internal `render` function returns a single element. So to render multiple Anymod sections in a single React component, you can wrap them in a common element such as a `<div>`, like so:

```js
render () {
  return (
    <div>
      <section id="anymod-mladl" data-load="md-mi"></section>
      <section id="anymod-ekaob" data-load="b"></section>
      <section id="anymod-aldlk" data-load="md"></section>
    </div>
  )
}
```

## Re-rendering

You can call `Anymod.render()` as often as you'd like in your React component (or elsewhere). This method will not lead to an API call every time; if a section has already been fetched once, `Anymod.render()` will use that data instead of making another API call.

See the section on [Anymod.render](/v1/api/index.html#Anymod-render-function-options) for more.
