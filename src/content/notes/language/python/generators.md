---
title: "Python Generators"
description: "Learn how to use generators and yield in Python for memory-efficient iteration"
category: "language"
topic: "python"
order: 7
tags: ["python", "generators", "yield", "iteration"]
lastUpdated: 2026-05-26
---

A **Generator** in Python is a special type of function that returns an iterator object. Instead of computing all values at once and returning them in a list, a generator **yields** one value at a time, pausing execution until the next value is requested.

This makes generators extremely **memory-efficient**, especially when working with large datasets or infinite streams.

## The `yield` Keyword

The `yield` statement is used inside a function like `return`, but instead of terminating the function, it pauses the function's execution and returns a value to the caller. When the caller asks for the next value, the function resumes right after the `yield` statement.

### Basic Example:

```python
def simple_generator():
    yield "First"
    yield "Second"
    yield "Third"

# Create the generator object
gen = simple_generator()

# Iterate using next()
print(next(gen))  # Output: First
print(next(gen))  # Output: Second
print(next(gen))  # Output: Third

# Calling next() again would raise StopIteration
```

You can also iterate over a generator using a standard `for` loop:

```python
for item in simple_generator():
    print(item)
```

## Generator vs. List

Let's look at how much memory is saved when using a generator compared to a traditional list.

### 1. The List Approach (High Memory Usage)
Creates the entire list of 1 million integers in memory:

```python
def get_numbers_list(n):
    result = []
    for i in range(n):
        result.append(i)
    return result

# This stores 1,000,000 integers in memory
numbers = get_numbers_list(1000000)
```

### 2. The Generator Approach (Low Memory Usage)
Yields one integer at a time, using virtually no memory:

```python
def get_numbers_generator(n):
    for i in range(n):
        yield i

# This only creates a generator object, no integers are stored in memory yet
numbers_gen = get_numbers_generator(1000000)

# We can consume them one by one
print(next(numbers_gen))  # 0
print(next(numbers_gen))  # 1
```

## Generator Expressions

Similar to list comprehensions, you can create generators in a single line using parentheses `()` instead of square brackets `[]`.

```python
# List comprehension (creates list in memory)
squares_list = [x**2 for x in range(10)]
print(squares_list)  # [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]

# Generator expression (memory-efficient)
squares_gen = (x**2 for x in range(10))
print(squares_gen)  # <generator object <genexpr> at 0x...>

for square in squares_gen:
    print(square)
```

## When to Use Generators?

- **Large Datasets:** When you need to read massive files (like CSVs or log files) line-by-line.
- **Infinite Streams:** When generating infinite sequences (e.g., Fibonacci sequence, data streams).
- **Pipelines:** Chaining multiple data processing steps together without intermediate storage.
