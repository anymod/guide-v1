---
title: Quickstart
type: guide
order: 0
published: true
---

### Compatibility Note

Anymod does **not** support IE8 and below, because it uses ECMAScript 5 features that are un-shimmable in IE8. However it supports all [ECMAScript 5 compliant browsers](http://caniuse.com/#feat=es5).

## Hello World

Simply add the basic `Hello World!` component to one of your projects or view the [jsfiddle](https://jsfiddle.net/component/hvnx6p0q/).

``` html
<component key=ranno></component>

<!-- Anymod script -->
<script project="component-io-team" src="https://cdn.component.io/v1"></script>
```
This code puts a simple text component on the page:

{% raw %}
<div class="demo">
  <component key=ranno></component>
</div>
{% endraw %}

## Create your own

To create your own components, sign up and choose components from the Anymod library.

<div>
  <a class="button" href="https://component.io">Sign up</a><span class="light info">Once logged in, you can create your own components</span>
</div>

{% raw %}
<!-- Anymod script -->
<script project="component-io-team" src="https://cdn.component.io/v1"></script>
{% endraw %}
