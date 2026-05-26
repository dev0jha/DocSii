---
title: "Python Loops"
description: "Learn about for loops, while loops, and loop control statements (break, continue, pass)"
category: "language"
topic: "python"
order: 5
tags: ["python", "loops", "control-flow", "for-loop", "while-loop"]
lastUpdated: 2026-05-26
---

Loops in Python are control flow structures that allow you to **execute a block of code repeatedly** based on certain conditions. They help automate repetitive tasks and iterate over collections of data.

## Types of Loops

Python provides two main types of loops:

### For Loop

The `for` loop is used to **iterate over a sequence** (like a list, tuple, string, or range) or any iterable object.

**Syntax:**

```python
for variable in sequence:
    # code block to execute
```

**Examples:**

```python
# Iterating over a list
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Using range()
for i in range(5):
    print(i)  # Prints 0, 1, 2, 3, 4

# Iterating over a string
for char in "Python":
    print(char)
```

### While Loop

The `while` loop executes a block of code **as long as a condition is true**.

**Syntax:**

```python
while condition:
    # code block to execute
```

**Example:**

```python
count = 0
while count < 5:
    print(count)
    count += 1  # Important: update the condition variable
```

> [!WARNING]
> **Warning:** Be careful with while loops! If the condition never becomes false, you'll create an infinite loop.

## Loop Control Statements

Python provides special statements to control loop execution:

### break

Terminates the loop entirely and transfers control to the statement immediately following the loop.

```python
for i in range(10):
    if i == 5:
        break
    print(i)  # Prints 0, 1, 2, 3, 4
```

### continue

Skips the rest of the current iteration and moves to the next iteration.

```python
for i in range(5):
    if i == 2:
        continue
    print(i)  # Prints 0, 1, 3, 4 (skips 2)
```

### pass

A null operation - nothing happens when it executes. Used as a placeholder.

```python
for i in range(5):
    if i == 2:
        pass  # Do nothing for now
    print(i)  # Prints 0, 1, 2, 3, 4
```

## Loop with else Clause

Python loops can have an optional `else` clause that executes when the loop completes normally (not terminated by `break`).

```python
for i in range(5):
    print(i)
else:
    print("Loop completed successfully!")

# With break
for i in range(5):
    if i == 3:
        break
    print(i)
else:
    print("This won't print")  # else is skipped when break is used
```

## Nested Loops

You can place one loop inside another loop.

```python
for i in range(3):
    for j in range(2):
        print(f"i={i}, j={j}")
```
