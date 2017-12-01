---
title: Bootstrap
type: usage
order: 105
published: true
---

## Setup

To use sections with [Bootstrap 3](http://getbootstrap.com/) or [Bootstrap 4](https://v4-alpha.getbootstrap.com/), add Anymod where desired, and the Anymod script will load your section(s) automatically:

```html
<section id=anymod-nkdnb data-load=md></section>
```

## Example

Contact, signup, or message forms can be a nice addition to modals:

<iframe width="100%" height="450" src="https://jsfiddle.net/component/jyrb82as/embedded/html,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## On-the-fly manipulation

In the event that you're manipulating HTML on the fly, you can use `Anymod.render()` to render any sections you've added since the initial page load. For example, if we want to render modal content dynamically:

```html
<div id="myBtn" class="btn btn-primary" data-toggle="modal" data-target="#myModal" data-key="nkdnb" data-load="md">
  Contact us
</div>
```

```js
$(document).ready(function () {
  $('#myModal').on('show.bs.modal', function (event) {
    var button = $('#myBtn')
    var key = button.data('key')
    var load = button.data('load')
    var modal = $(this)
    modal
      .find('.modal-body')
      .html('<section id=anymod-' + key + ' data-load=' + load + '></section>')
    Anymod.render()
  })
})
```

## On-the-fly example

The example below works the same as the prior example, but this example uses `Anymod.render` to render the section after its HTML is added by the modal initialization:

<iframe width="100%" height="450" src="https://jsfiddle.net/component/31u2qy30/embedded/html,js,result" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

## Re-rendering

You can call `Anymod.render()` as often as you'd like in your code. This method will not lead to an API call every time; if a section has already been fetched once, `Anymod.render()` will use that data instead of making another API call.

See the section on [Anymod.render](/v1/api/index.html#Anymod-render-function-options) for more.
