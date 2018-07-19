---
title: Announcing Anymod v2 🎉
type: changelog
order: 600
published: false
---

## Faster & more flexible

Our primary goals for **v2** were:
1. Improve page load speed&nbsp;&nbsp;✔️
2. Make mod development more flexible&nbsp;&nbsp;✔️

### Mods load [3-5x] faster

We've completely reworked how mods are delivered for v2. The end result is a much faster load time for mods.

With **v1**, we used a typical approach to loading content that involved waiting for the DOM to load, then scanning the DOM and sending an AJAX request for data, then rendering mods once that data was received.

With **v2**, we request cached data immediately, before the DOM is fully loaded. Then we render mods as soon as the data is received and the DOM is ready. We also deliver mod data as a JS file instead of through an AJAX request, which eliminates some round trip DNS and OPTIONS requests, saving even more time.

### Use any framework (or none)

We want to allow mod development in any web language or framework, and **v2** is a major step toward that goal.

For **v1**, mods relied heavily on Vue.js to provide a lot of the underlying functionality.  That was a great way to get started, but it limited mods to using Vue.js syntax.

For **v2**, we've removed the dependency on Vue.js, and now any framework can be used to build mods (including Vue!). This also means the underlying Anymod script is smaller & faster to load, and you can add frameworks like Vue or React when you need them.

We'll be introducing options for building mods with JSX & TypeScript soon too, in order to better support traditional syntax for React & Angular mods.

## Snippet vs script

Previously in **v1**, you placed a simple script tag at the bottom of the page, before the closing `</body>` tag:

```html
<!-- Placed before closing </body> tag -->
<script project="ABCDEF" src="https://cdn.anymod.com/v1"></script>
```

To use **v2**, you should add a snippet to the `<head>` of the page instead:

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

<p class="tip">To upgrade a page from **v1** to **v2**, delete the old script tag in the `<body>`, and add the new snippet in the `<head>`.  Be sure to replace `ABCDEF` with your project ID.</p>

## Updated functionality

### Anymod.Event

`Anymod.Event` has been reimplemented using [Eev](https://github.com/chrisdavies/eev), a tiny (500 byte) library for events.
- Old syntax (deprecated): `Anymod.Event.$on`, `Anymod.Event.$emit`, `Anymod.Event.$off`
- New syntax ($ removed): `Anymod.Event.on`, `Anymod.Event.emit`, `Anymod.Event.off`

### Anymod() syntax

In **v1**, calling `Anymod('abcde')` returns the Vue instance for mod `abcde`.

In **v2**, calling `Anymod('abcde')` returns an object containing data for mod `abcde`. 

Unlike v1, v2 is no longer reactive by default.  For example, calling `Anymod('abcde').myField = 'foo'` no longer updates the `myField` value for the mod.  This was a feature of Vue, so you could re-enable this type of reactivity if needed by using a framework like Vue, React, or Angular.

## Legacy functionality

### Anymod.Vue

### Anymod.axios

### Re-adding legacy functionality

As described above, new mods do not have the legacy features `Anymod.Vue` and `Anymod.axios` by default.  If you require these, consider including the latest versions `Vue` and `axios` separately.  Alternatively, you can add the following to a mod's included JS files to get the legacy versions:

`https://cdn.anymod.com/anymod.legacy.vue-axios.js`

### Component namespace

Previously, the `Anymod` object was also namespaced to `Component`.  For example, calling `Anymod.render()` was equivalent to `Component.render()`.  This `Component` namespace has been removed in v2.

## Examples

### Plain

### Vue

### React