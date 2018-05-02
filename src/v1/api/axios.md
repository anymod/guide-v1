---
title: Anymod.axios
type: guide
order: 207
published: true
---

Anymod uses [Axios](https://github.com/mzabriskie/axios), a small, promise-based HTTP client, to make AJAX requests for things like sending back form data.

## Using Axios to make a request

You can make a request with Axios by calling `Anymod.axios` to access the underlying Axios instance. For example, to make a request to save data to your mod, you could do something like the following:

```JS
Anymod.axios.post(Anymod.ApiUrl + 'posts', {
  project: Anymod.Project,
  component: this.modKey,
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
Anymod.axios.get('https://guide.anymod.com')
.then(function (response) {
  console.log(response)
})
.catch(function (error) {
  console.log(error)
})
```

You can read more about the Axios API [here](https://github.com/mzabriskie/axios#axios-api).

## Accessing the Axios library

If you want to use Axios alongside Anymod, you don't need to include both (though you can). The Anymod script automatically includes Axios, available globally as `Anymod.axios`.
