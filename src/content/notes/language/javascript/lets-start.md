---
title: "JavaScript Basics - Let's Start"
description: "Introduction to JavaScript, including what it is, client-side vs server-side scripting, and how to get started."
category: "language"
topic: "javascript"
order: 2
tags: ["javascript", "basics", "getting-started"]
lastUpdated: 2026-06-05
---

# LETS START

`Console.log("Hello World ")` 

`Console.log("Hello World ")` is a JavaScript statement used to output the string "Hello World" to the browser's console. It's commonly used as a first programming example when learning JavaScript or for testing that code is executing properly.

## **What is JavaScript?**

JavaScript is a cross-platform, object-oriented scripting language used to make webpages interactive (e.g., having complex animations, clickable buttons, popup menus, etc.). There are also more advanced server side versions of JavaScript such as Node.js, which allow you to add more functionality to a website than downloading files (such as realtime collaboration between multiple computers).

JavaScript contains a standard library of objects, such as `Array`, `Map`, and `Math`, and a core set of language elements such as operators, control structures, and statements.

- *Client-side JavaScript* extends the core language by supplying objects to control a browser and its *Document Object Model* (DOM). For example, client-side extensions allow an application to place elements on an HTML form and respond to user events such as mouse clicks, form input, and page navigation. {FRONTEND DEV}
- *Server-side JavaScript* extends the core language by supplying objects relevant to running JavaScript on a server. For example, server-side extensions allow an application to communicate with a database, provide continuity of information from one invocation to another of the application, or perform file manipulations on a server. {BACKENED DEV}

![](https://images.prismic.io/prismic-main/ZjhPlEMTzAJOCi_n_CSR.png?auto=format%2Ccompress&fit=max&w=3840)

![](https://images.prismic.io/prismic-main/ZjhQ5EMTzAJOCi_3_SSR.jpeg?auto=format%2Ccompress&fit=max&w=3840)

**Difference between client-side scripting and server-side scripting :**

| **Client-side scripting** | **Server-side scripting** |
| --- | --- |
| Source code is visible to the user. | Source code is not visible to the user because its output of server-side is an HTML page. |
| Its main function is to provide the requested output to the end user. | Its primary function is to manipulate and provide access to the respective database as per the request. |
| It usually depends on the browser and its version. | In this any server-side technology can be used and it does not depend on the client. |
| It runs on the user's computer. | It runs on the webserver. |
| There are many advantages linked with this like faster. response times, a more interactive application. | The primary advantage is its ability to highly customize, response requirements, access rights based on user. |
| It does not provide security for data. | It provides more security for data. |
| It is a technique used in web development in which scripts run on the client's browser. | It is a technique that uses scripts on the webserver to produce a response that is customized for each client's request. |
| HTML, CSS, and JavaScript are used. | PHP, Python, Java, Ruby are used. |
| No need of interaction with the server. | It is all about interacting with the servers. |
| It reduces load on processing unit of the server. | It surge the processing load on the server. |

## **Grammar and types**

- Basis :- JavaScript is **case-sensitive** and uses the **Unicode** character set. For example, the word Früh (which means "early" in German) could be used as a variable name.

```jsx
const Früh = "foobar";

```

But, the variable `früh` is not the same as `Früh` because JavaScript is case sensitive.

- Comment :- The syntax of **comments** 👇

```jsx
// this is my space 
```

## Declaration

- [**Variables](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variables) :  It is used to store the value .** The names of variables, called [identifiers](https://developer.mozilla.org/en-US/docs/Glossary/Identifier), conform to certain rules. You can declare a variable in two ways:
- With the keyword [`var`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/var). For example, `var x = 42`. This syntax can be used to declare both **local** and **global** variables, depending on the *execution context*.
- With the keyword [`const`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const) or [`let`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let). For example, `let y = 13`. This syntax can be used to declare a block-scope local variable. (See [Variable scope](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_scope) below.)
- In a statement like `let x = 42`, the `let x` part is called a *declaration*, and the `= 42` part is called an *initializer*.
- [Variable hoisting](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#variable_hoisting) : `var`-declared variables are [hoisted](https://developer.mozilla.org/en-US/docs/Glossary/Hoisting), meaning you can refer to the variable anywhere in its scope, even if its declaration isn't reached yet.

## Data Structure and types

- Boolean :- In computer science, a **Boolean** is a logical data type that can have only the values `true` or `false`.

```jsx
/* JavaScript if statement */
if (boolean conditional) {
  // code to execute if the conditional is true
}

if (boolean conditional) {
  console.log("boolean conditional resolved to true");
} else {
  console.log("boolean conditional resolved to false");
}

/* JavaScript for loop */
for (control variable; boolean conditional; counter) {
  // code to execute repeatedly if the conditional is true
}

```

- Null :-  a **`null`** value represents a reference that points, generally intentionally, to a nonexistent or invalid [object](https://developer.mozilla.org/en-US/docs/Glossary/Object) or address. The meaning of a null reference varies among language implementations.
    
    ```jsx
    console.log(typeof.null); //undefined 
    ```
    
- [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined). A top-level property whose value is not defined.
- [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number). An integer or floating point number. For example: `42` or `3.14159`.
- [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt). An integer with arbitrary precision. For example: `9007199254740992n`.
- [String](https://developer.mozilla.org/en-US/docs/Glossary/String). A sequence of characters that represent a text value. For example: `"Howdy"`.
- [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol). A data type whose instances are unique and immutable.

## Loops

We use Loop for related action ……

Ex - we use to print 20000 star then how many time we  can use console.log(), then we need loop

### Different types of loops : -

- FOR LOOP :- A block of code which help to do repeated operation by given condition
- FOR IN :- It loops through the keys of an object
- FOR OF :- It loops through the value of an object
- WHILE LOOP :- It loops a block based on specific condition
- DO-WHILE LOOP :- While loop  runs atleast once

### FOR LOOP

```jsx
for(let i = 0; i < 34; i++){
  console.log(i);
}
/*output
0-33 */
```

### FOR IN LOOP

```jsx
const person = {name: "John", age: 30, city: "New York"};

for(let key in person) {
  console.log(key + ": " + person[key]);
}
/*output
name: John
age: 30
city: New York */
```

### FOR OF LOOP

```jsx
const fruits = ["apple", "banana", "orange"];

for(let fruit of fruits) {
  console.log(fruit);
}
/*output
apple
banana
orange */
```

### WHILE LOOP

```jsx
let count = 0;
while(count < 5) {
  console.log(count);
  count++;
}
/*output
0
1
2
3
4 */
```

### DO-WHILE LOOP

```jsx
let num = 0;
do {
  console.log(num);
  num++;
} while(num < 3);
/*output
0
1
2 */
```

## Control Flow and Error Handling

### IF...ELSE Statement

```jsx
let age = 18;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are a minor");
}
```

### ELSE IF Statement

```jsx
let score = 85;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}
```

### SWITCH Statement

```jsx
let day = 3;
let dayName;

switch(day) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  default:
    dayName = "Unknown";
}
console.log(dayName); // Wednesday
```

### TERNARY Operator

```jsx
let age = 20;
let status = (age >= 18) ? "Adult" : "Minor";
console.log(status); // Adult
```

### TRY...CATCH Statement

```jsx
try {
  let result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("An error occurred:", error.message);
} finally {
  console.log("This always executes");
}
```

## Functions

Functions are reusable blocks of code that perform specific tasks.

### Function Declaration

```jsx
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Hello, Alice!
```

### Function Expression

```jsx
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3)); // 8
```

### Arrow Functions

```jsx
const multiply = (a, b) => a * b;
console.log(multiply(4, 5)); // 20

// With multiple lines
const calculateArea = (length, width) => {
  const area = length * width;
  return area;
};
```

### Default Parameters

```jsx
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}

console.log(greet()); // Hello, Guest!
console.log(greet("John")); // Hello, John!
```

### Rest Parameters

```jsx
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10
```

### IIFE (Immediately Invoked Function Expression)

```jsx
(function() {
  console.log("This runs immediately!");
})();
```

## Arrays

Arrays are ordered collections of values.

### Creating Arrays

```jsx
const fruits = ["apple", "banana", "orange"];
const numbers = new Array(1, 2, 3, 4, 5);
const mixed = [1, "hello", true, null, {name: "John"}];
```

### Array Methods

**Adding/Removing Elements:**

```jsx
let arr = [1, 2, 3];

// push - add to end
arr.push(4); // [1, 2, 3, 4]

// pop - remove from end
arr.pop(); // [1, 2, 3]

// unshift - add to beginning
arr.unshift(0); // [0, 1, 2, 3]

// shift - remove from beginning
arr.shift(); // [1, 2, 3]

// splice - add/remove at any position
arr.splice(1, 1, 5); // [1, 5, 3] (removed 1 element at index 1, added 5)
```

**Searching Arrays:**

```jsx
let numbers = [1, 2, 3, 4, 5];

// indexOf
numbers.indexOf(3); // 2

// includes
numbers.includes(4); // true

// find
let found = numbers.find(num => num > 3); // 4

// findIndex
let index = numbers.findIndex(num => num > 3); // 3
```

**Iterating Arrays:**

```jsx
let fruits = ["apple", "banana", "orange"];

// forEach
fruits.forEach(fruit => console.log(fruit));

// map - creates new array
let upperFruits = [fruits.map](http://fruits.map)(fruit => fruit.toUpperCase());
// ["APPLE", "BANANA", "ORANGE"]

// filter - creates new array with filtered elements
let longNames = fruits.filter(fruit => fruit.length > 5);
// ["banana", "orange"]

// reduce - reduces to single value
let numbers = [1, 2, 3, 4];
let sum = numbers.reduce((total, num) => total + num, 0); // 10
```

**Other Useful Methods:**

```jsx
let arr = [3, 1, 4, 1, 5];

// sort
arr.sort((a, b) => a - b); // [1, 1, 3, 4, 5]

// reverse
arr.reverse(); // [5, 4, 3, 1, 1]

// slice - extract portion (doesn't modify original)
let sliced = arr.slice(1, 3); // [4, 3]

// concat - merge arrays
let arr1 = [1, 2];
let arr2 = [3, 4];
let merged = arr1.concat(arr2); // [1, 2, 3, 4]

// join - convert to string
let str = arr.join(", "); // "5, 4, 3, 1, 1"

// some - checks if at least one element passes test
arr.some(num => num > 4); // true

// every - checks if all elements pass test
arr.every(num => num > 0); // true
```

## Objects

Objects are collections of key-value pairs.

### Creating Objects

```jsx
// Object literal
const person = {
  name: "John",
  age: 30,
  city: "New York"
};

// Object constructor
const car = new Object();
car.brand = "Toyota";
car.model = "Camry";
```

### Accessing Object Properties

```jsx
const person = {name: "John", age: 30};

// Dot notation
console.log([person.name](http://person.name)); // John

// Bracket notation
console.log(person["age"]); // 30

// Useful for dynamic property names
let prop = "name";
console.log(person[prop]); // John
```

### Object Methods

```jsx
const person = {
  name: "John",
  age: 30,
  greet: function() {
    return `Hello, I'm ${[this.name](http://this.name)}`;
  },
  // ES6 method shorthand
  celebrate() {
    this.age++;
  }
};

console.log(person.greet()); // Hello, I'm John
```

### Object Destructuring

```jsx
const person = {name: "John", age: 30, city: "NYC"};

// Destructuring
const {name, age} = person;
console.log(name); // John
console.log(age); // 30

// With different variable names
const {name: personName} = person;
console.log(personName); // John
```

### Spread Operator with Objects

```jsx
const person = {name: "John", age: 30};
const details = {city: "NYC", country: "USA"};

// Merge objects
const fullInfo = {...person, ...details};
// {name: "John", age: 30, city: "NYC", country: "USA"}

// Copy object
const personCopy = {...person};
```

### Object.keys, values, entries

```jsx
const person = {name: "John", age: 30, city: "NYC"};

// Object.keys - returns array of keys
Object.keys(person); // ["name", "age", "city"]

// Object.values - returns array of values
Object.values(person); // ["John", 30, "NYC"]

// Object.entries - returns array of [key, value] pairs
Object.entries(person); 
// [["name", "John"], ["age", 30], ["city", "NYC"]]
```

## Strings

### String Methods

```jsx
let text = "Hello World";

// length
text.length; // 11

// toLowerCase/toUpperCase
text.toLowerCase(); // "hello world"
text.toUpperCase(); // "HELLO WORLD"

// includes
text.includes("World"); // true

// startsWith/endsWith
text.startsWith("Hello"); // true
text.endsWith("World"); // true

// indexOf/lastIndexOf
text.indexOf("o"); // 4
text.lastIndexOf("o"); // 7

// slice
text.slice(0, 5); // "Hello"
text.slice(-5); // "World"

// substring
text.substring(0, 5); // "Hello"

// replace
text.replace("World", "JavaScript"); // "Hello JavaScript"

// split
text.split(" "); // ["Hello", "World"]

// trim
let spaced = "  hello  ";
spaced.trim(); // "hello"

// repeat
"Ha".repeat(3); // "HaHaHa"

// padStart/padEnd
"5".padStart(3, "0"); // "005"
"5".padEnd(3, "0"); // "500"
```

### Template Literals

```jsx
const name = "John";
const age = 30;

// Template literal with interpolation
const message = `My name is ${name} and I am ${age} years old.`;

// Multi-line strings
const multiline = `
This is line 1
This is line 2
This is line 3
`;
```

## Operators

### Arithmetic Operators

```jsx
let a = 10, b = 3;

a + b; // 13 (Addition)
a - b; // 7 (Subtraction)
a * b; // 30 (Multiplication)
a / b; // 3.333... (Division)
a % b; // 1 (Modulus/Remainder)
a ** b; // 1000 (Exponentiation)

// Increment/Decrement
let x = 5;
x++; // x = 6 (Post-increment)
++x; // x = 7 (Pre-increment)
x--; // x = 6 (Post-decrement)
--x; // x = 5 (Pre-decrement)
```

### Assignment Operators

```jsx
let x = 10;

x += 5; // x = 15 (x = x + 5)
x -= 3; // x = 12 (x = x - 3)
x *= 2; // x = 24 (x = x * 2)
x /= 4; // x = 6 (x = x / 4)
x %= 4; // x = 2 (x = x % 4)
x **= 3; // x = 8 (x = x ** 3)
```

### Comparison Operators

```jsx
// Equal to (loose equality)
5 == "5"; // true (type coercion)

// Strict equal to
5 === "5"; // false (no type coercion)
5 === 5; // true

// Not equal to
5 != "5"; // false

// Strict not equal to
5 !== "5"; // true

// Greater than/Less than
10 > 5; // true
10 < 5; // false
10 >= 10; // true
10 <= 9; // false
```

### Logical Operators

```jsx
// AND (&&)
true && true; // true
true && false; // false

// OR (||)
true || false; // true
false || false; // false

// NOT (!)
!true; // false
!false; // true

// Nullish coalescing (??)
let value = null;
let result = value ?? "default"; // "default"

let value2 = 0;
let result2 = value2 ?? "default"; // 0 (0 is not null/undefined)
```

### Type Operators

```jsx
// typeof
typeof 42; // "number"
typeof "hello"; // "string"
typeof true; // "boolean"
typeof undefined; // "undefined"
typeof null; // "object" (historical bug)
typeof []; // "object"
typeof {}; // "object"
typeof function(){}; // "function"

// instanceof
let arr = [1, 2, 3];
arr instanceof Array; // true
arr instanceof Object; // true
```

## Scope and Closures

### Variable Scope

```jsx
// Global scope
let globalVar = "I'm global";

function myFunction() {
  // Function scope
  let functionVar = "I'm in function scope";
  
  if (true) {
    // Block scope
    let blockVar = "I'm in block scope";
    console.log(blockVar); // Accessible
  }
  
  // console.log(blockVar); // Error: blockVar is not defined
}

console.log(globalVar); // Accessible
// console.log(functionVar); // Error: functionVar is not defined
```

### Closures

```jsx
function outer() {
  let count = 0;
  
  function inner() {
    count++;
    console.log(count);
  }
  
  return inner;
}

const counter = outer();
counter(); // 1
counter(); // 2
counter(); // 3
// inner() has access to outer's variables even after outer() has finished
```

## This Keyword

The `this` keyword refers to the object that is executing the current function.

```jsx
// In global context
console.log(this); // Window (in browser) or global (in Node.js)

// In object method
const person = {
  name: "John",
  greet: function() {
    console.log([this.name](http://this.name)); // "John" (this refers to person object)
  }
};

// Arrow functions don't have their own 'this'
const person2 = {
  name: "Alice",
  greet: () => {
    console.log([this.name](http://this.name)); // undefined (this refers to outer scope)
  }
};

// In constructor function
function Person(name) {
  [this.name](http://this.name) = name;
  this.greet = function() {
    console.log([this.name](http://this.name));
  };
}

const john = new Person("John");
john.greet(); // "John"
```

## Strict Mode

Strict mode makes JavaScript more secure and helps catch common errors.

```jsx
"use strict";

// Prevents using undeclared variables
x = 10; // Error: x is not defined

// Prevents deleting variables
let y = 10;
delete y; // Error

// Prevents duplicate parameter names
function sum(a, a, b) { // Error
  return a + a + b;
}

// Makes 'this' undefined in functions
function myFunc() {
  console.log(this); // undefined (instead of global object)
}
```

## JSON (JavaScript Object Notation)

JSON is a lightweight data interchange format.

```jsx
// JavaScript object to JSON string
const person = {name: "John", age: 30, city: "NYC"};
const jsonString = JSON.stringify(person);
console.log(jsonString); // '{"name":"John","age":30,"city":"NYC"}'

// JSON string to JavaScript object
const parsed = JSON.parse(jsonString);
console.log([parsed.name](http://parsed.name)); // "John"

// Pretty print JSON
const prettyJson = JSON.stringify(person, null, 2);
console.log(prettyJson);
/*
{
  "name": "John",
  "age": 30,
  "city": "NYC"
}
*/
```

## Math Object

```jsx
// Constants
Math.PI; // 3.141592653589793
Math.E; // 2.718281828459045

// Rounding
Math.round(4.7); // 5
Math.ceil(4.1); // 5 (rounds up)
Math.floor(4.9); // 4 (rounds down)
Math.trunc(4.9); // 4 (removes decimal)

// Power and roots
Math.pow(2, 3); // 8 (2^3)
Math.sqrt(16); // 4
Math.cbrt(27); // 3 (cube root)

// Min/Max
Math.min(1, 2, 3, 4); // 1
Math.max(1, 2, 3, 4); // 4

// Random
Math.random(); // Random number between 0 and 1
Math.floor(Math.random() * 10); // Random integer from 0 to 9
Math.floor(Math.random() * 100) + 1; // Random integer from 1 to 100

// Absolute value
Math.abs(-5); // 5

// Trigonometry
Math.sin(Math.PI / 2); // 1
Math.cos(0); // 1
Math.tan(Math.PI / 4); // 1
```

## Date Object

```jsx
// Current date and time
const now = new Date();
console.log(now);

// Specific date
const date1 = new Date("2025-12-27");
const date2 = new Date(2025, 11, 27); // Month is 0-indexed
const date3 = new Date(2025, 11, 27, 10, 30, 0); // With time

// Get date components
const today = new Date();
today.getFullYear(); // 2025
today.getMonth(); // 0-11 (0 = January)
today.getDate(); // 1-31
today.getDay(); // 0-6 (0 = Sunday)
today.getHours(); // 0-23
today.getMinutes(); // 0-59
today.getSeconds(); // 0-59
today.getMilliseconds(); // 0-999
today.getTime(); // Milliseconds since Jan 1, 1970

// Set date components
today.setFullYear(2026);
today.setMonth(5); // June
today.setDate(15);
today.setHours(14, 30, 0); // 2:30:00 PM

// Date arithmetic
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);

// Format date
const date = new Date();
date.toDateString(); // "Sat Dec 27 2025"
date.toTimeString(); // "12:30:00 GMT+0530 (India Standard Time)"
date.toISOString(); // "2025-12-27T07:00:00.000Z"
date.toLocaleString(); // "12/27/2025, 12:30:00 PM" (locale-specific)
```

## Regular Expressions

Regular expressions are patterns used to match character combinations in strings.

```jsx
// Creating regex
const regex1 = /hello/i; // i flag = case insensitive
const regex2 = new RegExp("hello", "i");

// test() - returns true/false
const pattern = /javascript/i;
pattern.test("I love JavaScript"); // true

// exec() - returns match details or null
const result = /\d+/.exec("Price: 100 dollars");
console.log(result[0]); // "100"

// String methods with regex
const text = "The quick brown fox";

// match()
text.match(/quick/); // ["quick"]
text.match(/\w+/g); // ["The", "quick", "brown", "fox"]

// search() - returns index
[text.search](http://text.search)(/brown/); // 10

// replace()
text.replace(/fox/, "dog"); // "The quick brown dog"
text.replace(/\s/g, "-"); // "The-quick-brown-fox"

// split()
text.split(/\s/); // ["The", "quick", "brown", "fox"]

// Common patterns
/\d/; // Any digit
/\D/; // Any non-digit
/\w/; // Any word character (a-z, A-Z, 0-9, _)
/\W/; // Any non-word character
/\s/; // Any whitespace
/\S/; // Any non-whitespace
/^start/; // Start of string
/end$/; // End of string
/[a-z]/; // Any lowercase letter
/[0-9]{3}/; // Exactly 3 digits
/(cat|dog)/; // cat or dog
```

## Set and Map

### Set

A Set is a collection of unique values.

```jsx
// Creating a Set
const mySet = new Set([1, 2, 3, 3, 4]);
console.log(mySet); // Set {1, 2, 3, 4} (duplicates removed)

// Add values
mySet.add(5);
mySet.add(3); // Won't add duplicate

// Check if value exists
mySet.has(3); // true

// Delete value
mySet.delete(2);

// Size
mySet.size; // 4

// Clear all
mySet.clear();

// Iterate
const fruits = new Set(["apple", "banana", "orange"]);
fruits.forEach(fruit => console.log(fruit));

for(let fruit of fruits) {
  console.log(fruit);
}

// Convert Set to Array
const arr = [...fruits];
const arr2 = Array.from(fruits);
```

### Map

A Map is a collection of key-value pairs where keys can be any type.

```jsx
// Creating a Map
const myMap = new Map();

// Set values
myMap.set("name", "John");
myMap.set(1, "number key");
myMap.set(true, "boolean key");

// Get values
myMap.get("name"); // "John"
myMap.get(1); // "number key"

// Check if key exists
myMap.has("name"); // true

// Delete
myMap.delete(1);

// Size
myMap.size; // 2

// Clear all
myMap.clear();

// Initialize with entries
const map = new Map([
  ["name", "Alice"],
  ["age", 25],
  ["city", "NYC"]
]);

// Iterate
map.forEach((value, key) => {
  console.log(`${key}: ${value}`);
});

for(let [key, value] of map) {
  console.log(`${key}: ${value}`);
}

// Get keys, values, entries
map.keys(); // MapIterator {"name", "age", "city"}
map.values(); // MapIterator {"Alice", 25, "NYC"}
map.entries(); // MapIterator {["name", "Alice"], ["age", 25], ...}
```

## Destructuring

### Array Destructuring

```jsx
const colors = ["red", "green", "blue"];

// Basic destructuring
const [first, second, third] = colors;
console.log(first); // "red"

// Skip elements
const [, , third] = colors;
console.log(third); // "blue"

// Rest operator
const [first, ...rest] = colors;
console.log(rest); // ["green", "blue"]

// Default values
const [a, b, c, d = "yellow"] = colors;
console.log(d); // "yellow"

// Swapping variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log(x, y); // 2 1
```

### Object Destructuring

```jsx
const person = {name: "John", age: 30, city: "NYC"};

// Basic destructuring
const {name, age} = person;
console.log(name); // "John"

// Rename variables
const {name: personName, age: personAge} = person;
console.log(personName); // "John"

// Default values
const {name, country = "USA"} = person;
console.log(country); // "USA"

// Nested destructuring
const user = {
  id: 1,
  details: {
    name: "Alice",
    email: "[alice@example.com](mailto:alice@example.com)"
  }
};

const {details: {name, email}} = user;
console.log(name); // "Alice"

// Function parameters
function greet({name, age}) {
  console.log(`${name} is ${age} years old`);
}

greet(person); // "John is 30 years old"
```