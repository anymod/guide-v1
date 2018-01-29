---
title: General usage
type: usage
order: 100
published: true
---

<p class="tip">To use mods in your project, copy & paste the install code.</p>

## Installing a mod

When you add a mod to your project, you are directed to a page with the install code for the mod you've just added. It will look something like this:

```html
<div id=anymod-ekaob data-load=b></div>

<!-- Paste script once per page at the bottom -->
<script project="cio-library" src="https://cdn.anymod.com/v1"></script>
```

To make your new mod show on the page, paste this code into your HTML where you would like the mod to show. For example, we've pasted the same code here, and it delivers the mod:

<br>
<div id=anymod-ekaob data-load=b></div>

If you have multiple mods on your page, you don't need to paste the `<script>` tag multiple times.  Include it only once at the bottom of your HTML page, just before the closing `</body>` tag.

```html
<body>
  <div id=anymod-ekaob data-load=b></div>
  <div id=anymod-aldlk data-load=md></div>

  ...

  <!-- Paste script once per page at the bottom -->
  <script project="cio-library" src="https://cdn.anymod.com/v1"></script>
</body>
```

The above code delivers both mods:

<br>
<div id=anymod-ekaob data-load=b></div>
<div id=anymod-aldlk data-load=md></div>

You can add as many mods as you want to a page and you only need to add the `<script>` tag once. It's also not a problem to add the same mod multiple times.

<p class="tip">Add as many mods as you want to a page. All mods are delivered together in a single request, so delivery of 10 mods is just as fast as delivery of 1 mod.</p>

## Editing a mod

You can use the dashboard to edit both the content of a mod and its code.

- __Content__ is the text, images, and attributes that show for a mod, like a title or the text of a button. You do not need to know how to code to edit the content.

- __Code__ is the HTML, CSS, and JavaScript that give a mod its overall look and behavior.

### Edit content

To edit content, log into your project at https://anymod.com and use the search bar or browse to find the mod you want to edit. Click on it, and you will see a screen like the following:

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1515005084/guide-content-example.png"/>

Clicking "Edit Content" allows you to make changes to the mod's content:

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1515005261/guide-content-example-2.png"/>

Once you have made changes, click "Publish" to make the changes live.

### Edit code

To edit content, log into your project at https://anymod.com and use the search bar or browse to find the mod you want to edit. Click on it, and you will see a screen like the following:

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1515005084/guide-content-example.png"/>

Clicking "Customize" allows you to make changes to the mod's code (HTML, CSS, and JavaScript):

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1515005441/guide-code-example-1.png"/>

The page is divided into four parts:

- Top-left is for __HTML__
- Top-center is for __CSS__
- Top-right is for __JavaScript__
- Bottom is a __Live preview__

Each time you make edits, you can click the `Save` button or press `ctrl+s` (or `command+s` on mac) to save your changes. Changes you make in the dashboard are live and are immediately used wherever the mod is delivered.

## Mod attributes

Looking again at the install code for a mod, we can see it has several attributes:

```html
<div id=anymod-ekaob data-load=b></div>

<!-- Paste script once per page at the bottom -->
<script project="cio-library" src="https://cdn.anymod.com/v1"></script>
```

### The id attribute

```html
<div id=anymod-ekaob ...></div>
```

The id attribute identifies the mod so that it can be delivered to the page. Following HTML convention, you can use this attribute with or without quotes (in this example, `id=anymod-ekaob` or `id="anymod-ekaob"`), as both will work.

You may also use `id=anymod-blank` if you have added a __URL rule__ in your dashboard with mods in it. If you use `anymod-blank`, mods will be delivered according to the order in your __URL rule__ in the dashboard.

Each mod has a unique key.

### The data-load attribute (optional)

```html
<div ... data-load=md-mi></div>
```

The `data-load` attribute determines which external stylesheets the script will load. These include:

|  |  |  |
|:- |:- |:-|
| __b__ | Bootstrap CSS v4 | <a href="https://v4-alpha.getbootstrap.com/" target=_blank><i class="fa fa-external-link"></i></a> |
| __md__ | Material Design CSS | <a href="https://material.io/components/web/" target=_blank><i class="fa fa-external-link"></i></a> |
| __fa__ | Font Awesome Icons | <a href="http://fontawesome.io/icons/" target=_blank><i class="fa fa-external-link"></i></a> |
| __mi__ | Material Design Icons | <a href="https://material.io/icons/" target=_blank><i class="fa fa-external-link"></i></a> |

For example, including `data-load=md-mi` with a mod will cause the script to load the Material Design CSS and Material Design Icons. Even if multiple mods include the same load attributes, those resources will only be loaded once.

Load attributes are populated automatically based on the dropdown settings in the CSS code editor in the dashboard, so if you use the dropdown to edit your external CSS, be sure to update your mod tag(s) accordingly.

### Other mod attributes

Any attributes you place on a mod (such as `class`, `style`, `data-toggle`, etc) will be kept during the render process.

For example, if you add `style="color:green;"` to a mod like so:

```html
<div id=anymod-ekaob style="color:green;"></div>
```

That style will be kept and applied to the mod.

<br>
<div id=anymod-ekaob style="color:green;"></div>

## Script attributes

### The project attribute (required)

```html
<script project="876MN8" ...></script>
```

The project attribute lets the script know which project to request mods for. This attribute will be the same for all mods in a given project. However, if you have multiple projects, each one will use a different value.

Unlike the key and load attributes above, the project attribute sometimes starts with a number, so it must always be used inside of quotation marks (`project="876MN8"` __NOT__ `project=876MN8`).

### The defaults attribute (optional)

By default, the Anymod script delivers Bootstrap CSS for styling mods. If you want to turn off this behavior, you can include `defaults="false"` on your script tag, like so:

```html
<script project="876MN8" defaults="false" src="https://cdn.anymod.com/v1"></script>
```

<style>
  [aldlk] h2 { border:none !important; }
  img.standout {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
       -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        -ms-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
</style>

<!-- Paste script once per page at the bottom -->
<script project="cio-library" src="https://cdn.anymod.com/v1"></script>
