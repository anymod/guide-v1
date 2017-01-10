---
title: Basics
type: guide
interLink: true
order: 3
---

## Text

- **Arguments:**
  - `text {String}`

- **Usage:**

  Place text on a page within a `<span>` element.

  ``` html
  <jframe text id="hello"></jframe>
  ```

  Will result in:

  ``` html
  <jframe text id="hello">
    <span>Hello World!</span>
  </jframe>
  ```

<a class="button" href="https://jsfiddle.net/jframe/hvnx6p0q/" target="_blank">Demo</a> <a class="button white api-link" href>API</a>


## HTML

- **Arguments:**
  - `rawHtml {String}`

- **Usage:**

  Place HTML on a page within a `<span>` element.

  ``` html
  <jframe html id="-id-"></jframe>
  ```

  Will result in:

  ``` html
  <jframe html id="-id-">
    <span>
      <div class="my-custom-class">
        <h2>My fancy title</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </span>
  </jframe>
  ```

<a class="button white api-link" href>API</a>

## Markdown

- **Arguments:**
  - `rawMarkdown {String}`

- **Usage:**

  Place parsed markdown on a page within a `<span>` element. Markdown is parsed to HTML.

  ``` html
  <jframe markdown id="-id-"></jframe>
  ```

  Will result in:

  ``` html
  <jframe html id="-id-">
    <span>
      <div class="my-custom-class">
        <h2>My fancy title</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </span>
  </jframe>
  ```

<a class="button white api-link" href>API</a>


## Image

- **Arguments:**
  - `width {Integer}`
  - `height {Integer}`
  - `crop {String}`

- **Usage:**

  Place image on a page as a `<src>` element.

  ``` html
  <jframe image id="-id-"></jframe>
  ```

  Will result in:

  ``` html
  <jframe html id="-id-">
    <span>
      <div class="my-custom-class">
        <h2>My fancy title</h2>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
    </span>
  </jframe>
  ```

<a class="button white api-link" href>API</a>
