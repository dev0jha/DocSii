# DocSii

A single-author personal documentation site for publishing curated notes, built with Astro.

## Language

**DocSii**:
The name of the site itself.
_Avoid_: Personal Documentation Site, docsii, docsii-site

**Dev Hari Ojha**:
The sole author of all content on the site.
_Avoid_: Admin, user, editor

**Note**:
A single piece of written content published as a page on the site. Each note belongs to exactly one category and may optionally belong to a sub-topic.
_Avoid_: Article, post, entry

**Category**:
A top-level grouping of notes by the nature of the technology (e.g., `language`, `tool`, `framework`). Derived from the first-level content directory.

**Topic**:
An optional sub-grouping within a category representing a specific subject or technology (e.g., `python`, `git-and-github`, `react`). Represented as a subdirectory.

## Relationships

- **DocSii** is authored exclusively by **Dev Hari Ojha**
- A **Note** belongs to exactly one **Category**
- A **Note** may optionally belong to a **Topic** (which nests within a **Category**)

## Example dialogue

> **Dev:** "When I create a new **Note** under `notes/language/python/basics.md`, does the sidebar auto-generate the nesting?"
> **Domain expert:** "Yes — the **Category** is `language`, the **Topic** is `python`, and the sidebar reflects that hierarchy based on the directory structure and frontmatter `order`."

## Flagged ambiguities

- "personal documentation site" from the PRD was ambiguous about authorship — resolved: **single-author**, specifically **Dev Hari Ojha**.
- "article/post/entry" were used interchangeably in the PRD — resolved: **Note** is the canonical term.
- "Cult UI" was initially suggested but corrected to **COSS UI** (coss.com/ui) as the primary component library, with shadcn + Base UI as fallback.
- The PRD's generic category examples (`getting-started`, `guides`, `reference`, `tutorials`) were placeholders — actual categories are technology-type-based (`language`, `tool`, `framework`).
