---
title: AngularJS 1
type: usage
order: 101
published: true
---

## Setup

To use components with [AngularJS v1](https://angularjs.org/), add the component tag in an Angular template and call `Component.render()` to render the components.

One way to do this is in your HTML template and your controller:

```html
<div ng-controller="myCtrl">
  <component key=aldlk load=md></component>
</div>
```
```js
angular.module('myApp').controller('myCtrl', [function () {
  Component.render()
}])
```

Another way is to use a directive:

```html
<div ng-controller="myCtrl">
  <div demo></div>
</div>
```
```js
angular.module('myApp').directive('demo', [function () {
  return {
    template: '<component key=mladl load=md-mi></component>',
    link: function (scope, ele, attrs) {
      Component.render()
    }
  }
}])
```

Either way works equally well, so you can use whichever method you prefer.

You can use `Component.render()` by itself or with a callback or promise. See the section on [Component.render](/v1/api/index.html#Component-render-function) for more.

## Example

The following example shows 2 components being rendered: 1 with the controller approach (aldlk: the card) and 1 with the directive approach (mladl: the side menu).

<iframe width="100%" height="650" src="https://jsfiddle.net/component/mandn5ok/embedded/js,html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Rendering multiple components

You can render multiple components the same way as a single component, and you only need to call `Component.render()` once:

```html
<div ng-controller="myCtrl">
  <component key=aldlk load=md></component>
  <component key=ekaob load=b></component>
</div>
```
```js
angular.module('myApp').controller('myCtrl', [function () {
  Component.render()
}])
```

## Re-rendering

You can call `Component.render()` as often as you'd like in your Angular code (or elsewhere). This method will not lead to an API call every time; if a component has already been fetched once, `Component.render()` will use that data instead of making another API call.

See the section on [Component.render](/v1/api/index.html#Component-render-function) for more.
