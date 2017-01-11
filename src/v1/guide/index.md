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

<p class="tip">The official guide assumes basic knowledge of HTML. If you are totally new to web development, you may want to try getting a simple web page working first.  Once you have a web page, you're ready to use jframe.</p>

The easiest way to try out jframe is using the [jframe carousel example](https://jsfiddle.net/jframe/jqhv3e1h/). Feel free to open it in another tab and see what it takes to get a jframe working. Or, you can simply create an `.html` file and add a jframe with:

``` html
<jframe carousel id="demo"></jframe>

<!-- jframe snippet code -->
<script>
  (function(s,i,m,p,l,e,r){
  s[p]=s[p]||{f:[],ready:function(c){s[p].f.push(c)}},e=i.createElement(m),
  e.async=1,r=i.getElementsByTagName(m)[0],e.src=l+p+'.js',r.parentNode.insertBefore(e,r);
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

We have just created our very first jframe component! This looks pretty similar to just rendering some basic text, but jframe has done a lot of work under the hood. The text `Hello World!` is not hard-coded. Instead it's coming from the jframe, and that means it can be edited without touching the code on the page. This is done with an easy-to-use online dashboard.

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
        jframe.ready(function() {
          jframe("dropdown").panels[0].header = dashboard1.header || 'Add a header'
          jframe("dropdown").panels[0].body = dashboard1.body || 'Add a body'
        })
      }
    }
  })
</script>
{% endraw %}

Try editing the content with the form. You should see it change in the dropdown above the form. This is what it's like editing in the dashboard: **updated content is automatically reflected on your site**.

The dashboard makes jframe excellent for teams that have non-technical members and for advanced developers who want to focus on other parts of the codebase. It also means you can handle edits from your phone while sitting next to a pool, which is a nice side effect.

## Adapt on the Fly

jframe does more than just deliver content. It actually links data from components with the DOM, meaning everything is **reactive**. How do we know? Just open up your browser's developer console and type `jframe('hello').text = 'The text has changed'`. You should see the rendered `Hello World!` example above update accordingly.

Similarly, you can get values from a jframe at any time. Try typing `jframe('hello').text` into your developer console to see for yourself.

<!-- ## The jframe library

jframe is designed to cover all of the basics needed for a website: from navigation to dropdown menus, carousels, footers, and loading screens. We work with the open source community to find what developers want and then to build components for those needs.

You can browse the library [here](), and if you have suggestions for components you can do so [here](). -->

## Load Fast

Speed is one of the most important factors on the web, so jframe is focused on it. jframe does a lot behind the scenes to keep your page moving quickly.

Regardless of how many components you put on a page, jframe makes just one API call to get everything it needs. That means less time spent waiting for separate stylesheets or templates to download.  With jframe, everything comes down the wire together.

Components are cached on the server side, which means they get delivered instantly, without requiring any database lookups.

<!-- With jframe's geographically distributed network of servers, your users will probably see faster speed -->
<!-- When using images with jframe, you can choose to have them automatically sized according to the user's screen size. This makes components especially fast on mobile, and also improves performance for desktop too. -->

<!-- ## Speed vs CDN -->

## Component Library

The jframe component library is organized into sections based on the type of component:

- [Basic Components](/v1/guide/basics.html) - the basic building blocks of content, like text and images.
- [Form Components](/v1/guide/form.html) - parts used to build forms, like inputs and check boxes.
- [Bootstrap Components](/v1/guide/bootstrap.html) - components from the Bootstrap framework.
<!-- - [Other Components](/v1/guide/other.html) - components that don't easily fit into other categories. -->

## Ready for More?

Get started creating your own components!

<div id="downloads">
  <a class="button" href="https://jframe.io/auth/signup">Sign up</a><span class="light info">Once logged in, you can create your own components</span>
</div>

{% raw %}
<!-- jframe snippet code -->
<script>
  (function(s,i,m,p,l,e,r){
  s[p]=s[p]||{f:[],ready:function(c){s[p].f.push(c)}},e=i.createElement(m),
  e.async=1,r=i.getElementsByTagName(m)[0],e.src=l+p+'.js',r.parentNode.insertBefore(e,r);
  })(window,document,'script','jframe','//jfra.me/v0/');

  jframe.ready(function() {
    if (!dashboard1 || !jframe("dropdown").panels) return
    dashboard1.header = jframe("dropdown").panels[0].header
    dashboard1.body = jframe("dropdown").panels[0].body
  })
</script>
{% endraw %}
