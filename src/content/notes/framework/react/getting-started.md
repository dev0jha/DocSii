---
title: "React: Getting Started"
description: "Introduction to building UIs with React"
category: "framework"
topic: "react"
order: 1
tags: ["react", "frontend", "ui"]
lastUpdated: 2026-03-10
---

React is a JavaScript library for building user interfaces.

## Your First Component

```jsx
function Welcome() {
  return <h1>Hello from React!</h1>;
}
```

## useState Hook

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
}
```
