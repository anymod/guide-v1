---
title: General usage
type: usage
order: 100
published: true
---

<p class="tip">To use mods in your project, paste the `<div>` tag for your mod and the `<script>` tag for your project.</p>

## Installing a mod

When you add a mod to your project, you are directed to a page with the install code for the mod you've just added. It will look something like this:

```html
<div id=anymod-mldrn></div>

<!-- Paste script once per page at the bottom -->
<script project="example" src="https://cdn.anymod.com/v1"></script>
```

To make your new mod show on the page, paste this code into your HTML where you would like the mod to show. For example, we've pasted the same code here, and it delivers the mod:

<br>
<div id=anymod-mldrn></div>

If you have multiple mods on your page, you don't need to paste the `<script>` tag multiple times.  Include it only once at the bottom of your HTML page, just before the closing `</body>` tag.

```html
<body>
  <div id=anymod-mldrn></div>
  <div id=anymod-amkmr></div>

  ...

  <!-- Paste script once per page at the bottom -->
  <script project="example" src="https://cdn.anymod.com/v1"></script>
</body>
```

The above code delivers both mods:

<br>
<div id=anymod-mldrn></div>
<div id=anymod-amkmr></div>

You can add as many mods as you want to a page and you only need to add the `<script>` tag once. It's also not a problem to add the same mod multiple times.

<p class="tip">Add as many mods as you want to a page. All mods are delivered together in a single request, so delivery of 10 mods is just as fast as delivery of 1 mod.</p>

## Editing a mod

You can use the dashboard to edit both the content of a mod and its code.

- __Content__ is the text, images, and attributes that show for a mod, like a title or the text of a button. You do not need to know how to code to edit the content.

- __Code__ is the HTML, CSS, and JavaScript that give a mod its overall look and behavior.

### Edit content

To edit content, log into your project at https://anymod.com and use the search bar or browse to find the mod you want to edit. Click on it, and you will see a screen like the following:

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1517367744/Preview_ikl6l2.png"/>

Clicking the "Content" tab allows you to make changes to the mod's content:

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1517367743/Content_h1faaw.png"/>

Once you have made changes, click "Publish" to make the changes live.

### Edit code

To edit code, log into your project at https://anymod.com and use the search bar or browse to find the mod you want to edit. Click on it, and you will see a screen like the following:

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1517367744/Preview_ikl6l2.png"/>

Clicking the "Code" tab allows you to make changes to the mod's code (HTML, CSS, and JavaScript):

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1517367744/Code_ugraby.png"/>

The page is divided into four adjustable parts:

- Top-left is for __HTML__
- Top-center is for __CSS__
- Top-right is for __JavaScript__
- Bottom is a __Live preview__

Each time you make edits, you can click the `Save` button or press `ctrl+s` (or `command+s` on mac) to save your changes. Changes you make in the dashboard are live and are immediately used wherever the mod is delivered.

## Mod attributes

A mod has an `id` attribute and will also keep any other attributes (such as `class`, `style`, `data-toggle`, etc) you add to it.

### The id attribute

```html
<div id=anymod-mldrn></div>
```

The id attribute identifies the mod so that it can be delivered to the page. Following HTML convention, you can use this attribute with or without quotes (in this example, `id=anymod-mldrn` or `id="anymod-mldrn"`), as both will work.

Each mod has a unique id.

### Using anymod-blank

You may also use `id=anymod-blank` if you have added a __URL rule__ in your dashboard with mods in it. 

```html
<div id=anymod-blank></div>
```

If you use `anymod-blank`, mods will be delivered according to the order in your __URL rule__ in the dashboard.


### Other mod attributes

Any attributes you place on a mod (such as `class`, `style`, `data-toggle`, etc) will be kept during the render process.

For example, if you add `style="color:green;"` to a mod like so:

```html
<div id=anymod-mldrn style="color:green;"></div>
```

That style will be kept and applied to the mod.

<br>
<div id=anymod-mldrn style="color:green;"></div>

## Script attributes

Each project will have a script that looks something like this:

```html
<script project="876MN8" src="https://cdn.anymod.com/v1"></script>
```

### The project attribute (required)

```html
<script project="876MN8" ...></script>
```

The `project` attribute lets the script know which project to request mods for. This attribute will be the same for all mods in a given project. However, if you have multiple projects, each one will use a different value.

Unlike the key and load attributes above, the project attribute sometimes starts with a number, so it must always be used inside of quotation marks (`project="876MN8"` __NOT__ `project=876MN8`).

### The src attribute (required)

The `src` attribute should be set to `https://cdn.anymod.com/v1`.

```html
<script ... src="https://cdn.anymod.com/v1"></script>
```

<style>
  [amkmr] h2 { border:none !important; }
  img.standout {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
       -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        -ms-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
</style>

<!-- Paste script once per page at the bottom -->
<script project="example" src="https://cdn.anymod.com/v1"></script>
