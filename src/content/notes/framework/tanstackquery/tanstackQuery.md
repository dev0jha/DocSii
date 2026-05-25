---
title: "TanStack Query"
description: "A modern, declarative library for managing and caching server state in web applications"
category: "framework"
topic: "tanstackquery"
order: 2
tags: ["tanstack-query", "react-query", "framework", "state-management"]
lastUpdated: 2026-05-25
---

**TanStack Query** (formerly React Query) is a modern library for managing **server state** in React, Vue, and Solid applications. It provides a battle-tested system for handling asynchronous data—data that doesn't fit cleanly within a component tree and changes constantly.

Managing server state with traditional tools like `useState` and `useEffect` is often a "nightmare" that leads to repetitive, messy "spaghetti code."

TanStack Query replaces this imperative approach with a **declarative API**, letting developers focus on application logic rather than the mechanics of data fetching.

### It solves common challenges:

- **Automatic Caching**: Stores API results to reduce unnecessary network calls and intelligently manages data freshness.
- **Background Updates**: Refetches data automatically when a user refocuses the window or when a component mounts.
- **State Management**: Handles loading, error, and success states out of the box—no need to manually track them with `useState`.
- **Request Deduplication**: When multiple components request the same data, it fetches only once.

---

## 1. Queries (`useQuery`)

### Definition

A **query** **fetches (reads) data from a server** and keeps it synchronized with the UI automatically.

### Key Points

- Runs automatically (declarative)
- Handles loading, error, and success states
- Caches and deduplicates requests

### Code Example

```tsx
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

function fetchUsers() {
  return axios.get('https://jsonplaceholder.typicode.com/users')
}

function Users() {
  const {
    data,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers
  })

  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error: {error.message}</p>

  return (
    <ul>
      {data.data.map(user => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  )
}
```

**What happens here:**

- Data fetches automatically
- Results are cached using `['users']`
- No `useState` or `useEffect` required

---

## 2. Mutations (`useMutation`)

### Definition

A **mutation** is used to **create, update, or delete data** on the server.

### Key Points

- Runs only when triggered (imperative)
- Used for CRUD operations
- Supports side effects like query invalidation

### Code Example

```jsx
import { useMutation, useQueryClient } from '@tanstack/react-query'
import axios from 'axios'

function addUser(user) {
  return axios.post('https://jsonplaceholder.typicode.com/users', user)
}

function AddUser() {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn: addUser,
    onSuccess: () => {
      // Refetch users after adding
      queryClient.invalidateQueries({ queryKey: ['users'] })
    }
  })

  return (
    <button onClick={() =>
        mutation.mutate({ name: 'New User' })
      }
    >
      Add User
    </button>
  )
}
```

**What happens here:**

- Mutation runs on button click
- On success, cached `users` query is invalidated

---

## 3. Query Keys

### Definition

**Query keys** uniquely identify cached data in TanStack Query.

### Key Points

- Usually arrays
- Enable caching, refetching, and invalidation
- Can be hierarchical

### Code Example

```jsx
useQuery({
  queryKey: ['user', userId],
  queryFn: () => fetchUserById(userId)
})
```

### Partial Keys

```jsx
queryClient.invalidateQueries({ queryKey: ['user'] })
```

✅ This invalidates:

- `['user', 1]`
- `['user', 2]`

---

## 4. Query Invalidation

### Definition

Query invalidation **marks cached data as stale** so it can be refetched.

### Key Points

- Keeps UI in sync with server
- Usually triggered after mutations
- Does not always refetch immediately

### Code Example

```jsx
const queryClient = useQueryClient()

queryClient.invalidateQueries({ queryKey: ['users'] })
```

### Inside a Mutation

```jsx
useMutation({
  mutationFn: updateUser,
  onSuccess: () => {
    queryClient.invalidateQueries({ queryKey: ['users'] })
  }
})
```

**Result:**

- Cached data becomes stale
- Fresh data is fetched when needed

---

## 5. `staleTime` and `cacheTime`

### Definition

These options control **data freshness and cache lifespan**.

---

### `staleTime`

```jsx
useQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
  staleTime: 1000 * 60 * 5 // 5 minutes
})
```

✔ Data is considered **fresh for 5 minutes**

✔ No background refetch during this time

---

### `cacheTime`

```jsx
useQuery({
  queryKey: ['posts'],
  queryFn: fetchPosts,
  cacheTime: 1000 * 60 * 10 // 10 minutes
})
```

✔ Data stays in cache **even if component unmounts**

✔ Removed after 10 minutes of inactivity

---

## 6. Server State vs Client State (Big Picture)

### Definition

TanStack Query is for **server state**, not client state.

### Server State

- Data from APIs
- Cached, async, shared
- Managed by TanStack Query

### Client State

- UI state (theme, modal open, auth flags)
- Managed by Redux, Zustand, Context API

### Example

```jsx
// Server state → TanStack Query
const { data } = useQuery({ queryKey: ['users'], queryFn: fetchUsers })

// Client state → useState / Zustand
const [isOpen, setIsOpen] = useState(false)
```
