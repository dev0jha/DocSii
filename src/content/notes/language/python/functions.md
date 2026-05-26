---
title: "Python Functions"
description: "Understand functions, parameter passing, scope (LEGB rule), namespaces, pure/impure functions, recursive functions, and lambdas"
category: "language"
topic: "python"
order: 6
tags: ["python", "functions", "scope", "lambda", "recursion"]
lastUpdated: 2026-05-26
---

In Python, a function is a reusable block of code that performs a specific task. Functions help organize code, make it more readable, and avoid repetition.

## Syntax

```python
def function_name(parameters):
    """Docstring (optional)"""
    # Function body
    return value
```

## Key Components

- `def` keyword: Declares a function
- `function_name`: The name you give to your function
- `parameters`: Optional input values (arguments) the function accepts
- `return`: Optional statement that returns a value from the function

## Example

```python
def greet(name):
    """This function greets the person passed in as parameter"""
    return f"Hello, {name}!"

# Calling the function
message = greet("Alice")
print(message)  # Output: Hello, Alice!
```

```python
# Splitting complex functions into smaller functions
def fetch_sales():
  print("Fetching sales data...")

def filter_valid_orders():
  print("Filtering valid orders...")

def summarize_data():
  print("Summarizing data.....")

def generate_report():
  fetch_sales()
  filter_valid_orders()
  summarize_data()
  print("Generating report...")

generate_report()
```

```python
# VAT Calculation Function is defined here
def add_vat(price, vat_rate):
  return price + (price * vat_rate / 100)

order = [100, 200, 300]

for price in order:
  final_price = add_vat(price, 10)
  print(final_price)
```

## Scope and Namespaces

**Scope** determines the visibility and accessibility of variables in different parts of your code. Python follows the **LEGB rule** to resolve variable names.

## LEGB Rule

Python searches for variables in this order:

1. **L**ocal — Inside the current function
2. **E**nclosing — In the enclosing function (for nested functions)
3. **G**lobal — At the module level
4. **B**uilt-in — Python's built-in names

## Types of Scope

### 1. Local Scope

Variables defined inside a function are local to that function.

```python
def my_function():
    x = 10  # Local variable
    print(x)

my_function()  # Output: 10
# print(x)  # Error: x is not defined outside the function
```

### 2. Global Scope

Variables defined outside any function are global.

```python
x = 20  # Global variable

def my_function():
    print(x)  # Can access global variable

my_function()  # Output: 20
print(x)  # Output: 20
```

### 3. Modifying Global Variables

Use the `global` keyword to modify a global variable inside a function.

```python
count = 0  # Global variable

def increment():
    global count
    count += 1

increment()
print(count)  # Output: 1
```

### 4. Enclosing Scope (Nested Functions)

Variables in an outer function are accessible to inner nested functions.

```python
def outer_function():
    x = "outer"  # Enclosing variable
    
    def inner_function():
        print(x)  # Can access enclosing variable
    
    inner_function()

outer_function()  # Output: outer
```

### 5. Using `nonlocal` Keyword

Use `nonlocal` to modify a variable from an enclosing scope.

```python
def outer_function():
    x = 0
    
    def inner_function():
        nonlocal x
        x += 1
        print(f"Inner: {x}")
    
    inner_function()  # Output: Inner: 1
    print(f"Outer: {x}")  # Output: Outer: 1

outer_function()
```

## Namespaces

A **namespace** is a collection of names (variables, functions, classes) and their corresponding objects. Python uses namespaces to avoid naming conflicts.

### Types of Namespaces

1. **Built-in Namespace** — Contains built-in functions like `print()`, `len()`, `range()`
2. **Global Namespace** — Created when a module is loaded, contains module-level names
3. **Local Namespace** — Created when a function is called, destroyed when function returns

```python
# Global namespace
name = "Alice"

def greet():
    # Local namespace
    greeting = "Hello"
    print(f"{greeting}, {name}")

greet()  # Output: Hello, Alice
```

## Best Practices

- Minimize use of global variables
- Keep variables in the smallest scope necessary
- Use descriptive names to avoid confusion
- Be careful when modifying variables from outer scopes

## Types of Functions

### Pure and Impure Functions

- **Pure Function:** Always produces the same output for the same input and has no side effects (does not access/modify global variables).
- **Impure Function:** Accesses or modifies global variables (not recommended).

```python
# Pure function
def pure_chai(cups):
    return cups * 2

# Impure function (not recommended)
total_cups = 5
def impure_chai(cups):
    global total_cups
    total_cups += cups
```

### Recursive Functions

A recursive function is a function that calls itself to solve a problem. It usually has a **base case** to stop the recursion and a **recursive case** to break the problem into smaller subproblems.

```python
def pour_chai(n):
  print(n)
  if n == 0:
    return "No more chai left!"
  return pour_chai(n-1) 

print(pour_chai(5))
```

### Lambda Functions

Lambda functions are anonymous functions that can be defined in a single line. They are often used for short, simple operations that can be expressed in a concise way.

```python
chai_types = ["light","Kadak", "Adrak", "Elaichi", "Ginger"]

strong_chai = list(filter(lambda chai: chai=="Kadak", chai_types))
remove_kadak = list(filter(lambda chai: chai!="Kadak", chai_types))

print(strong_chai)
print(remove_kadak)
```

### Built-In Functions

Built-in functions are functions provided by Python itself to do basic operations like input/output, data type conversion, mathematical calculations, and working with collections.

**Examples:**
- `print()` → displays output
- `input()` → takes user input
- `len()` → returns length of a string, list, etc.
- `type()` → shows the data type of a variable
- `int()`, `float()`, `str()` → convert data types
- `max()`, `min()`, `sum()` → work with numbers
- `range()` → generates a sequence of numbers
- `sorted()` → sorts elements

```python
def generate_bill(chai = 0, samosa = 0):
  """
  Docstring for generate_bill
  
  :param chai: Number of chai cups
  :param samosa: Number of samosas
  :return: Total bill amount
  """
  bill = chai * 10 + samosa * 20
  return bill

# Example usage
total_bill = generate_bill(chai=2, samosa=3)
print(f"Total bill: {total_bill}")
```
