---
title: "Destructuring Assignment in Javascript"
date: "2020-11-11"
previewLength: 785
---

Destructuring is a special syntax in javascript. It allows you to initialize local variables or function arguments and assign them to values inside of an object. 

Here's a quick example:

```typescript
const obj = { foo: "woof", bar: 0 }

// declare a local variable 'foo':
const { foo } = obj

console.log(foo) // prints "woof"

// declare a function argument 'foo':
function destructure({ foo }) {
  console.log(foo)
}

destructure(obj) // prints "woof"
```

_Note: This works because `obj` is an object, and it has the property `foo`. If the property you're trying to destructure doesn't exist on the object, the variable will be set to `undefined`. If the object you are destructuring is `undefined`, an error is thrown._

Because you can dereference many variables at once, this syntax can be useful to quickly get a reference to many values on an object. React developers commonly use this technique to avoid excessive references to `props`:

```typescript
const FunctionalComponent = (props => 
  <p>{ props.foo } { props.bar }</p>
)

const FunctionalComponentDestructured = ({ foo, bar }) => 
  <p>{ foo } { bar }</p>
)
```

## Destructure and Rename

To make things more interesting, you can destructure and rename a variable in the same expression:

```typescript
const obj = { foo: "woof", bar: 0 }
const { foo: dog } = obj

console.log(dog) // prints "woof"
```

The first time I saw this syntax, I found it very confusing. I can't imagine the seconds this saves a developer typing is worth the reduction in readability. VS Code will sometimes do this when using `refactor->rename` on a variable that is assigned by destructuring.

If you've found yourself in a situation where this shortcut seems useful, ask "Why does this system have two names for the same thing?" If there's no good reason, you ought to refactor the code to use one term everywhere. If there's an explicit mapping between two names, say when crossing a domain boundary in the system, I think it would be better to say so in code:

```typescript
const obj = { foo: "woof", bar: 0 }
const dog = obj.foo

console.log(dog) // prints "woof"
```

## Nested Destructuring

Just for fun, let's see how far we can take this into unreadability... Nested destructuring! It turns out this is perfectly valid javascript:

```typescript
const obj = {
  foo: {
    dog: "woof",
  },
  bar: 0,
}

const {
  foo: { dog },
} = obj

console.log(dog) // prints "woof"
```

Since that worked, I guess I can use the rename/destructure to rename `dog` too?

```typescript
const {
  foo: { 
    dog: charlie 
  },
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
const logValue = (
  {
    base: {
      child: tony
    }, 
    map: {
      child: {
        tony: {
          age: years
        }, 
        key
      }
    }
  }) => {
  // Quick! How many variables did we declare and what are they?
}
```
