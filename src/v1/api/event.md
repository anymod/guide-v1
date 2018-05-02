---
title: Anymod.Event
type: guide
order: 205
published: true
---

Anymod comes with a built-in message bus you can use for communication between mods or within your application. It is based on the [event system](https://vuejs.org/v2/api/#Instance-Methods-Events) available to Vue.js components.

## $on( _event, callback_ )

- **Usage:**

  Listen for a custom event. Events can be triggered by `Anymod.Event.$emit`. The callback will receive all the additional arguments passed into these event-triggering methods.

- **Example:**

  ```JS
  Anymod.Event.$on('test', function (msg) {
    console.log(msg)
  })

  Anymod.Event.$emit('test', 'hi')
  // -> "hi"
  ```

## $once( _event, callback_ )

- **Usage:**

  Listen for a custom event, but only once. The listener will be removed once it triggers for the first time.

## $off( _event, callback_ )

- **Usage:**

  Remove custom event listener(s).

  - If no arguments are provided, remove all event listeners;
  - If only the event is provided, remove all listeners for that event;
  - If both event and callback are given, remove the listener for that specific callback only.

## $emit( _event, data_ )

- **Usage:**

  Trigger an event. Any additional arguments will be passed into the listener’s callback function.

- **Example:**

  ```JS
  Anymod.Event.$on('test', function (data) {
    console.log(data.foo + data.baz)
  })

  Anymod.Event.$emit('test', { foo: 'bar', baz: 'qux' })
  // -> "barqux"
  ```

## Example

We've created a mod with key `mldrn` that has the following JavaScript code:

```JS
Anymod.Event.$on('updateMod', function(data) {
  mod.data.title = data.title
  mod.data.content = data.content
})
```

This code was added via the dashboard code editor, so now the mod will respond to the `updateMod` event by updating its `title` and `content`. Note that there is nothing special about the name `updateMod` -- the event can be named anything.

Now in our application code we can call `Anymod.Event.$emit('updateMod', ...)` and our mod will respond accordingly. Below we have a button set to run the following when it is clicked:

```JS
Anymod.Event.$emit('updateMod', {
  title: 'New title',
  content: 'New content at ' + new Date().toLocaleTimeString() + '<br><br>'
})
```

Thus clicking the button will cause the `updateMod` event to fire, which is then picked up by our mod, and the `title` and `content` are updated:

<iframe width="100%" height="500" src="//jsfiddle.net/component/L1ugm6gn/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

With this approach, you can send events to any mod from your application code or from other mods.


<!-- Anymod script -->
<script project="anymod" src="https://cdn.anymod.com/v1"></script>
