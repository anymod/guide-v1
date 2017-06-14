---
title: Data only
type: usage
order: 106
published: true
---

You can forego the Component IO script and rendering framework entirely and use the Component IO dashboard as a data source instead. To do so, send a `GET` request with the appropriate parameters to the **/data** endpoint.

There are 2 types of requests:

- **Single component request** for one component returned as an `Object`
- **Multiple component request** for one or more components returned as an `Array`

<p class="tip">All requests should be made to the endpoint via **https**.</p>

## Single component request

Request data for a single component from your project.

- **Route**

  `GET` https://<span></span>api.component.io/v0/data/{ **projectId** }/component/{ **key** }

- **Returns**

  `Object` (JSON)

- **Example**

For component `key=errba` in `project="cio-library"`

`GET` https://api.component.io/v0/data/cio-library/component/errba

```json
{
  "key": "errba",
  "project": "cio-library",
  "data": {
    "content": "<h2>Lorem ipsum dolor sit amet</h2>\n<p>Consectetur adipiscing elit. Duis accumsan elementum vehicula. Praesent semper libero eu sapien imperdiet, quis sollicitudin erat maximus. Mauris semper consequat bibendum. Vestibulum eget vehicula justo. Vivamus id urna at libero tincidunt varius et sed ante. Sed tincidunt odio non urna ultricies lacinia. Nullam consequat leo eu diam maximus rutrum ac a sapien. Integer eget enim id tortor suscipit faucibus vel at urna. Sed luctus eget diam in facilisis...</p>"
  }
}
```

## Multiple component request

Request data for one or more components from your project.

- **Route**

  `GET` https://<span></span>api.component.io/v0/data/{ **projectId** }/components/{ **key1,key2,key3** }
  _*Note the "s" at the end of components_

  Here, the keys for each component are separated by a comma (no space).

- **Returns**

  `Array` (JSON)

   Component order is preserved in the response, even if there are duplicates or components missing.

- **Example**

`GET` https://api.component.io/v0/data/cio-library/components/errba,elarm

```json
[
  {
    "key": "errba",
    "project": "cio-library",
    "data": {
      "content": "<h2>Lorem ipsum dolor sit amet</h2>\n<p>Consectetur adipiscing elit. Duis accumsan elementum vehicula. Praesent semper libero eu sapien imperdiet, quis sollicitudin erat maximus. Mauris semper consequat bibendum. Vestibulum eget vehicula justo. Vivamus id urna at libero tincidunt varius et sed ante. Sed tincidunt odio non urna ultricies lacinia. Nullam consequat leo eu diam maximus rutrum ac a sapien. Integer eget enim id tortor suscipit faucibus vel at urna. Sed luctus eget diam in facilisis...</p>"
    }
  },
  {
    "key": "elarm",
    "project": "cio-library",
    "data": {
      "image": "https://res.cloudinary.com/component/image/upload/v1493739852/c0y1myh38wdbxunuyeef.png"
    }
  }
]
```

- **Example with duplicates and missing components**

  If a component key is duplicated in the request, it will be returned in the response in the same index locations. If a component is missing, it will be returned in the same index location with an empty `data` object and a property `notFound` set to `true`.

  In this example, we have duplicated the `elarm` component, and the `foobar` component does not exist:

  `GET` https://api.component.io/v0/data/cio-library/components/elarm,foobar,elarm

  ```json
  [
    {
      "key": "elarm",
      "project": "cio-library",
      "data": {
        "image": "https://res.cloudinary.com/component/image/upload/v1493739852/c0y1myh38wdbxunuyeef.png"
      }
    },
    {
      "key": "foobar",
      "project": "cio-library",
      "data": {},
      "notFound": true
    },
    {
      "key": "elarm",
      "project": "cio-library",
      "data": {
        "image": "https://res.cloudinary.com/component/image/upload/v1493739852/c0y1myh38wdbxunuyeef.png"
      }
    }
  ]
  ```
