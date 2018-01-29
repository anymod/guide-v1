---
title: Angular 2+
type: usage
order: 102
published: true
---

## Setup

To use Anymod with [Angular 2+](https://angular.io/), add the Anymod script tag before (above) your Angular script tags in your HTML. Then make `Anymod` available in your `.ts` file:

```ts
declare var Anymod: any;
```

Now you can add your mod and call `Anymod.render()` to render the mod(s):

```ts
@Component({
  ...
  template: `<div id=anymod-aldlk data-load=md-mi></div>`,
})
export class AnymodDemo {
  ...
  ngOnInit() {
    Anymod.render()
  }
}
```

<!-- <p class="tip">Because Angular 2 does not allow external "custom" elements like `component`, use `data-component` as an attribute instead.</p> -->

You can use `Anymod.render()` by itself or with a callback or promise. See the section on [Anymod.render](/v1/api/index.html#Anymod-render-function-options-options) for more.

## Example

The following example shows a component being rendered in typescript with `Anymod.render`:

<iframe width="100%" height="650" src="https://embed.plnkr.co/mQU9elAt1PzqzHLjYUR7/?show=app.js,preview" allowfullscreen="allowfullscreen" frameborder="0"></iframe>



## Rendering multiple components

You can render multiple components the same way as a single component, and you only need to call `Anymod.render()` once:

```ts
@Component({
  ...
  template: `
    <div id=anymod-mladl data-load=md-mi></div>
    <div id=anymod-ekaob data-load=b></div>
    <div id=anymod-aldlk data-load=md></div>
  `,
})
export class AnymodDemo {
  ...
  ngOnInit() {
    Anymod.render()
  }
}
```

## Re-rendering

You can call `Anymod.render()` as often as you'd like in your Angular code (or elsewhere). This method will not lead to an API call every time; if a component has already been fetched once, `Anymod.render()` will use that data instead of making another API call.

See the section on [Anymod.render](/v1/api/index.html#Anymod-render-function-options-options) for more.
