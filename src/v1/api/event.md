---
title: Anymod.Event
type: guide
order: 205
published: true
---

Anymod comes with a built-in message bus you can use for communication between components or within your application. It is based on the [event system](https://vuejs.org/v2/api/#Instance-Methods-Events) available to Vue.js components.

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

We've created a component with key `mldrn` that has the following JavaScript code:

```JS
Anymod.Event.$on('updateComponent', function(data) {
  component.data.title = data.title
  component.data.content = data.content
})
```

This code was added via the dashboard code editor, so now the component will respond to the `updateComponent` event by updating its `title` and `content`. Note that there is nothing special about the name `updateComponent` -- the event can be named anything.

Now in our application code we can call `Anymod.Event.$emit('updateComponent', ...)` and our component will respond accordingly. Below we have a button set to run the following when it is clicked:

```JS
Anymod.Event.$emit('updateComponent', {
  title: 'New title',
  content: 'New content at ' + new Date().toLocaleTimeString() + '<br><br>'
})
```

Thus clicking the button will cause the `updateComponent` event to fire, which is then picked up by our component, and the `title` and `content` are updated:

<iframe width="100%" height="500" src="//jsfiddle.net/component/L1ugm6gn/embedded/result,html,js/" allowfullscreen="allowfullscreen" frameborder="0"></iframe>

With this approach, you can send events to any component from your application code or from other components.


<!-- Anymod script -->
<script project="component-io-team" src="https://cdn.anymod.com/v1"></script>
