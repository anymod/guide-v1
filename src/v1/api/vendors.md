---
title: Included libraries
type: api
order: 0
---

## Vue.js

Component IO is built on top of [Vue.js version 2](https://vuejs.org), a lightweight JavaScript framework for building components. That means that any methods available in a Vue.js instance are available in all components on Component IO.

### Accessing a component instance

Calling `Component('_key_')` returns a Vue instance for a given component. The Vue team typically refers to these instances as `vm` in their [documentation](https://vuejs.org/v2/api/#Instance-Properties).

### Editing the JavaScript

In the dashboard JavaScript editor, you can access the component instance with the `scope` keyword. For example, to add a method to a component, you can enter the following into the JavaScript editor:

```JS
scope.methods = {
  sayHello: function () {
    console.log('Hello World!')
  }
}
```

In the HTML portion of the component editor, you could call that method whenever a click occurs like so:

```HTML
<div @click="sayHello">Click me</div>
```

### Accessing the Vue library

If you want to use Vue.js alongside Component IO, you don't need to include both (though you can). The Component IO script automatically includes Vue.js, available globally as `Component.Vue`.

## Axios

Component IO uses [Axios](https://github.com/mzabriskie/axios), a small, promise-based HTTP client, to make AJAX requests for things like sending back form data.

### Using Axios to make a request

You can make a request with Axios by calling `Component.axios` to access the underlying Axios instance. For example, to make a request to save data to your component, you could do something like the following:

```JS
Component.axios.post(Component.ApiUrl + 'posts', {
  project: Component.Project,
  component: this.componentKey,
  data: {
    email: this.email
  }
})
.then(function (response) {
  console.log(response)
})
.catch(function (error) {
  console.log(error)
})
```

Or for a simple GET request:

```JS
Component.axios.get('https://guide.component.io')
.then(function (response) {
  console.log(response)
})
.catch(function (error) {
  console.log(error)
})
```

You can read more about the Axios API [here](https://github.com/mzabriskie/axios#axios-api).

### Accessing the Axios library

If you want to use Axios alongside Component IO, you don't need to include both (though you can). The Component IO script automatically includes Axios, available globally as `Component.axios`.
