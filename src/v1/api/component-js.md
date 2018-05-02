---
title: Anymod JavaScript
type: guide
order: 203
published: true
---

<p class="tip">You can use ES5 ("regular" JavaScript) or ES6 in the Anymod editor. Code is automatically compiled to ES5 using Babel so that it works in all browsers.</p>

Under the hood, each mod is essentially a [Vue.js instance](https://vuejs.org/v2/guide/instance.html). That means that any methods available in a Vue.js instance are available in all mods delivered by Anymod.

<p class="tip">In the dashboard JavaScript editor, the mod instance is available as `mod`.</p>

## mod.data

The data object for the mod instance, which holds the values added via the Content Editor.  It can be accessed in the dashboard JavaScript editor as `mod.data`.

- **Type**: Object

- **Example**

Given a mod with the field `title`, we can access and manipulate it in our mod's JavaScript:

```js
// Log the title
console.log(mod.data.title)

// Set a default title
if (!mod.data.title) mod.data.title = 'Default title'

// Reassign the title to uppercase
mod.data.title = mod.data.title.toUpperCase()
```

This field would be available in the mod HTML as `title`:

```html
<h2 v-text="title"></h2>
```

If the `title` value was set to "My great title" in the Content Editor, and the above JavaScript code was used in the mod, the result would be:

```html
<h2>MY GREAT TITLE</h2>
```

See Vue.js [data](https://vuejs.org/v2/api/#data) for more

## mod.computed

For more complex logic or for cases where you may want a transformation repeated even if the underlying data changes, you can define a `mod.computed` object.  This object will behave similar to the `mod.data` object above, but its values are computed in real-time based on inputs.

- **Type**: Object

- **Example**

Given a field `message`, we could define `reversedMessage` to always be the reverse text of `message`:

```js
mod.computed = {
  reversedMessage: function () {
    return mod.data.message.split('').reverse().join('')
  }
}
```

Now both `message` and `reversedMessage` are available in the mod HTML and can be used together or separately:

```html
<p v-text="message"></p>
<p v-text="reversedMessage"></p>
```

If `message` is defined as "Hello World!" in the Content Editor, it will render the following:

```html
<p>Hello World!</p>
<p>!dlroW olleH</p>
```
If `message` is changed after render (for example, by `Anymod(_key_).message = 'Foobar')`, the value for `reversedMessage` will also update.

See Vue.js [Computed Properties](https://vuejs.org/v2/guide/computed.html#Computed-Properties) for more

## mod.watch

While computed properties are more appropriate in most cases, there are times when a custom watcher is necessary. `mod.watch` is a more generic way to react to data changes. This is most useful when you want to perform asynchronous or expensive operations in response to changing data.

- **Type**: Object

- **Example**

We can design a custom input field that returns a yes or no answer based on the text entered.

```html
<p>
  Ask a yes/no question:
  <input v-model="question">
</p>
<p v-text="answer"></p>
```
```js
mod.data = {
  question: '',
  answer: 'I cannot give you an answer until you ask a question!'
}

mod.watch = {
  // whenever question changes, this function will run
  question: function (newQuestion) {
    mod.data.answer = 'Waiting for you to stop typing...'
    mod.getAnswer()
  }
}

mod.methods = {
  getAnswer: function () {
    if (mod.data.question.indexOf('?') === -1) {
      mod.data.answer = 'Questions usually contain a question mark. ;-)'
      return
    }
    mod.data.answer = 'Thinking...'
    Anymod.axios.get('https://yesno.wtf/api')
    .then(function (response) {
      mod.data.answer = response.data.answer
    })
    .catch(function (error) {
      mod.data.answer = 'Error! Could not reach the API. ' + error
    })
  }
}
```

In this case, using the watch option allows us to perform an asynchronous operation (accessing an API), limit how often we perform that operation, and set intermediary states until we get a final answer. None of that would be possible with a computed property.

See Vue.js [Watchers](https://vuejs.org/v2/guide/computed.html#Watchers) for more

## mod.methods

The `mod.methods` object allows methods to be added to the mod that are accessible directly in the mod HTML. All methods have their `this` context automatically bound to the mod.

- **Type**: Object

- **Example**

Say we have a `count` field that we want to start at zero and increment each time a button is clicked. We can set up a method called `incrementCount` to do this.

```js
mod.data.count = 0

mod.methods = {
  incrementCount: function () {
    mod.data.count++
  }
}
```

The `incrementCount` method is now available in the HTML, and we can bind it to a button's click event like so:

```html
<p v-text="count"></p>
<button @click="incrementCount"><button>
```

This will render a `count` that gets incremented by 1 each time the button is clicked.

See Vue.js [methods](https://vuejs.org/v2/api/#methods) and [Method Event Handlers](https://vuejs.org/v2/guide/events.html) for more

## mod.mounted

Use `mod.mounted` to define a function that is called as soon as the mod has been rendered ("mounted").

- **Type**: function

- **Example**

```js
mod.mounted = function () {
  console.log('The mod is ready')
}
```

See Vue.js [mounted](https://vuejs.org/v2/api/#mounted) for more

## mod.updated

Use `mod.updated` to define a function that is called whenever a mod is updated.

- **Type**: function

- **Example**

```js
mod.updated = function () {
  console.log('The mod was updated', mod.data)
}
```

See Vue.js [updated](https://vuejs.org/v2/api/#updated) for more
