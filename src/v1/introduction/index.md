---
title: About
type: guide
order: 1
published: true
---

## What is Component IO?

<h4 style="font-size: 20px;">Component IO is a component-based content management system.</h4>

The basic idea is simple: add components anywhere on your website, and then edit those components through an online dashboard. You can edit the content and the underlying code for any component without having to make changes to your website's code.

Component IO also has a library of ready-to-use website components that you can copy into your project and then customize to your needs.

<h4 style="font-size: 20px;">Component IO is for technical and non-technical users.</h4>

For non-technical users, Component IO has a simple WYSIWYG (what-you-see-is-what-you-get) editor for making changes to text, images, colors, order, and more. No coding skills are needed to use the content editor, and a live preview gives instant feedback.

For technical users, Component IO has a rich API for building and customizing component code as well as binding data, triggering events, rendering components, and more.

<h4 style="font-size: 20px;">Component IO works with every web platform & technology.</h4>

The goal of Component IO is to provide components that are simple to use with other libraries and existing projects, from traditional CMS systems like WordPress to modern frontend libraries like React. That means Component IO is simple to set up and is also perfectly capable of powering sophisticated Single-Page Applications.

If you are an experienced developer and want to know how Component IO works with other frontend libraries/frameworks, you can jump to the following:
[AngularJS 1](/v1/usage/angular-1.html) - [Angular 2](/v1/usage/angular-2.html) - [React](/v1/usage/react.html) - [Vue.js](/v1/usage/vue.html) - [Bootstrap](/v1/usage/bootstrap.html)

## Getting Started

<p class="tip">The official guide assumes basic knowledge of HTML. If you are totally new to web development, you may want to try getting a simple web page working first.  Once you have a web page, you're ready to use Component IO.</p>

The easiest way to try Component IO is by example. If you want to try a component in your own project, you can simply create an `.html` file and paste the following code:

``` html
<component key=dkaal></component>

<!-- Component IO script -->
<script project="component-io-team" src="https://cdn.component.io/v1"></script>
```

This will give you the functional carousel component below. It's as easy as copy & paste to get a component working on your web page.

We have just created our very first component!

{% raw %}
<div class="demo">
  <component key=dkaal></component>
</div>
{% endraw %}


You can also open [this link](https://jsfiddle.net/component/jqhv3e1h/) to see the same example in a jsfiddle.

The [Quickstart](quickstart.html) page provides a basic text example using Component IO.

## Embed Anywhere

At the core of Component IO is a system that enables components to be delivered to any platform.

``` html
<component key=ranno></component>
```
This code puts a simple text component on the page:

{% raw %}
<div class="demo">
  <component key=ranno></component>
</div>
{% endraw %}

This looks pretty similar to just rendering some basic text, but Component IO has done a lot of work under the hood. The text `Hello World!` is not hard-coded. Instead it's coming from the component, and that means it can be edited without touching the code on the page. This is done with an easy-to-use online dashboard.

## Manage Content

Component IO makes it incredibly easy to manage content remotely through the dashboard. Once you have a component in place, you don't need to touch your code to change the content. Let's say you have a dropdown on your website:


{% raw %}
<br>
<component key=nkddb></component>
{% endraw %}

and you want to be able to change its content easily. With Component IO, it's as simple as editing in the dashboard. In this case, the dashboard would look something like

{% raw %}
<div id="dashboard-1" class="demo" style="padding: 0px; border-radius: 7px; overflow: hidden;">
  <div class="card">
    <img src="https://res.cloudinary.com/component/image/upload/c_crop,g_north,h_200,w_1400,q_100/c_scale,w_600,e_sharpen:10,q_100/v1494633540/dashboard_demo_yukbyj.png"/>
    <div class="card-block" style="padding: 0.5rem">
      <input type="text" class="form-control" style="max-width: 95%; margin-bottom: 3px; color: black;" v-model="title" :change="setDropdownText()" placeholder="Header">
      <textarea id="mock-dashboard-textarea" class="form-control" style="max-width: 95%; min-height: 110px;" v-model="body" placeholder="Body"></textarea>
    </div>
  </div>
</div>
<script>
  var dashboard1 = new Vue({
    el: '#dashboard-1',
    data: { title: '', body: '' },
    methods: {
      setDropdownText: function() {
        if (!window.Component) return
        Component.ready(function() {
          Component("nkddb").items[0].title = dashboard1.title || ''
          Component("nkddb").items[0].body = dashboard1.body || ''
        })
      }
    }
  })
</script>
{% endraw %}

Try editing the content with the form. You should see it change in the dropdown above the form. This is what it's like editing in the dashboard: **updated content is automatically reflected on your site**.

The dashboard makes Component IO excellent for teams that have non-technical members and for advanced developers who want to focus on other parts of the codebase. It also means you can handle edits from your phone while sitting next to a pool, which is a nice side effect.

## Adapt on the Fly

Component IO does more than just deliver content. It actually links data from components with the DOM, meaning everything is **reactive**. How do we know? Just try it with this next component.

``` html
<component key=orllm></component>
```
{% raw %}
<div class="demo">
  <component key=orllm></component>
</div>
{% endraw %}

Open up your browser's developer console and type `Component('orllm').text = 'Foobar'`. You should see the rendered `Change me in the console` example here update accordingly.

Similarly, you can get values from a component at any time. Try typing `Component('orllm').text` into your developer console to see for yourself.

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

## Ready for More?

Get started creating your own components!

<div id="downloads">
  <a class="button" href="https://component.io">Sign up</a><span class="light info">Once logged in, you can create your own components</span>
</div>

Or learn more about using Component IO:

- [General usage](/v1/usage/index.html)
- [API](/v1/api/index.html)
- [Examples](/v1/examples/index.html)

<!-- End scripts: -->
{% raw %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.5.5/tinymce.min.js"></script>
<!-- Component IO script -->
<script project="component-io-team" src="https://cdn.component.io/v1"></script>
<script>
  Component.ready(function() {
    if (!dashboard1 || !Component("nkddb").items) return
    dashboard1.title = Component("nkddb").items[0].title
    dashboard1.body = Component("nkddb").items[0].body
    tinymce.init({
      selector: '#mock-dashboard-textarea',    
      min_height: 80,
      plugins: ['paste', 'code', 'hr', 'link'],
      menubar: false,
      toolbar: 'formatselect | bold italic | link hr code',
      statusbar: false,
      init_instance_callback: function (editor) {
        editor.on('change', function (e) {
          dashboard1.body = editor.getContent()
          dashboard1.setDropdownText()
        })
        editor.on('keyup', function (e) {
          dashboard1.body = editor.getContent()
          dashboard1.setDropdownText()
        })
      }
    })
  })
</script>
{% endraw %}

<style>
  .mce-tinymce { border-color: #f2f2f2 !important; }
  .mce-tinymce .mce-container { border-color: #cfd8dc !important; }
  textarea[id*='ui-tinymce-'] {
    display: none !important;
    opacity: 0 !important;
    visibility: hidden !important;
  }
  @media (max-width: 640px) {
    .mce-floatpanel {
      max-width: 100% !important;
      overflow-x: scroll;
    }
  }
</style>
