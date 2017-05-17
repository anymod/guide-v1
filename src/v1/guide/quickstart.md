---
title: Quickstart
type: guide
order: 1
vue_version: 2.1.3
dev_size: "206.14"
min_size: "67.60"
gz_size: "24.72"
ro_gz_size: "17.14"
---

### Compatibility Note

Component IO does **not** support IE8 and below, because it uses ECMAScript 5 features that are un-shimmable in IE8. However it supports all [ECMAScript 5 compliant browsers](http://caniuse.com/#feat=es5).

## Hello World

Simply add the basic `Hello World!` component to one of your projects or view the [jsfiddle](https://jsfiddle.net/component/hvnx6p0q/).

``` html
<component key=ranno></component>

<!-- Component IO script -->
<script project="component-io-team" src="https://cdn.component.io/v1"></script>
```
This code puts a simple text component on the page:

{% raw %}
<div class="demo">
  <component key=ranno></component>
</div>
{% endraw %}

## Create your own

To create your own components, sign up and choose components from the Component IO library.

<div id="downloads">
  <a class="button" href="https://component.io/auth">Sign up</a><span class="light info">Once logged in, you can create your own components</span>
</div>

{% raw %}
<!-- Component IO script -->
<script project="component-io-team" src="https://cdn.component.io/v1"></script>
{% endraw %}
