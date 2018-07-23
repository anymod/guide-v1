---
title: Announcing Anymod v2 🎉
type: changelog
order: 600
published: false
---

<p class="tip">To start using **v2**, [add the new snippet](#Adding-v2-to-your-page) to your page.</p>

We've updated Anymod to dramatically improve speed & flexibility.

Our primary goals for **v2** were:
1. **Improve speed** - pages with Anymod now load [3-5x] faster
2. **Make mod development more flexible** - now you can build mods with any web tools you want

We're really happy with the end result, and we think you'll enjoy using Anymod even more with **v2**.

## Mods load [3-5x] faster

We've completely reworked how mods are delivered for **v2**, and the end result is a much faster load time.

With **v1**, mods are delivered with a "standard" approach that involves waiting for the DOM to load, then scanning the DOM and sending an AJAX request for data, then rendering mods once that data is received.

With **v2**, the page sends a request for cached data immediately, before the DOM is fully loaded. Then mods are rendered as soon as the data is received and the DOM is ready. Mods are also delivered as a JS file instead of through an AJAX request, which eliminates multiple round trip DNS and OPTIONS requests, saving even more time.

The end result is dramatic: mod load times have dropped from [600ms] on average with **v1** to [120ms] with **v2**.

## Use any JS framework (or none)

### Removed dependency on Vue

For **v2**, we've removed the dependency on Vue.js. Now you can use plain JavaScript or any framework you want to build mods (including Vue!).

This also means the underlying Anymod script is smaller & faster to load, giving you the choice to add frameworks like Vue, React, Angular, jQuery, and more when you need them.

### HTML pre-compilation with [handlebars]

Now you can add content directly to your mod HTML by using [handlebars] syntax, so you don't need to rely on a framework to get editable content in your HTML.

```html
<!-- Old syntax (based on Vue.js) -->
<div v-html="message"></div>

<!-- New syntax (handlebars) -->
{{ message }}
```

[See more examples](#Examples)

We'll be introducing options for building mods with JSX & TypeScript soon too, in order to better support traditional syntax for React & Angular mods.

## Adding v2 to your page

To upgrade a web page from **v1** to **v2**, remove the old script tag from the `<body>`, and add the new snippet in the `<head>`.

### Remove old script tag

Remove the **v1** tag you placed at the bottom of the page, before the closing `</body>` tag:

```html
<!-- Placed before closing </body> tag -->
<script project="ABCDEF" src="https://cdn.anymod.com/v1"></script>
```

### Add new script snippet

To use **v2**, add the following snippet to the `<head>` of the page.

<p class="tip">Be sure to replace `ABCDEF` with your project ID.</p>

```html
<!-- Place inside of <head> tag -->
<script>
  (function (m,o,d,u,l,a,r,i,t,y) {
    u[m]={Project:o};t=l.getElementsByTagName(a)[0];r=u.location;
    y=encodeURIComponent(btoa(r.host));i=encodeURIComponent(btoa(r.pathname));
    r=[d+'/page/'+o+'/'+i+'/'+y+'?t='+Date.now(),d];r.map(function(z){
    i=l.createElement(a);i.defer=1;i.src=z;t.parentNode.insertBefore(i,t);});
  })('Anymod','ABCDEF','https://cdn.anymod.com/v2',window,document,'script');
</script>
```

This new approach allows for significant speed increases because it doesn't wait for the DOM to load before requesting mod data.

As a nice bonus, the script loaded for **v2** weighs in at [19kB], roughly half the size of the **v1** script (42kB).

## Updated functionality

### Anymod.Event

`Anymod.Event` has been reimplemented using [Eev](https://github.com/chrisdavies/eev), a tiny (500 byte) library for events.
- Old syntax (deprecated): `Anymod.Event.$on`, `Anymod.Event.$emit`, `Anymod.Event.$off`
- New syntax ($ removed): `Anymod.Event.on`, `Anymod.Event.emit`, `Anymod.Event.off`

### Anymod() syntax

In **v1**, calling `Anymod('abcde')` returns the Vue instance for mod `abcde`.

In **v2**, calling `Anymod('abcde')` returns an object containing data for mod `abcde`. 

Unlike v1, v2 is no longer reactive by default.  For example, calling `Anymod('abcde').myField = 'foo'` no longer updates the `myField` value for the mod.  This was a feature of Vue.js, so you could re-enable this type of reactivity if needed by using a framework like Vue, React, or Angular.

## Legacy functionality

Vue.js and Axios have been factored out of **v2** and are no longer included by default.

### Anymod.Vue

In **v1**, `Anymod.Vue` contained the `Vue` constructor for [Vue.js](https://vuejs.org/) 2.1.4. This is no longer defined in **v2**, as the dependency on Vue.js has been removed.

To include Vue in a mod with **v2**, add the JS file URL to the mod's JS sources, or choose a Vue version from the dropdown list provided for the mod's JS sources.

### Anymod.axios

In **v1**, `Anymod.axios` contained the `axios` constructor for [Axios](https://github.com/axios/axios) 0.15.3. This is no longer defined in **v2**, as the dependency on Axios has been removed.

To include Axios in a mod with **v2**, add the JS file URL to the mod's JS sources, or choose an Axios version from the dropdown list provided for the mod's JS sources.

### Re-adding legacy functionality

As described above, new mods do not have access to `Anymod.Vue` or `Anymod.axios` by default.  If you require these, consider including the latest versions [Vue.js](https://vuejs.org/) and [Axios](https://github.com/axios/axios) separately.  

Alternatively, you can add the following URL to a mod's JS sources to get the legacy versions:

`https://cdn.anymod.com/anymod.legacy.vue-axios.js`

### Component namespace

Previously, the `Anymod` object was also namespaced to `Component`.  For example, calling `Anymod.render()` was equivalent to `Component.render()`.  This `Component` namespace has been removed in **v2**.

## Examples

Given the following fields, the below examples show several ways to add content.

| Field name | Type | Value |
|:-----------|:-----|:------|
| message | Simple text | Hello, World! |
| myHtml  | Rich text (HTML) | &lt;p&gt;I'm a P tag&lt;/p&gt; |
| imgSrc  | Image | https://via.placeholder.com/90x90 |
| myLink  | Link (URL) | https://example.com |
| myColor | Color | #409CDC |

### Plain HTML (no JS framework)

You can use [handlebars] syntax to add content without needing a JS framework.

Adding the following to a mod's HTML:

```html
<!-- Simple text -->
{{ message }}

<!-- Rich text (HTML) -->
{{ myHtml }}

<!-- Image -->
<img src="{{ imgSrc }}">

<!-- Link -->
<a href="{{ myLink }}">My link</a>

<!-- Color -->
<span style="background: {{ myColor }}">My color</span>
```

would yield the following output:

```html
<!-- Simple text -->
Hello, World!

<!-- Rich text (HTML) -->
<p>I'm a P tag</p>

<!-- Image -->
<img src="https://via.placeholder.com/90x90">

<!-- Link -->
<a href="https://example.com">My link</a>

<!-- Color -->
<span style="background: #409CDC">My color</span>
```

### Vue.js

Field values are available in a mod's JS panel through the `mod.data` object, so you could add the above fields with Vue.js like so:

```js
// In the mod's JavaScript panel (be sure to include the Vue.js script URL)
new Vue({
  el: mod.el,
  data: mod.data
})
```

```html
<!-- In the mod's HTML panel -->

<!-- Simple text -->
{{ message }}

<!-- Rich text (HTML) -->
<div v-html="myHtml"></div>

<!-- Image -->
<img :src="imgSrc">

<!-- Link -->
<a :href="myLink">My link</a>

<!-- Color -->
<span :style="{ background: myColor }">My color</span>
```

<!-- ### React

Coming soon -->