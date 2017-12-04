---
title: Data only
type: usage
order: 106
published: true
---

You can forego the Anymod script and rendering framework entirely and use Anymod as a data source instead. To do so, send a `GET` request with the appropriate parameters to the **/data** endpoint.

There are 2 types of requests:

- **Single section request** for one section returned as an `Object`
- **Multiple section request** for one or more sections returned as an `Array`

<p class="tip">All requests should be made to the endpoint via **https**.</p>

## Single section request

Request data for a single section from your project.

- **Route**

  `GET` https://<span></span>api.anymod.com/v0/data/{ **projectId** }/component/{ **key** }

- **Returns**

  `Object` (JSON)

- **Example**

For section `id=anymod-errba` in `project="cio-library"`

`GET` https://api.anymod.com/v0/data/cio-library/component/errba

```json
{
  "key": "errba",
  "project": "cio-library",
  "data": {
    "content": "<h2>Lorem ipsum dolor sit amet</h2>\n<p>Consectetur adipiscing elit. Duis accumsan elementum vehicula. Praesent semper libero eu sapien imperdiet, quis sollicitudin erat maximus. Mauris semper consequat bibendum. Vestibulum eget vehicula justo. Vivamus id urna at libero tincidunt varius et sed ante. Sed tincidunt odio non urna ultricies lacinia. Nullam consequat leo eu diam maximus rutrum ac a sapien. Integer eget enim id tortor suscipit faucibus vel at urna. Sed luctus eget diam in facilisis...</p>"
  }
}
```

## Multiple section request

Request data for one or more sections from your project.

- **Route**

  `GET` https://<span></span>api.anymod.com/v0/data/{ **projectId** }/components/{ **key1,key2,key3** }
  _*Note the "s" at the end of components_

  Here, the ids for each section are separated by a comma (no space).

- **Returns**

  `Array` (JSON)

   Component order is preserved in the response, even if there are duplicates or sections missing.

- **Example**

`GET` https://api.anymod.com/v0/data/cio-library/components/errba,elarm

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

- **Example with duplicates and missing sections**

  If a section key is duplicated in the request, it will be returned in the response in the same index locations. If a section is missing, it will be returned in the same index location with an empty `data` object and a property `notFound` set to `true`.

  In this example, we have duplicated the `elarm` section, and the `foobar` section does not exist:

  `GET` https://api.anymod.com/v0/data/cio-library/components/elarm,foobar,elarm

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
