---
title: About
type: guide
order: 1
published: true
---

## What is Anymod?

<h4 style="font-size: 20px;">Building blocks that will make your web development simpler.</h4>

Anymod lets you add content and functionality to your website and make live changes with an online dashboard. You can edit your content and the underlying code for any section on your site without having to change or redeploy your website's code. This workflow is simple & robust, and it makes managing your website easier.

Anymod also has a library of ready-to-use website sections that you can copy into your project with one click and customize to your needs. If you want even more customization, you can build sections entirely from scratch and still manage them online.

<h4 style="font-size: 20px;">Tools for technical and non-technical users.</h4>

For non-technical users, Anymod has a simple WYSIWYG (what-you-see-is-what-you-get) editor for making changes to text, images, colors, order, and more. No coding skills are needed to use the content editor, and a live preview gives instant feedback.

For technical users, Anymod is simple to set up and has a well-documented API for building and customizing section HTML, CSS, and JavaScript, as well as for binding data, triggering events, rendering content, and more.

<h4 style="font-size: 20px;">Works with every platform & technology.</h4>

Anymod was built with other libraries and existing projects in mind, from traditional CMS systems like WordPress to modern frontend libraries like React. That means Anymod is easy to set up on any platform and is also perfectly capable of powering sophisticated Single-Page Applications.

If you are an experienced developer and want to know how Anymod works with other frontend libraries & frameworks, you can jump to the following:
[AngularJS 1](/v1/usage/angular-1.html) - [Angular 2+](/v1/usage/angular-2.html) - [React](/v1/usage/react.html) - [Vue.js](/v1/usage/vue.html) - [Bootstrap](/v1/usage/bootstrap.html) - [JSON (data only)](/v1/usage/data.html)

## Getting Started

<p class="tip">The official guide assumes basic knowledge of HTML. If you are totally new to web development, you may want to try getting a simple web page working first.  Once you have a web page, you're ready to use Anymod.</p>

The easiest way to try Anymod is by example. If you want to try a section in your own project, you can simply create an `.html` file and paste the following code:

``` html
<section id=anymod-dkaal></section>

<!-- Anymod script -->
<script project="component-io-team" src="https://cdn.anymod.com/v1"></script>
```

This will give you the functional carousel section below. It's as easy as copy & paste to get a section working on your web page.

We have just created our very first section!

{% raw %}
<div class="demo">
  <section id=anymod-dkaal></section>
</div>
{% endraw %}


You can also open [this link](https://jsfiddle.net/component/jqhv3e1h/) to see the same example in a jsfiddle.

The [Quickstart](quickstart.html) page provides a basic text example using Anymod.

## Embed Anywhere

At the core of Anymod is a system that enables sections to be delivered to any platform.

``` html
<section id=anymod-ranno></section>
```
This code puts a simple text section on the page:

{% raw %}
<div class="demo">
  <section id=anymod-ranno></section>
</div>
{% endraw %}

This looks pretty similar to just rendering some basic text, but Anymod has done a lot of work under the hood. The text `Hello World!` is not hard-coded. Instead it's coming from the section, and that means it can be edited without touching the code on the page. This is done with an easy-to-use online dashboard.

## Manage Content

Anymod makes it incredibly easy to manage content remotely through the dashboard. Once you have a section in place, you don't need to touch your code to change the content. Let's say you have a dropdown on your website:


{% raw %}
<br>
<section id=anymod-nkddb></section>
{% endraw %}

and you want to be able to change its content easily. With Anymod, it's as simple as editing in the dashboard. In this case, the dashboard would look something like

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
        if (!window.Anymod) return
        Anymod.ready(function() {
          Anymod("nkddb").items[0].title = dashboard1.title || ''
          Anymod("nkddb").items[0].body = dashboard1.body || ''
        })
      }
    }
  })
</script>
{% endraw %}

Try editing the content with the form, and notice how it changes the text in the dropdown above the form. This is what it's like editing in the dashboard: **updated content is automatically reflected on your site**.

The dashboard makes Anymod excellent for teams that have non-technical members and for advanced developers who want to focus on other parts of the codebase. It also means you can handle edits from your phone while sitting next to a pool, which is a nice side effect.

## Adapt on the Fly

Anymod does more than just deliver content. It actually links data from sections with the DOM, meaning everything is **reactive**. How do we know? Just try it with this next section.

``` html
<section id=anymod-orllm></section>
```
{% raw %}
<div class="demo">
  <section id=anymod-orllm></section>
</div>
{% endraw %}

Open up your browser's developer console and type `Anymod('orllm').text = 'Foobar'`. You should see the rendered `Change me in the console` example here update accordingly.

Similarly, you can get values from a section at any time. Try typing `Anymod('orllm').text` into your developer console to see for yourself.

<!-- ## The Anymod library

Anymod is designed to cover all of the basics needed for a website: from navigation to dropdown menus, carousels, footers, and loading screens. We work with the open source community to find what developers want and then to build sections for those needs.

You can browse the library [here](), and if you have suggestions for sections you can do so [here](). -->

## Load Fast

Speed is one of the most important factors on the web, so Anymod is focused on it. Anymod does a lot behind the scenes to keep your page moving quickly.

Regardless of how many sections you put on a page, Anymod makes just one API call to get everything it needs. That means less time spent waiting for separate stylesheets or templates to download.  With Anymod, everything comes down the wire together.

Sections are cached on the server side, which means they get delivered instantly, without requiring any database lookups.

<!-- With Anymod's geographically distributed network of servers, your users will probably see faster speed -->
<!-- When using images with Anymod, you can choose to have them automatically sized according to the user's screen size. This makes sections especially fast on mobile, and also improves performance for desktop too. -->

<!-- ## Speed vs CDN -->

## Ready for More?

Get started creating your own sections!

<div id="downloads">
  <a class="button" href="https://anymod.com">Sign up</a><span class="light info">Once logged in, you can create your own sections</span>
</div>

Or learn more about using Anymod:

- [General usage](/v1/usage/index.html)
- [API](/v1/api/index.html)
- [Examples](/v1/examples/index.html)

<!-- End scripts: -->
{% raw %}
<script src="https://cdnjs.cloudflare.com/ajax/libs/tinymce/4.5.5/tinymce.min.js"></script>
<!-- Anymod script -->
<script project="component-io-team" src="https://cdn.anymod.com/v1"></script>
<script>
  Anymod.ready(function() {
    if (!dashboard1 || !Anymod("nkddb").items) return
    dashboard1.title = Anymod("nkddb").items[0].title
    dashboard1.body = Anymod("nkddb").items[0].body
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
