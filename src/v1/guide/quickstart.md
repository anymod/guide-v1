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

jframe does **not** support IE8 and below, because it uses ECMAScript 5 features that are un-shimmable in IE8. However it supports all [ECMAScript 5 compliant browsers](http://caniuse.com/#feat=es5).

## Hello World

Simply add the basic `hello` component to one of your projects or view the [jsfiddle](https://jsfiddle.net/jframe/hvnx6p0q/).

``` html
<jframe text id="hello"></jframe>

<!-- jframe script -->
<script src="https://cdn.jframe.io/jframe.js" project="PROJECT-ID"></script>
```
This code puts a simple text component on the page:

{% raw %}
<div class="demo">
  <jframe text id="hello"></jframe>
</div>
{% endraw %}

## Create your own

To create your own components, sign up and choose components from the jframe library.

<div id="downloads">
  <a class="button" href="https://jframe.io/auth/signup">Sign up</a><span class="light info">Once logged in, you can create your own components</span>
</div>

{% raw %}
<!-- jframe script -->
<script src="https://cdn.jframe.io/jframe.js" project="jframe"></script>
{% endraw %}
