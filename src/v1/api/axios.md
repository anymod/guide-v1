---
title: Component.axios
type: guide
order: 207
published: true
---

Anymod uses [Axios](https://github.com/mzabriskie/axios), a small, promise-based HTTP client, to make AJAX requests for things like sending back form data.

## Using Axios to make a request

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

## Accessing the Axios library

If you want to use Axios alongside Anymod, you don't need to include both (though you can). The Anymod script automatically includes Axios, available globally as `Component.axios`.
