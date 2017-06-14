---
title: General usage
type: usage
order: 100
published: true
---

<p class="tip">To use components in your project, copy & paste the install code.</p>

## Installing a component

When you add a component to your project, you are directed to a page with the install code for the component you've just added. It will look something like this:

```html
<component key=ekaob load=b></component>
<!-- Paste script once per page at the bottom -->
<script project="cio-library" src="https://cdn.component.io/v1"></script>
```

To make your new component show on the page, paste this code into your HTML where you would like the component to show. For example, we've pasted the same code here, and it delivers the component:

<br>
<component key=ekaob load=b></component>

If you have multiple components on your page, you don't need to paste the `<script>` tag multiple times.  You should include it only once at the bottom of your HTML page, just before the closing `</body>` tag.

```html
<body>
  <component key=ekaob load=b></component>
  <component key=aldlk load=md></component>

  ...

  <!-- Paste script once per page at the bottom -->
  <script project="cio-library" src="https://cdn.component.io/v1"></script>
</body>
```

The above code delivers both components:

<br>
<component key=ekaob load=b></component>
<component key=aldlk load=md></component>

You can add as many components as you want to a page and you only need to add the `<script>` tag once. It's also not a problem to add the same component multiple times.

<p class="tip">Add as many components as you want to a page. All components are delivered together in a single request, so delivery of 10 components is just as fast as delivery of 1 component.</p>

## Editing a component

You can use the dashboard to edit both the content of a component and its code.

- __Content__ is the text, images, and attributes that show for a component, like a title or the text of a button. You do not need to know how to code to edit the content.

- __Code__ is the HTML, CSS, and JavaScript that give a component its overall look and behavior.

### Edit content

To edit content, log into your project at https://dashboard.component.io and use the search bar or browse to find the component you want to edit. Click the button marked `Edit`, and you will see a screen like the following:

<img id="edit-example" src="https://res.cloudinary.com/component/image/upload/v1496964722/guide-edit-example.png"/>

The left side of the page allows you to edit your content, and the right side of the page is a live preview of your component. Click a field on the left side to change it, and click `Save` when you are finished. The preview on the right side of the page will update.

Changes you make in the dashboard are live and are immediately used wherever the component is delivered.

### Edit code

To edit code, log into your project at https://dashboard.component.io and use the search bar or browse to find the component you want to edit. Click the button marked `Code`, and you will see a screen like the following:

<img id="code-example" src="https://res.cloudinary.com/component/image/upload/v1496966022/guide-code-example.png"/>

The page is divided into four quadrants:

- Top-left is for __HTML__
- Top-right is for __CSS__
- Bottom-left is for __JavaScript__
- Bottom-right is a __Live preview__

Each time you make edits, you can click the `Save` button or press `ctrl+s` (or `command+s` on mac) to save your changes. Changes you make in the dashboard are live and are immediately used wherever the component is delivered.

## Component attributes

Looking again at the install code for a component, we can see it has several attributes:

```html
<component key=ekaob load=b></component>
<!-- Paste script once per page at the bottom -->
<script project="cio-library" src="https://cdn.component.io/v1"></script>
```

### The key attribute (optional)

```html
<component key=ekaob ...></component>
```

The key attribute identifies the component so that it can be delivered to the page. Following HTML convention, you can use this attribute with or without quotes (in this example, `key=ekaob` or `key="ekaob"`), as both will work.

You may also omit the key if you have added a __Page__ in your dashboard with components on it. If you omit the key attribute, components will be delivered according to the order on your __Page__ in the dashboard.

<p class="tip">If you are using a system that does not handle custom attributes (e.g. React), you can use `data-key` instead of `key`.</p>

Each component has a unique key.

### The load attribute (optional)

```html
<component ... load=md-mi></component>
```

The load attribute determines which external stylesheets the script will load, which include:

|  |  |  |
|:- |:- |:-|
| __b__ | Bootstrap CSS v4 | <a href="https://v4-alpha.getbootstrap.com/" target=_blank><i class="fa fa-external-link"></i></a> |
| __md__ | Material Design CSS | <a href="https://material.io/components/web/" target=_blank><i class="fa fa-external-link"></i></a> |
| __fa__ | Font Awesome Icons | <a href="http://fontawesome.io/icons/" target=_blank><i class="fa fa-external-link"></i></a> |
| __mi__ | Material Design Icons | <a href="https://material.io/icons/" target=_blank><i class="fa fa-external-link"></i></a> |

For example, including `load=md-mi` with a component will cause the script to load the Material Design CSS and Material Design Icons. Even if multiple components include the same load attributes, those resources will only be loaded once.

Load attributes are populated automatically based on the dropdown settings in the CSS code editor in the dashboard, so if you use the dropdown to edit your external CSS, be sure to update your component tag(s) accordingly.

<p class="tip">If you are using a system that does not handle custom attributes (e.g. React), you can use `data-load` instead of `load`.</p>

### Other component attributes

Any attributes you place on a component (such as `id`, `class`, `style`, `data-toggle`, etc) will be kept during the render process.

For example, if you add `style="color:green;"` to a component like so:

```html
<component key=ekaob style="color:green;"></component>
```

That style will be kept and applied to the component.

<br>
<component key=ekaob style="color:green;"></component>

### The project attribute (required)

```html
<script project="876MN8" ...></script>
```

The project attribute lets the script know which project to request components for. This attribute will be the same for all components in a given project. However, if you have multiple projects, each one will use a different value.

Unlike the key and load attributes above, the project attribute sometimes starts with a number, so it must always be used inside of quotation marks (`project="876MN8"` __NOT__ `project=876MN8`).

### The defaults attribute (optional)

By default, the Component IO script delivers Bootstrap CSS for styling components. If you want to turn off this behavior, you can include `defaults="false"` on your script tag, like so:

```html
<script project="876MN8" defaults="false" src="https://cdn.component.io/v1"></script>
```

<style>
  [aldlk] h2 { border:none !important; }
  #edit-example,
  #code-example {
    border-radius: 5px;
    -webkit-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
       -moz-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
        -ms-box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
            box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
  }
</style>

<!-- Paste script once per page at the bottom -->
<script project="cio-library" src="https://cdn.component.io/v1"></script>
