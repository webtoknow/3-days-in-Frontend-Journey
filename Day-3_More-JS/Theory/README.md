# Day 3 : More JavaScript

## Table of contents

- [Var, let or const](#var-let-or-const)
- [Event loop](#event-loop)
- [Scope and Closures](#scope-and-closures)
  - [Scope](#scope)
    - [Global Scope](#global-scope)
    - [Local Scope](#local-scope)
    - [Function hoisting](#function-hoisting)
    - [Nested scopes](#nested-scopes)
  - [Closures](#closures)

## Var, let or const

- **let** and **const** was introduced in ES6
- **const**:
  - means that the identifier can't be reassigned
  - will be used **only in the block where it is defined**
- **let**:
  - is used when we want to reassign the variable
  - used especially for loops and mathematical algorithms
  - will be used **only in the block where it is defined**
- **var**:
  - is now the weakest signal available when you define a variable in JavaScript
  - the variable may or may not be reassigned
  - the variable may or may not be used for the block or loop or for the entire application

## Event loop

- The browser main thread is an event loop
- It's an infinite loop that keeps the process alive
- It waits for events (like layout and paint events) and processes them
- Let's watch an amazing [video](https://www.youtube.com/watch?v=8aGhZQkoFbQ&t=6s) regarding **Event Loop** from [JSConf EU 2014](https://2014.jsconf.eu/).

## Scope and Closures

### Scope

- defines what variables you have access to
- 2 kinds of scope:
  - Global scope
  - Local scope

#### Global scope

- a variable is defined outside all functions or curly braces ( {} ), it is defined into **global scope**

```JavaScript
const globalVariable = 'hello'
```

- once declared, the variable can be used anywhere

```JavaScript
const globalVariable = 'Hello, JavaScript!'

function hello() {
    console.log(globalVariable);
}

console.log(globalVariable); // Hello, JavaScript!
hello(); // Hello, JavaScript!
```

> **Note**
>
> - It is recommended to **avoid declaration** of variables **into global scope**, because naming collisions can happen (when 2 or more variables have the same name)
> - If the variables are declared using **const** or **let**, then naming collisions happen, an error will be received.
> ```JavaScript
> let language = 'JavaScript';
> let language = 'Python'; // Error, language already declared
> ```
> - Otherwise, if they are declared using **var**, the last one overwrite the others
> ```JavaScript
> var language = 'JavaScript';
> var language = 'Python';
> console.log(language); // Python
> ```

#### Local scope

- variables available only in a specific part of the code are in **local scope**.
- these are also called **local variables**
- 2 kinds of local scope:
  - **function scope**:
    - variables declared in a function can only be accessed within that function.
    ```JavaScript
    function hello() {
        const localVariable = 'Hello, JavaScript!';
        console.log(localVariable); // Hello, JavaScript!
    }
    hello(); // Hello, JavaScript!
    console.log(localVariable); // Error, localVariable is not defined!
    ```
  - **block scope**:
    - a variable declared with `const` or `let` within curly braces can be accessed only in that block.
    ```JavaScript
    {
        const localVariable = 'Hello, JavaScript!';
        console.log(localVariable); // Hello, JavaScript!
    }
    console.log(localVariable); // Error, localVariable is not defined!
    ```

### Function hoisting

- when declared with function declaration, **they are always hoisted to the top of current scope**.
- so, these examples are equivalent:

```JavaScript
hello();
function hello () {
    console.log('Hello, JavaScript!');
}
```

```JavaScript
function hello () {
    console.log('Hello, JavaScript!');
}
hello();
```

- when declared with a function expression, **functions are NOT hoisted to the top of current scope**

```JavaScript
hello();
const hello = function () {
    console.log('Hello, JavaScript')
}
```

> **Note**
>
> - Functions do not have access to each other's scopes, even if we define them separately or used one in another
> ```JavaScript
> function first () {
>   const firstFunctionVariable = 'First function variable'
> }
> function second () {
>    first()
>    console.log(firstFunctionVariable) // Error, firstFunctionVariable is not defined
> }
> ```
> - Variables are also hoisted in JavaScript
> ```JavaScript
> // This will work
> x = 5;
> var x;
> ```
> - Initializations are not hoisted
> ```JavaScript
> var x = 5;
> console.log(x); // 5
> console.log(y); // undefined
> var y = 6;
> ```

### Nested scopes

- when a function is defined in another function, the inner function has access to the outer function's variables
- this behaviuor is called **lexical scoping**
- the outer function does not have access to the inner's function variables

```JavaScript
function outerFunction() {
    const outer = 'Hello from outer function!'

    function innerFunction() {
        const inner = 'Hello from inner function!'
        console.log(outer) // Hello from outer function
    }

    console.log(inner) // Error, inner is not defined
}
```

### Closures

- when a function is created into an another function, a **closure** was created. The inner function is the closure.
- because closures have access to the variables in outer function, they are usually used for creating private variables.
- variables created in function cannot be accessed outside the function
- they are called **private variables**
- if we want to access these private variables, we can use closures:

```JavaScript
function person() {
    // private variable
    let name = 'No Name';
    return {
        // getter
        getName: function() {
            return name;
        },
        // setter
        setName: function(newName) {
            name = newName;
        }
}

const myBrother = person();
console.log(myBrother.getName()); // No Name
myBrother.setName('John');
console.log(myBrother.getName()); // John
```

Previous | Next
:------- | ---:
← [Day 2 - Exercise](../../Day-2_Basic-JS/Exercise/README.md) | [Day 3 - Exercise](../Exercise/README.md) →