---
title: "Docker Introduction"
description: "Containerization basics with Docker"
category: "tool"
topic: "docker"
order: 1
tags: ["docker", "containers", "devops"]
lastUpdated: 2026-02-28
---

Docker is a platform for developing, shipping, and running applications in containers.

## Key Concepts

- **Image**: A read-only template
- **Container**: A runnable instance of an image
- **Dockerfile**: A script to build an image

## Example Dockerfile

```dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
CMD ["npm", "start"]
```
