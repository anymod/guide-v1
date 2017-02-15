---
title: Introduction
type: guide
order: 2
---

## What is Component IO?
<component content id="wjpkw"></component>
<style>#wjpkw{display:block !important;}</style>

<!-- Component IO makes it easy to use all kinds of web components to build websites and applications.  Unlike platforms like Wordpress, Component IO **works with every web technology** (including Wordpress), and unlike frameworks like Bootstrap, Component IO **does not require any external styling or javascript**.

The goal of the Component IO platform is to provide components that are **simple to use** with other libraries or existing projects.  That means Component IO is simple to set up, and is also perfectly capable of powering sophisticated Single-Page Applications. -->
<!--- when used in combination with [modern tooling](single-file-components.html) and [supporting libraries](https://github.com/vuejs/awesome-vue#libraries--plugins). -->

<!-- If you are an experienced frontend developer and want to know how Component IO compares to other libraries/frameworks, check out the [Comparison with Other Frameworks](comparison.html). -->

## Getting Started

<p class="tip">The official guide assumes basic knowledge of HTML. If you are totally new to web development, you may want to try getting a simple web page working first.  Once you have a web page, you're ready to use Component IO.</p>
<!-- TODO add a link to a tutorial for getting a basic Component IO template up and running -->

The easiest way to try Component IO is to use our carousel web component example. Open [this link](https://jsfiddle.net/component/jqhv3e1h/) to take a look under the hood of Component IO and see how easy it is to get a component working on your web page.

If you want to try this component in your own project, you can simply create an `.html` file and paste the following code:

``` html
<component carousel id="demo"></component>

<!-- Component IO script -->
<script src="https://cdn.component.io/v1" project="PROJECT-ID"></script>
```

The [Quickstart](quickstart.html) page provides a basic text example using Component IO.

## Embed Anywhere

At the core of Component IO is a system that enables components to be delivered to any platform.

``` html
<component text id="hello"></component>
```
This code puts a simple text component on the page:

{% raw %}
<div class="demo">
  <component text id="hello"></component>
</div>
{% endraw %}

We have just created our very first component! This looks pretty similar to just rendering some basic text, but Component IO has done a lot of work under the hood. The text `Hello World!` is not hard-coded. Instead it's coming from the component, and that means it can be edited without touching the code on the page. This is done with an easy-to-use online dashboard.

## Manage Content

Component IO makes it incredibly easy to manage content remotely through the dashboard. Once you have a component in place, you don't need to touch your code to change the content. Let's say you have a dropdown on your website:


{% raw %}
<br>
<component accordion id="dropdown"></component>
{% endraw %}

and you want to be able to change its content easily. With Component IO, it's as simple as editing in the dashboard. In this case, the dashboard would look something like

{% raw %}
<div id="dashboard-1" class="demo" style="padding: 0px; border-radius: 7px; overflow: hidden;">
  <form>
    <img src="https://res.cloudinary.com/component/image/upload/c_crop,g_north,h_50,w_705/v1481595881/mock_chrome-window.png"/>
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
        if (!window.Component) return
        Component.ready(function() {
          Component("dropdown").panels[0].header = dashboard1.header || 'Add a header'
          Component("dropdown").panels[0].body = dashboard1.body || 'Add a body'
        })
      }
    }
  })
</script>
{% endraw %}

Try editing the content with the form. You should see it change in the dropdown above the form. This is what it's like editing in the dashboard: **updated content is automatically reflected on your site**.

The dashboard makes Component IO excellent for teams that have non-technical members and for advanced developers who want to focus on other parts of the codebase. It also means you can handle edits from your phone while sitting next to a pool, which is a nice side effect.

## Adapt on the Fly

Component IO does more than just deliver content. It actually links data from components with the DOM, meaning everything is **reactive**. How do we know? Just open up your browser's developer console and type `Component('hello').text = 'The text has changed'`. You should see the rendered `Hello World!` example above update accordingly.

Similarly, you can get values from a component at any time. Try typing `Component('hello').text` into your developer console to see for yourself.

<!-- ## The Component IO library

Component IO is designed to cover all of the basics needed for a website: from navigation to dropdown menus, carousels, footers, and loading screens. We work with the open source community to find what developers want and then to build components for those needs.

You can browse the library [here](), and if you have suggestions for components you can do so [here](). -->

## Load Fast

Speed is one of the most important factors on the web, so Component IO is focused on it. Component IO does a lot behind the scenes to keep your page moving quickly.

Regardless of how many components you put on a page, Component IO makes just one API call to get everything it needs. That means less time spent waiting for separate stylesheets or templates to download.  With Component IO, everything comes down the wire together.

Components are cached on the server side, which means they get delivered instantly, without requiring any database lookups.

<!-- With Component IO's geographically distributed network of servers, your users will probably see faster speed -->
<!-- When using images with Component IO, you can choose to have them automatically sized according to the user's screen size. This makes components especially fast on mobile, and also improves performance for desktop too. -->

<!-- ## Speed vs CDN -->

## Component Library

The Component IO library is organized into sections based on the type of component:

- [Basic Components](/v1/guide/basics.html) - the basic building blocks of content, like text and images.
- [Form Components](/v1/guide/form.html) - parts used to build forms, like inputs and check boxes.
- [Bootstrap Components](/v1/guide/bootstrap.html) - components from the Bootstrap framework.
<!-- - [Other Components](/v1/guide/other.html) - components that don't easily fit into other categories. -->

## Ready for More?

Get started creating your own components!

<div id="downloads">
  <a class="button" href="https://component.io/auth">Sign up</a><span class="light info">Once logged in, you can create your own components</span>
</div>

{% raw %}
<!-- Component IO script -->
<script src="https://cdn.component.io/v1" project="component-io-guide"></script>
<script>
  Component.ready(function() {
    if (!dashboard1 || !Component("dropdown").panels) return
    dashboard1.header = Component("dropdown").panels[0].header
    dashboard1.body = Component("dropdown").panels[0].body
  })
</script>
{% endraw %}
