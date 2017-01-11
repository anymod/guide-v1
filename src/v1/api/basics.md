---
title: Basics
type: api
order: 1
---

## Text

### Structure
``` html
<jframe text id="jId">
  <span id="app-jId" v-text="text"></span>
</jframe>
```

### Options
| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| text | `String` | - | Text rendered by the component. |

### Example
  ``` html
  <jframe text id="hello"></jframe>
  ```

  Will result in:

  ``` html
  <jframe text id="hello">
    <span id="app-hello">Hello World!</span>
  </jframe>
  ```
<a class="guide-link"></a>

## HTML

### Structure
``` html
<jframe text id="jId">
  <span id="app-jId" v-html="rawHtml"></span>
</jframe>
```

### Options
| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| rawHtml | `String` | - | HTML rendered by the component. |

### Example
  ``` html
  <jframe text id="helloHtml"></jframe>
  ```
  Will result in:
  ``` html
  <jframe text id="helloHtml">
    <span id="app-helloHtml">
      <h1>Hello World!</h1>
      <p>Lorem ipsum dolor sit amet</p>
    </span>
  </jframe>
  ```
<a class="guide-link"></a>

## Markdown

### Structure
``` html
<jframe text id="jId">
  <span id="app-jId" v-html="compiledHtml"></span>
</jframe>
```

### Options
| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| compiledHtml | `String` | - | Markdown rendered as HTML by the component. |

### Example
  ``` html
  <jframe text id="helloMarkdown"></jframe>
  ```
  Will result in:
  ``` html
  <jframe text id="helloMarkdown">
    <span id="app-helloMarkdown">
      <h1>Hello World!</h1>
      <p>Lorem ipsum dolor sit amet</p>
    </span>
  </jframe>
  ```
<a class="guide-link"></a>

## Image

### Structure
``` html
<jframe text id="jId">
  <img id="app-jId" :src="src"/>
</jframe>
```

### Options
| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| src | `String` | - | Url location of the image. |
| width | `Number` | - | Desired display width of image. |
| height | `Number` | - | Desired display height of image. |
| crop | `String` | `fill` | Cropping to use for image. Options include `scale`, `fit`, `mfit`, `fill`, `lfill`, `limit`, `pad`, `lpad`, `mpad`, `crop`, and `thumb` |

### Example
  ``` html
  <jframe image id="123"></jframe>
  ```
  Will result in:
  ``` html
  <jframe image id="123">
    <img id="app-123" src="https://example.com/path/to/image.png"/>
  </jframe>
  ```
<a class="guide-link"></a>
