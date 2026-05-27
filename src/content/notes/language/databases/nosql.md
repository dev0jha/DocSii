---
title: "NoSQL Basics"
description: "Introduction to non-relational NoSQL databases, unstructured data, and various NoSQL architectures"
category: "language"
topic: "databases"
order: 3
tags: ["nosql", "unstructured-data", "flexible-schema", "document-store"]
lastUpdated: 2026-05-27
---

NoSQL (Not Only SQL) is a database management system approach used to ingest, store, and retrieve unstructured data and semi-structured data within a database.

The term NoSQL is used to emphasize that these databases can handle non-tabular, non-relational data models as well as support SQL-like query languages.

### Unstructured Database

Unstructured data is data that doesn't have a predefined data model or consistent organization.

In addition, unstructured data, such as social media posts, can update and change rapidly while structured data, such as bank transactions, have a much lower rate of change. Examples of unstructured data include pictures, audio files, videos, and maps.

### NoSQL Database

NoSQL databases are databases that **utilize a flexible schema** that accommodates **unstructured data and semi-structured data** while also utilizing a non-tabular data storage method.

- The use of a flexible schema enables NoSQL databases to ingest unstructured data in its native format (e.g., `.txt`, `.jpg`, `.mp3`), which is not possible with SQL databases due to the requirement that all data align to a predefined format.
- Further, when NoSQL databases store data, flexible data models are employed so that unstructured data files can have different data structures and still be stored within the same collection.

### Types of NoSQL Databases

NoSQL databases are typically grouped into four main architectural types:

1. **Document Databases** - Store semi-structured data as documents (typically JSON/BSON format, e.g. MongoDB).
2. **Key-Value Databases** - Store data as simple key-value pairs (excellent for caching, e.g. Redis).
3. **Column-Family Stores** - Store data tables as columns rather than rows (highly scalable, e.g. Cassandra).
4. **Graph Databases** - Store data as nodes and edges to emphasize connections between entities (e.g. Neo4j).
