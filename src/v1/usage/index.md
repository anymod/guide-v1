---
title: General usage
type: usage
order: 100
published: true
---

<p class="tip">To use sections in your project, copy & paste the install code.</p>

## Installing a section

When you add a section to your project, you are directed to a page with the install code for the section you've just added. It will look something like this:

```html
<section id=anymod-ekaob data-load=b></section>

<!-- Paste script once per page at the bottom -->
<script project="cio-library" src="https://cdn.anymod.com/v1"></script>
```

To make your new section show on the page, paste this code into your HTML where you would like the section to show. For example, we've pasted the same code here, and it delivers the section:

<br>
<section id=anymod-ekaob data-load=b></section>

If you have multiple sections on your page, you don't need to paste the `<script>` tag multiple times.  Include it only once at the bottom of your HTML page, just before the closing `</body>` tag.

```html
<body>
  <section id=anymod-ekaob data-load=b></section>
  <section id=anymod-aldlk data-load=md></section>

  ...

  <!-- Paste script once per page at the bottom -->
  <script project="cio-library" src="https://cdn.anymod.com/v1"></script>
</body>
```

The above code delivers both sections:

<br>
<section id=anymod-ekaob data-load=b></section>
<section id=anymod-aldlk data-load=md></section>

You can add as many sections as you want to a page and you only need to add the `<script>` tag once. It's also not a problem to add the same section multiple times.

<p class="tip">Add as many sections as you want to a page. All sections are delivered together in a single request, so delivery of 10 sections is just as fast as delivery of 1 section.</p>

## Editing a section

You can use the dashboard to edit both the content of a section and its code.

- __Content__ is the text, images, and attributes that show for a section, like a title or the text of a button. You do not need to know how to code to edit the content.

- __Code__ is the HTML, CSS, and JavaScript that give a section its overall look and behavior.

### Edit content

To edit content, log into your project at https://anymod.com and use the search bar or browse to find the section you want to edit. Click on it, and you will see a screen like the following:

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1515005084/guide-content-example.png"/>

Clicking "Edit Content" allows you to make changes to the section's content:

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1515005261/guide-content-example-2.png"/>

Once you have made changes, click "Publish" to make the changes live.

### Edit code

To edit content, log into your project at https://anymod.com and use the search bar or browse to find the section you want to edit. Click on it, and you will see a screen like the following:

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1515005084/guide-content-example.png"/>

Clicking "Customize" allows you to make changes to the section's code (HTML, CSS, and JavaScript):

<img class="standout" src="https://res.cloudinary.com/component/image/upload/v1515005441/guide-code-example-1.png"/>

The page is divided into four parts:

- Top-left is for __HTML__
- Top-center is for __CSS__
- Top-right is for __JavaScript__
- Bottom is a __Live preview__

Each time you make edits, you can click the `Save` button or press `ctrl+s` (or `command+s` on mac) to save your changes. Changes you make in the dashboard are live and are immediately used wherever the section is delivered.

## Section attributes

Looking again at the install code for a section, we can see it has several attributes:

```html
<section id=anymod-ekaob data-load=b></section>

<!-- Paste script once per page at the bottom -->
<script project="cio-library" src="https://cdn.anymod.com/v1"></script>
```

### The id attribute

```html
<section id=anymod-ekaob ...></section>
```

The id attribute identifies the section so that it can be delivered to the page. Following HTML convention, you can use this attribute with or without quotes (in this example, `id=anymod-ekaob` or `id="anymod-ekaob"`), as both will work.

You may also use `id=anymod-blank` if you have added a __URL rule__ in your dashboard with sections in it. If you use `anymod-blank`, sections will be delivered according to the order in your __URL rule__ in the dashboard.

Each section has a unique key.

### The data-load attribute (optional)

```html
<section ... data-load=md-mi></section>
```

The `data-load` attribute determines which external stylesheets the script will load. These include:

|  |  |  |
|:- |:- |:-|
| __b__ | Bootstrap CSS v4 | <a href="https://v4-alpha.getbootstrap.com/" target=_blank><i class="fa fa-external-link"></i></a> |
| __md__ | Material Design CSS | <a href="https://material.io/components/web/" target=_blank><i class="fa fa-external-link"></i></a> |
| __fa__ | Font Awesome Icons | <a href="http://fontawesome.io/icons/" target=_blank><i class="fa fa-external-link"></i></a> |
| __mi__ | Material Design Icons | <a href="https://material.io/icons/" target=_blank><i class="fa fa-external-link"></i></a> |

For example, including `data-load=md-mi` with a section will cause the script to load the Material Design CSS and Material Design Icons. Even if multiple sections include the same load attributes, those resources will only be loaded once.

Load attributes are populated automatically based on the dropdown settings in the CSS code editor in the dashboard, so if you use the dropdown to edit your external CSS, be sure to update your section tag(s) accordingly.

### Other section attributes

Any attributes you place on a section (such as `class`, `style`, `data-toggle`, etc) will be kept during the render process.

For example, if you add `style="color:green;"` to a section like so:

```html
<section id=anymod-ekaob style="color:green;"></section>
```

That style will be kept and applied to the section.

<br>
<section id=anymod-ekaob style="color:green;"></section>

## Script attributes

### The project attribute (required)

```html
<script project="876MN8" ...></script>
```

The project attribute lets the script know which project to request sections for. This attribute will be the same for all sections in a given project. However, if you have multiple projects, each one will use a different value.

Unlike the key and load attributes above, the project attribute sometimes starts with a number, so it must always be used inside of quotation marks (`project="876MN8"` __NOT__ `project=876MN8`).

### The defaults attribute (optional)

By default, the Anymod script delivers Bootstrap CSS for styling sections. If you want to turn off this behavior, you can include `defaults="false"` on your script tag, like so:

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
