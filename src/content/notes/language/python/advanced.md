---
title: "Advanced Python Concepts"
description: "Deep dive into advanced Python features"
category: "language"
topic: "python"
order: 2
tags: ["python", "advanced", "decorators", "generators"]
lastUpdated: 2026-02-10
---

## Decorators

```python
def my_decorator(func):
    def wrapper():
        print("Something before")
        func()
        print("Something after")
    return wrapper

@my_decorator
def say_hello():
    print("Hello!")
```

## Generators

```python
def count_up_to(n):
    i = 0
    while i < n:
        yield i
        i += 1

for num in count_up_to(5):
    print(num)
```
