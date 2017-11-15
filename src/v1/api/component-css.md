---
title: Component CSS
type: guide
order: 202
published: true
---

<p class="tip">When editing components in the dashboard, you can use CSS or SCSS.</p>

## Styling components

When you add style rules to a component via the code editor, they are namespaced so that they only apply to that component.

- **Example**

A component tag with `key=elkoo`

```html
<component key=elkoo></component>
```

gets processed in the DOM as

```html
<div component elkoo ...>
  <!-- Component HTML -->
</div>
```

Thus, if the editor CSS is specified as

```css
background: red;
color: white;
```

Anymod will generate CSS that applies only to that component:

```css
[elkoo] {
  background: red;
  color: white;
}
```

## Nested style rules

With SCSS it is possible to nest style rules rather than re-writing selectors over and over. For example, a traditional set of CSS rules might be something like:

```css
.container {
  width: 100%;
  position: relative;
}
.container .class-1 {
  color: red;
}
.container .class-1 a {
  size: 16px;
}
.container .class-1 a:hover {
  color: purple;
}
```

With nesting in SCSS, it is possible to rewrite these as

```css
.container {
  width: 100%;
  position: relative;
  .class-1 {
    color: red;
    a {
      size: 16px;
      &:hover {
        color: purple;
      }
    }
  }
}
```

See Sass [Nested Rules](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#nested_rules) and [Parent Selector](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#parent-selector) for more

## CSS variables

It's also possible to set variables with SCSS to be used throughout your component's styles. You do so with a `$`:

```css
$width: 5em;

#main {
  width: $width;
}
#sidebar {
  width: $width;
}
```
See Sass [Variables](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#variables_) for more

## CSS imports

You can import external stylesheets directly using the `@import` directive like so:

```css
@import "http://fonts.googleapis.com/css?family=Droid+Sans";
// or
@import url("http://fonts.googleapis.com/css?family=Droid+Sans");
```
See Sass [Imports](http://sass-lang.com/documentation/file.SASS_REFERENCE.html#import) for more

## More

These are just the basics of SCSS; you can do more as shown in the official Sass documentation at [http://sass-lang.com/documentation/file.SASS_REFERENCE.html](http://sass-lang.com/documentation/file.SASS_REFERENCE.html).
