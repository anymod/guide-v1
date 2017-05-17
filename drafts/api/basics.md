---
title: Basics
type: api
order: 1
---

## Content

### Structure
``` html
<component key=ranno></component>
```
Is replaced by
```html
<div component ranno component-reg-020511005 class="c19">
  <!-- Component contents -->
</div>
```

### Options
| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| rawHtml | `String` | - | HTML content rendered by the component. |

### Example
  ``` html
  <component content id="xgzdg"></component>
  ```
  Becomes
  ``` html
  <div content content id="xgzdg">
    <h1>Hello World!</h1>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
  </div>
  ```
<a class="guide-link"></a>

## Image

### Structure
``` html
<component image id="jId"></component>
```
Is replaced by
```html
<img component image id="jId" src="src"/>
```

### Options
| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| rawSrc | `String` | - | Url base location of the image (without transformations). |
| width | `Number` | - | Desired display width of image. |
| height | `Number` | - | Desired display height of image. |
| crop | `String` | `fill` | Cropping to use for image. Options include `scale`, `fit`, `mfit`, `fill`, `lfill`, `limit`, `pad`, `lpad`, `mpad`, `crop`, and `thumb` |

### Example
  ``` html
  <component image id="bwpeg"></component>
  ```
  Becomes
  ``` html
  <img component image id="bwpeg" src="https://res.cloudinary.com/component/image/upload/c_fill,h_200,w_600/v1481693531/library-image.jpg"/>
  ```
<a class="guide-link"></a>

## Text

### Structure
``` html
<component text id="jId"></component>
```
Is replaced by
```html
<div content text id="jId"><!-- text --></div>
```

### Options
| Name | Type | Default | Description |
|:---- |:---- |:------- |:----------- |
| text | `String` | - | Text rendered by the component. |

### Example
  ``` html
  <component text id="hello"></component>
  ```
  Becomes
  ``` html
  <div content text id="hello">Hello World!</div>
  ```
<a class="guide-link"></a>
