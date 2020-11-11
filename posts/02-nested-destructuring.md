---
title: "Nested Destructuring Assignment in Javascript"
date: "2020-11-11"
---

# Nested Destructuring Assignment in Javascript

_Note: Please excuse the severe lack of CSS. I needed some non-trivial content to play around with! To enjoy syntax highlighting and better fonts, please enjoy this post [as a Gist](https://gist.github.com/tdurtschi/74c4c5a0ba4bb23fdc62b0c565f83c73) instead._

## What is Destructuring Assignment?

Destructuring is a special syntax in javascript for initializing a local variable or function arg from a value inside of an object. Here's a simple example:

```typescript
const object = { foo: "woof", bar: 0 }
const { foo } = object

console.log(foo) // prints "woof"

function destructureAndLog({ foo }) {
  console.log(foo)
}
destructureAndLog(object) // prints "woof"
```

This works because `object` has the property `foo`. _Note: If the property you're trying to destructure doesn't exist on the object, it will be set to `undefined`._

React developers commonly use this technique to avoid using `props` all over the place:

```typescript
const MyFunctionalComponent = ({ prop1, prop2, prop3 }) => {
  // prop1, prop2, and prop3 are local variables. we don't need to say props.prop1, etc...
}
```

## Destructure/Rename

If you want to make things more interesting, you can actually destructure and rename a variable in the same expression!

```typescript
const { foo: dog } = { foo: "woof", bar: 0 }
console.log(dog) // prints "woof"
```

I can't think of a good reason to ever do this, but it is valid syntax. VS Code will sometimes do this if you use `refactor->rename` on a variable that is assigned by destructuring.

Even though you _can_ assign variables this way, I think it is cleaner to just assign the variable in a normal way:

```typescript
const object = { foo: "woof", bar: 0 }
const dog = object.foo
console.log(dog) // prints "woof"
```

## Nested Destructuring

One day, I encountered some code where a destructure was happening inside another destructure/rename expression. Nested destructuring! It looked something like this:

```typescript
const object = {
  foo: {
    dog: "woof",
  },
  bar: 0,
}

const {
  foo: { dog },
} = object

console.log(dog) // prints "woof"
```

Since that worked, I guess we could use the rename/destructure to rename dog too?

```typescript
const {
  foo: { dog: charlie },
} = {
  foo: {
    dog: "woof",
  },
  bar: 0,
}

console.log(charlie) // prints "woof!"
```

I can imagine some really unmanageable typescript written this way. For the sake of everyone who has to maintain your code in the future, please don't do this. It's not clever, it's _hard to read_.

```
const logValue = ({base: {child: tony}, map: {child: {tony: {age: years}, key}}}) => {
  // Quick! How many variables did we declare and what are they called?
}
```
