---
title: Anymod HTML
type: guide
order: 201
published: true
---

When editing components in the dashboard, you can use the HTML attributes below to generate HTML and manipulate how content is displayed. These are roughly divided into the following groups:

| Purpose | Name |
|:--------|:-----------|
| Display or style content | [v-text](#v-text) <br> [v-html](#v-html) <br> [v-bind (:)](#v-bind) |
| Show or hide component parts | [v-if](#v-if) <br> [v-show](#v-show) |
| Loop / iterate over multiple items | [v-for](#v-for) |
| Respond to user events (clicks, keystrokes, etc.) | [v-on (@)](#v-on) |
| Record user form inputs | [v-model](#v-model) |

<p class="tip">For attributes that reference a variable, the component should have a field with the same name as the variable. For example `v-text="msg"` should be used with a field named `msg`.</p>

## v-text

Generate the element’s text content.

- **Example**

```html
<span v-text="msg"></span>
<!-- same as -->
<span>{{ msg }}</span>
```

See also Vue.js [v-text](https://vuejs.org/v2/api/#v-text)

## v-html

Generate the element's innerHTML.

- **Example**

```html
<!-- Display html field as HTML -->
<div v-html="html"></div>
```

See also Vue.js [v-html](https://vuejs.org/v2/api/#v-html)

## v-bind ( : )

Dynamically bind one or more attributes to an expression.

When used to bind the class or style attribute, it supports additional value types such as Array or Objects.

- **Examples**

```html
<!-- bind an attribute -->
<img v-bind:src="imageSrc">

<!-- shorthand -->
<img :src="imageSrc">

<!-- with inline string concatenation -->
<img :src="'/path/to/images/' + fileName">

<!-- class binding -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- style binding -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- binding an object of attributes -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>
```

See also Vue.js [v-bind](https://vuejs.org/v2/api/#v-bind) and [Class & Style Bindings](https://vuejs.org/v2/guide/class-and-style.html)

## v-if

Conditionally render the element based on the truthy-ness of the expression value. The element and its contained directives / components are destroyed and re-constructed during toggles. Can be extended with `v-else` and `v-else-if` as needed.

This directive triggers transitions when its condition changes.

- **Example**

```html
<div v-if="type === 'A'">A</div>
<div v-else-if="type === 'B'">B</div>
<div v-else-if="type === 'C'">C</div>
<div v-else>Not A/B/C</div>
```

See also Vue.js [v-if](https://vuejs.org/v2/api/#v-if) and [Conditional Rendering](https://vuejs.org/v2/guide/conditional.html#v-if)

## v-show

Toggles the element’s display CSS property based on the truthy-ness of the expression value. The difference between `v-show` and `v-if` is that an element with `v-show` will always be rendered and remain in the DOM; `v-show` simply toggles the display CSS property of the element.

This directive triggers transitions when its condition changes.

- **Example**

```html
<h1 v-show="ok">Hello!</h1>
```

See also Vue.js [v-show](https://vuejs.org/v2/api/#v-show) and [Conditional Rendering](https://vuejs.org/v2/guide/conditional.html#v-show)

## v-for

Render the element or template block multiple times based on the source data. The directive’s value must use the special syntax `item in items` to provide an `item` for the current element being iterated on.

`v-for` also supports an optional second argument for the index of the current item.

- **Examples**

```html
<div v-for="item in items">
  <span v-bind="item.text"></span>
</div>

<!-- optional index -->
<div v-for="(item, index) in items">
  {{ index }}: {{ item.text }}
</div>

<!-- You can also use "of" as the delimiter instead of "in" if desired -->
<div v-for="item of items">
  <span v-bind="item.text"></span>
</div>
```

See also Vue.js [v-for](https://vuejs.org/v2/api/#v-for) and [List Rendering](https://vuejs.org/v2/guide/list.html)

## v-on ( @ )

Attaches an event listener to the element. The event type is denoted by the argument. The expression can either be a method name or an inline statement, or simply omitted when there are modifiers present.

When listening to native DOM events, the method receives the native event as the only argument. If using inline statement, the statement has access to the special `$event` property: `v-on:click="handle('ok', $event)"`.

- **Examples**

```html
<!-- method handler -->
<button v-on:click="doThis"></button>

<!-- inline statement -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- shorthand -->
<button @click="doThis"></button>

<!-- stop propagation -->
<button @click.stop="doThis"></button>

<!-- prevent default -->
<button @click.prevent="doThis"></button>

<!-- prevent default without expression -->
<form @submit.prevent></form>

<!-- chain modifiers -->
<button @click.stop.prevent="doThis"></button>

<!-- key modifier using keyAlias -->
<input @keyup.enter="onEnter">

<!-- key modifier using keyCode -->
<input @keyup.13="onEnter">

<!-- the click event will be triggered at most once -->
<button v-on:click.once="doThis"></button>
```

- Event Modifiers: `stop`, `prevent`, `capture`, `self`, `once`

```html
<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>
```

- Key Modifiers: `enter`, `tab`, `delete` (captures both “Delete” and “Backspace” keys), `esc`, `space`, `up`, `down`, `left`, `right`

```html
<!-- only call submit() when the keyCode is 13 -->
<input v-on:keyup.13="submit">

<!-- same as above -->
<input v-on:keyup.enter="submit">

<!-- also works for shorthand -->
<input @keyup.enter="submit">
```

See also Vue.js [v-on](https://vuejs.org/v2/api/#v-on) and [Event Handling](https://vuejs.org/v2/guide/events.html)

## v-model

Create a two-way binding on a form input element. Works with `<input>`, `<textarea>`, and `<select>` elements.  The component should have a `field` name corresponding to the bound variable.

- **Examples**

```html
<!-- text input -->
<input v-model="message" placeholder="edit me">

<!-- textarea -->
<textarea v-model="message" placeholder="add multiple lines"></textarea>

<!-- checkbox -->
<input type="checkbox" v-model="checked">

<!-- multiple checkboxes bound to same array -->
<input type="checkbox" id="jack" value="Jack" v-model="checkedNames">
<input type="checkbox" id="john" value="John" v-model="checkedNames">
<input type="checkbox" id="mike" value="Mike" v-model="checkedNames">

<!-- radio buttons -->
<input type="radio" id="one" value="One" v-model="picked">
<label for="one">One</label>
<br>
<input type="radio" id="two" value="Two" v-model="picked">
<label for="two">Two</label>

<!-- select -->
<select v-model="selected">
  <option disabled value="">Please select one</option>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>

<!-- multi-select -->
<select v-model="selected" multiple>
  <option>A</option>
  <option>B</option>
  <option>C</option>
</select>
```

See also Vue.js [v-model](https://vuejs.org/v2/api/#v-model) and [Form Input Bindings](https://vuejs.org/v2/guide/forms.html)
