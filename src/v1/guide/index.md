---
title: Introduction
type: guide
order: 2
---

## What is jframe?

jframe makes it easy to use all kinds of web components to build websites and applications.  Unlike platforms like Wordpress, jframe **works with every web technology** (including Wordpress), and unlike frameworks like Bootstrap, jframe **does not require any external styling or javascript**.

The goal of the jframe platform is to provide components that are **simple to use** with other libraries or existing projects.  That means jframe is simple to set up, and is also perfectly capable of powering sophisticated Single-Page Applications.
<!--- when used in combination with [modern tooling](single-file-components.html) and [supporting libraries](https://github.com/vuejs/awesome-vue#libraries--plugins). -->

<!-- If you are an experienced frontend developer and want to know how jframe compares to other libraries/frameworks, check out the [Comparison with Other Frameworks](comparison.html). -->

## Getting Started

<p class="tip">The official guide assumes basic knowledge of HTML. If you are totally new to web development, you may want to try getting a basic website up and running first.  Once you are at that point, you're ready to use jframe.</p>

The easiest way to try out jframe is using the [jframe carousel example](https://jsfiddle.net/jframe/jqhv3e1h/). Feel free to open it in another tab and see what it takes to get a jframe working. Or, you can simply create an `.html` file and add a jframe with:

``` html
<jframe carousel id="demo"></jframe>

<!-- jframe snippet code -->
<script>
  (function(s,i,m,p,l,e,r){
    e=i.createElement(m),r=i.getElementsByTagName(m)[0],e.src=l+'j?i='+[].map.call(i.querySelectorAll(p),function(f){return f.id})+'',s[p]={f:[],ready:function(c){s[p].f.push(c)}},r.parentNode.insertBefore(e,r)
  })(window,document,'script','jframe','//jfra.me/v0/');
</script>
```

The [Quickstart](quickstart.html) page provides a basic text example using jframe.

## Embed Anywhere

At the core of jframe is a system that enables components to be delivered to any platform.

``` html
<jframe text id="hello"></jframe>
```
This code puts a simple text component on the page:

{% raw %}
<div class="demo">
  <jframe text id="hello"></jframe>
</div>
{% endraw %}

We have already created our very first jframe component! This looks pretty similar to just rendering some basic text, but jframe has done a lot of work under the hood. The data and the DOM are now linked, and everything is now **reactive**. How do we know? Just open up your browser's developer console and type `jframe('hello').text = 'Woohoo'`. You should see the rendered example above update accordingly.

Similarly, you can get values from a jframe at any time. Try typing `jframe('hello').text` into your developer console to see for yourself.

## Manage Content

jframe makes it incredibly easy to manage content remotely through the jframe dashboard. Once you have a component in place, you don't need to touch your code to change the content. Let's say you have a dropdown on your website:


{% raw %}
<br>
<jframe accordion id="dropdown"></jframe>
{% endraw %}

and you want to be able to change it easily. With jframe, it's as simple as editing in the dashboard. In this case, the dashboard would look something like

{% raw %}
<div id="dashboard-1" class="demo" style="padding: 0px; border-radius: 7px; overflow: hidden;">
  <form>
    <img src="https://res.cloudinary.com/jframe/image/upload/c_crop,g_north,h_50,w_705/v1481595881/mock_chrome-window.png"/>
    <div style="margin: 20px;">
      <input type="text" class="form-control" style="max-width: 90%;" v-model="header" :change="setDropdownText()" placeholder="Header">
      <textarea class="form-control" style="max-width: 90%; min-height: 110px;" v-model="body" :change="setDropdownText()" placeholder="Body"></textarea>
    </div>
  </form>
</div>
<script>
  var dashboard1 = new Vue({
    el: '#dashboard-1',
    data: { header: '', body: '' },
    methods: {
      setDropdownText: function() {
        if (!window.jframe) return
        jframe("dropdown").panels[0].header = dashboard1.header || 'Add a header'
        jframe("dropdown").panels[0].body = dashboard1.body || 'Add a body'
      }
    }
  })
</script>
{% endraw %}

Try editing the content with the form. You should see it change in the dropdown above the form. This is what it's like editing in the dashboard: **updated content is automatically reflected on your site**.

<!-- This example demonstrates that we can bind data to not only text and attributes, but also the **structure** of the DOM. Moreover, Vue also provides a powerful transition effect system that can automatically apply [transition effects](transitions.html) when elements are inserted/updated/removed by Vue. -->

<!-- ## Single API Call -->

<!-- ## Composing with Components -->

<!-- ## Speed vs CDN -->

<!-- ## Ready for More? -->

{% raw %}
<script>
  // jframe snippet code
  (function(s,i,m,p,l,e,r){
    e=i.createElement(m),r=i.getElementsByTagName(m)[0],e.src=l+'j?i='+[].map.call(i.querySelectorAll(p),function(f){return f.id})+'',s[p]={f:[],ready:function(c){s[p].f.push(c)}},r.parentNode.insertBefore(e,r)
  })(window,document,'script','jframe','//jfra.me/v0/');

  jframe.ready(function() {
    if (!dashboard1 || !jframe("dropdown").panels) return
    dashboard1.header = jframe("dropdown").panels[0].header
    dashboard1.body = jframe("dropdown").panels[0].body
  })
</script>
{% endraw %}
