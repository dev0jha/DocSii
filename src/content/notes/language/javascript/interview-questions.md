---
title: "JavaScript Interview Questions"
description: "Common JavaScript interview questions covering let/var/const, hoisting, closures, and more."
category: "language"
topic: "javascript"
order: 6
tags: ["javascript", "interview", "questions"]
lastUpdated: 2026-06-05
---

# Interview Question

### 1. Difference between let, var and const ?

   → All of these  used to declare a variable on javascript ;-

- **var**: Function or global scope. Can be re-declared and updated.
- **let**: Block scope. Can be updated but not re-declared in the same block.
- **const**: Block scope. Cannot be updated or re-declared. Requires initialization.

```jsx
var a = 1;    // function or global scope
let b = 2;    // block scope
const c = 3;  // block scope; must be initialized
```

- With the keyword [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var). For example, `var x = 42`. This syntax can be used to declare both **local** and **global** variables, depending on the *execution context*.
- With the keyword [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) or [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let). For example, `let y = 13`. This syntax can be used to declare a block-scope local variable.
- All the differences occur in hoisting of variables..

### 2. Define Hoisting in JS ?

→ Hoisting refers to the process whereby the interpreter appears to more the declarations to the top of the code before execution .

→ in JS , Whatever declaration is there in it seems to be placed at the top of the code..

- Function expression and class expression is not hoisted..

```jsx
greet() 
function greet(){
console.log ("hello")
}
/* In above code greet() function call before declaration 
and hoisitng helps the declaration value to put on top 
of code. */
```

```jsx
console.log(a)
var a = 9; // declartion hoisted at the top nut inilazation not
console.log(a)

output
// undefined 
 // 9
```

```jsx
console.log(a)
let a = 9; // declartion  hoisted but not initilazed
const a = 9; //same as let work
console.log(a)

output
error
```

### 3. Define Closure in JS ?

→ In JavaScript, **a closure is created when a function retains access to its lexical (surrounding) scope, even after the outer function has finished execution.**

→ An inner function "remembers" the variables from the outer function where it was created, even if that outer function is no longer active.

→ “A closure is a function bundled together with a reference to its surrounding scope, allowing it to access those outer variables even after the parent function has returned.”

```jsx
function outer() {
  let secret = "hidden";
  return function inner() {
    return secret;
  };
}

let getSecret = outer();
console.log(getSecret()); // "hidden"
```

- `outer` defines a variable `secret` and returns `inner`.
- `inner` is returned and assigned to `getSecret`.
- Even though `outer` has finished executing, `getSecret` (which is `inner`) still has access to `secret` — this is a **closure** in action.

### 4. Define JavaScript ?

→ JavaScript is a single threaded , non-blocking, asynchronous concurrent language 

- It has call stack, an event loop and a callback queue + others APIs.
- V8 is the JavaScript runtime which has a call stack and a heap
- The heap is used for memory allocation and the stack holds the execution
- DOM, setTimeout, XML, HttpRequest dont exist in V8 source code.

→  `ASYNCHRONOUS CALLBACK`

- Sometimes the JavaScript code can take a lot of time and this can block the page re-render,
- JavaScript has asynchronous callbacks for non blocking behaviour.
- JavaScript runtime can do only one thing at a time
- Browser gives us other which working along with the runtime like Web APIs [ `setTimeout` , `fetch` etc].
- In node.js these are available as c++ APIs.

→ `TASKQUEUE`

- JavaScript can do only one thing at a time.
- The rest are queued to the task queue waiting to be executed
- When we run `setTimeout`, `webAPIs` will run a timer and push the function provided to `setTimeout` to the task queue once the timer ends.
- These tasks will be pushed to the stack where they can executed .

### 5. Define Event Loop ?

→ JavaScript has a runtime model based on an event loop, which is responsible for executing the code, collecting and processing events and executing queued sub-tasks..

- The event loop pushes the tasks from the task queue to the call stack.
- `setTimeout fun(1,0)` can be used to defer a function until all the pending tasks (so far) have been executed.
- We can see how things work in action by visiting ..

```jsx
console.log("start");
setTimeout(() => console.log("timeout"), 0);
console.log("end");
// Output: start, end, timeout
```

### 6. Define Prototyping Chaining ?

→ In JavaScript, every object has a **prototype**—another object from which it inherits properties and methods. This forms a chain known as the **prototype chain**.

- When you try to access a property or method on an object, JavaScript first looks for it on the object itself. If it’s not found, it looks up the object's prototype, then the prototype’s prototype, and so on, until .it either finds the property or reaches the end of the chain (`null`).

```jsx
function Animal() {}
Animal.prototype.eat = function() {
  console.log("eating");
};

let cat = new Animal();
cat.eat(); // "eating"
```

- Here, `Animal` is a constructor function.
- We add a method `eat` to `Animal.prototype`.
- When we create `cat` as a new instance of `Animal`, it doesn't have an `eat` method on it directly.
- When `cat.eat()` is called, JavaScript looks for `eat` on `cat`.
- `eat` is not found on `cat` itself, so JS looks into `cat`’s prototype (`Animal.prototype`).
- `Animal.prototype` has an `eat` method, which then gets executed.

```jsx
cat  ---->  Animal.prototype  ---->  Object.prototype  ---->  null
```

### 7. Define Data Types ?

→ JavaScript has 8 fundamental data types: String, Number, BigInt, Boolean, undefined, null, Symbol, and Object.

```jsx
let num = 5;// Number
let str = "hello";// String
let obj = { a: 1 };// Object
let bool = false;// Boolean
let n = null;// null
let u = undefined;// undefined
let sym = Symbol("id");// Symbol

```

### 8. Define Pure Function ?

→ **Pure functions** provide predictable outputs for given inputs without causing side effects. They are central to writing clean, maintainable, and testable code in JavaScript.

```jsx
function add(a, b) {
  return a + b;
}
```

### 9. Define Promises ?

⇒ A **Promise** in JavaScript is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. 

⇒ Promises provide a cleaner and more organized way to handle asynchronous tasks, such as network requests, timers, or reading files, compared to the older "callback" approach.

⇒ A Promise is a foundational pattern for managing asynchronous operations in JavaScript, providing a standardized approach to handle success, failure, and chains of asynchronous

 ⇒ Why Use Promises?

- **Cleaner code** compared to deeply nested callbacks (known as "callback hell").
- **Better error handling** (you can catch errors for an entire chain of asynchronous steps).
- **Supports chaining**, making asynchronous logic easier to write and reason about.

---

- **States of a Promise :**

 ⇒   A Promise can be in one of three states:

- **Pending:** The initial state, before the operation has completed.
- **Fulfilled:** The operation completed successfully, and the promise has a resulting value.
- **Rejected:** The operation failed, and the promise has a reason for the failure (usually an error).

```jsx
let checkEven = new Promise((resolve, reject) => {
  let number = 4;
  if (number % 2 === 0) resolve("The number is even!");
  else reject("The number is odd!");
});

checkEven
  .then(message => console.log(message))     // Output: The number is even!
  .catch(error => console.error(error));
```

- **async/await**

Modern JavaScript supports `async` functions and the `await` keyword, which are built on top of promises to make writing asynchronous code look more like synchronous code:

```jsx

async function getData() {
  try {
    let response = await fetch('/resource');
    let data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

```

### 10. Define Callbacks ?

⇒ A **callback** is a function provided to another function to be called at the right time — whether immediately or after an asynchronous operation. It is a central idea in JavaScript for creating 
dynamic, event-driven, and non-blocking programs

**⇒ How Do Callbacks Work?**

- **Passing the function:**
    
    You pass a function as an argument to another function.
    
- **Executing the callback:**
    
    The outer function calls the callback at the appropriate time. This can be immediately (synchronous) or later (asynchronous, such as after an event or a timer).
    

**→ Synchronous Function** 

```jsx
function greet(name, callback) {
  console.log("Hello, " + name);
  callback();
}

function sayBye() {
  console.log("Goodbye!");
}

greet("Sam", sayBye);
// Output:
// Hello, Sam
// Goodbye!
```

`sayBye` is the callback passed to `greet` and is called after the greeting.
****

**→ Asynchronous Callback Example**

Callbacks are essential for handling asynchronous actions in JavaScript, such as timers, HTTP requests, or events.

```jsx
console.log("Start");
setTimeout(function () {
  console.log("Inside setTimeout");
}, 2000);
console.log("End");
// Output:
// Start
// End
// Inside setTimeout (after 2 seconds)

```

the function passed to `setTimeout` is a callback executed after a 2-second delay.

### 11. Define Async and Await ?

**Async :-** 

⇒ The `async` keyword is used before a function to turn it into an **asynchronous function**.

⇒ An async function **always returns a Promise**, regardless of what you return inside

⇒ If you return a non-promise value (like a string or number), JavaScript automatically wraps it in a resolved Promise.

```jsx
async function hello() {
  return "Hello, world!"; // this is wrapped in a Promise
}

hello().then(msg => console.log(msg)); // Output: Hello, world!
```

**Await :-**

 ⇒ The `await` keyword can only be used inside async functions.

 ⇒  `await` pauses the execution of the async function (not the whole program!)
until the Promise settles. Then it resumes and returns the resolved
value.

⇒ This allows you to write **asynchronous code that looks synchronous**, making it easier to read and maintain.