---
title: AngularJS 1
type: usage
order: 101
published: true
---

## Setup

To use mods with [AngularJS v1](https://angularjs.org/), add the mod tag in an Angular template and call `Anymod.render()` to render the mods.

One way to do this is in your HTML template and your controller:

```html
<div ng-controller="myCtrl">
  <div id=anymod-aldlk data-load=md></div>
</div>
```
```js
angular.module('myApp').controller('myCtrl', [function () {
  Anymod.render()
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
    template: '<div id=anymod-aldlk data-load=md></div>',
    link: function (scope, ele, attrs) {
      Anymod.render()
    }
  }
}])
```

Either way works equally well, so you can use whichever method you prefer.

You can use `Anymod.render()` by itself or with a callback or promise. See the section on [Anymod.render](/v1/api/index.html#Anymod-render-function-options) for more.

## Example

The following example shows 2 mods being rendered: 1 with the directive approach (ekaob: the top card) and 1 with the controller approach (aldlk: the bottom card).

<iframe width="100%" height="650" src="https://jsfiddle.net/component/dm483s04/embedded/js,html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Rendering multiple mods

You can render multiple mods the same way as a single mod, and you only need to call `Anymod.render()` once:

```html
<div ng-controller="myCtrl">
  <div id=anymod-aldlk data-load=md></div>
  <div id=anymod-ekaob data-load=b></div>
</div>
```
```js
angular.module('myApp').controller('myCtrl', [function () {
  Anymod.render()
}])
```

## Re-rendering

You can call `Anymod.render()` as often as you'd like in your Angular code (or elsewhere). This method will not lead to an API call every time; if a mod has already been fetched once, `Anymod.render()` will use that data instead of making another API call.

See the section on [Anymod.render](/v1/api/index.html#Anymod-render-function-options) for more.
