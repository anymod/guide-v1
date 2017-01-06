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
<jframe id="hello"></jframe>

<!-- jframe snippet code -->
<script>
  (function(s,i,m,p,l,e,r){
    e=i.createElement(m),r=i.getElementsByTagName(m)[0],e.src=l+'j?i='+[].map.call(i.querySelectorAll(p),function(f){return f.id})+'',s[p]={f:[],ready:function(c){s[p].f.push(c)}},r.parentNode.insertBefore(e,r)
  })(window,document,'script','jframe','//jfra.me/v0/');
</script>
```
This code puts a simple text component on the page:

{% raw %}
<div class="demo">
  <jframe id="hello"></jframe>
</div>
{% endraw %}

## Create your own

<div id="downloads">
  <a class="button" href="https://jframe.io/auth/signup">Signup</a><span class="light info">at jframe.io</span>
</div>

{% raw %}
<script>
  (function(s,i,m,p,l,e,r){
    e=i.createElement(m),r=i.getElementsByTagName(m)[0],e.src=l+'j?i='+[].map.call(i.querySelectorAll(p),function(f){return f.id})+'',s[p]={f:[],ready:function(c){s[p].f.push(c)}},r.parentNode.insertBefore(e,r)
  })(window,document,'script','jframe','//jfra.me/v0/');
</script>
{% endraw %}
