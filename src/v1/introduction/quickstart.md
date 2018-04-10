---
title: Quickstart
type: guide
order: 0
published: true
---

### Compatibility Note

Anymod does **not** support IE8 and below, because it uses ECMAScript 5 features that are un-shimmable in IE8. However it supports all [ECMAScript 5 compliant browsers](http://caniuse.com/#feat=es5).

## Hello World

<p class="tip">You can fork this mod from the [Anymod editor](https://anymod.com/mod/ranno) or view it in a [jsfiddle](https://jsfiddle.net/component/hvnx6p0q/).</p>

Add a basic `Hello World!` mod to one of your projects by pasting the following into your HTML:

``` html
<div id=anymod-ranno></div>

<!-- Anymod script -->
<script project="anymod" src="https://cdn.anymod.com/v1"></script>
```
This code puts basic text on the page:

{% raw %}
<div class="demo">
  <div id=anymod-ranno></div>
</div>
{% endraw %}


## Create your own

Build your own mods from scratch or choose from the Anymod library.

<div>
  <a class="button" href="https://anymod.com">Sign up</a><span class="light info">Once logged in, you can create your own mods</span>
</div>

{% raw %}
<!-- Anymod script -->
<script project="anymod" src="https://cdn.anymod.com/v1"></script>
{% endraw %}
