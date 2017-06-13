---
title: Component.Project
type: guide
order: 204
published: true
---

You can get the current project at any time with `Component.Project`. For example, a `<script>` tag with:

```html
<script project="8N3P38" src="https://cdn.component.io/v1"></script>
```

Would yield the following:

```js
Component.Project
// -> "8N3P38"
```
