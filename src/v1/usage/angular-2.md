---
title: Angular 2
type: usage
order: 102
published: true
---

## Setup

To use components with [Angular 2](https://angular.io/), add the component as a `div` with the `data-component` attribute in an Angular template and call `window.Component.render()` with the `dataComponent` option set to `true` to render the component(s):

```ts
@Component({
  ...
  template: `<div data-component key=mladl load=md-mi></div>`,
})
export class ComponentDemo {
  ...
  ngOnInit() {
    window.Component.render({ dataComponent: true })
  }
}
```

<p class="tip">Because Angular 2 does not allow external "custom" elements like `component`, use `data-component` as an attribute instead.</p>

You can use `Component.render()` by itself or with a callback or promise. See the section on [Component.render](/v1/api/index.html#Component-render-function) for more.

## Namespacing

Because Angular 2 uses the word `Component` internally, you may want to namespace the global Component IO object rather than reference it with `window.Component` as shown above. To do this, you can load the Component IO script and namespace it before your Angular scripts:

```html
<script project="cio-library" src="https://cdn.component.io/v1"></script>
<script>ComponentIO = Component</script>

<!-- Angular scripts -->
<!-- ... -->
```

With this approach, you can reference the global Component IO object in your application as `ComponentIO`:

```ts
@Component({
  ...
  template: `<div data-component key=mladl load=md-mi></div>`,
})
export class ComponentDemo {
  ...
  ngOnInit() {
    ComponentIO.render({ dataComponent: true })
  }
}
```

## Example

The following example shows a component being rendered in typescript with `ComponentIO.render`:

<iframe width="100%" height="650" src="https://embed.plnkr.co/P4q8uHJmd3PKGDUX6Zrj/?show=app.js,preview" allowfullscreen="allowfullscreen" frameborder="0"></iframe>



## Rendering multiple components

You can render multiple components the same way as a single component, and you only need to call `ComponentIO.render()` once:

```ts
@Component({
  ...
  template: `
    <div data-component key=mladl load=md-mi></div>
    <div data-component key=ekaob load=b></div>
    <div data-component key=aldlk load=md></div>
  `,
})
export class ComponentDemo {
  ...
  ngOnInit() {
    ComponentIO.render({ dataComponent: true })
  }
}
```

## Re-rendering

You can call `Component.render()` as often as you'd like in your Angular code (or elsewhere). This method will not lead to an API call every time; if a component has already been fetched once, `Component.render()` will use that data instead of making another API call.

See the section on [Component.render](/v1/api/index.html#Component-render-function) for more.
