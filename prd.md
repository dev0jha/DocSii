# Product Requirements Document: Personal Documentation Site

## Project Overview

Build a modern documentation website using Astro that allows publishing personal notes organized by topics. The site should provide an excellent reading experience with powerful navigation and search capabilities.

---

## Technology Stack

### Core Framework

- **Astro** (v4.x or later)
- **Node.js** (v18 or later)
- **TypeScript** (strict mode)

### Key Dependencies

- `@astrojs/mdx` - Enhanced markdown support
- `@astrojs/sitemap` - SEO sitemap generation
- `@astrojs/tailwind` - Utility-first CSS
- `tailwindcss` - Styling framework
- `fuse.js` - Client-side fuzzy search
- `rehype-slug` - Auto-generate heading IDs
- `rehype-autolink-headings` - Auto-link headings
- `remark-toc` - Table of contents generation
- Syntax highlighting library (Shiki or Prism)

---

## Features & Requirements

### 1. Content Management

#### File Structure

```
src/
├── content/
│   └── docs/
│       ├── getting-started/
│       │   ├── introduction.md
│       │   └── installation.md
│       ├── guides/
│       │   ├── beginner/
│       │   └── advanced/
│       ├── reference/
│       └── tutorials/
├── layouts/
│   └── DocLayout.astro
├── components/
│   ├── Sidebar.astro
│   ├── TableOfContents.astro
│   ├── Search.astro
│   └── ThemeToggle.astro
└── pages/
    └── docs/
        └── [...slug].astro
```

#### Markdown Frontmatter Schema

Each markdown file must support:

```yaml
---
title: "Page Title"
description: "Short description for SEO and previews"
category: "guides" # Top-level category
topic: "beginner" # Optional sub-topic
order: 1 # Order within category
tags: ["tag1", "tag2"] # For search/filtering
lastUpdated: 2024-01-15
author: "Your Name" # Optional
draft: false # Hide from production
---
```

### 2. Navigation System

#### Sidebar Navigation

- **Auto-generated** from content directory structure
- **Nested categories** with expand/collapse functionality
- **Active state** highlighting for current page
- **Ordering** based on frontmatter `order` field or alphabetical
- **Sticky positioning** on desktop
- **Collapsible on mobile** (hamburger menu)
- Display category icons (optional)

#### Navigation Features

- Breadcrumb navigation at top of page
- Previous/Next page navigation at bottom
- "Edit this page" link to source file (GitHub integration optional)

### 3. Search Functionality

#### Requirements

- **Client-side search** using Fuse.js for instant results
- **Fuzzy matching** for typo tolerance
- **Search index** includes:
  - Page titles
  - Headings (h2, h3)
  - Content text
  - Tags
  - Descriptions
- **Keyboard shortcuts**:
  - `Cmd/Ctrl + K` to open search
  - `Esc` to close
  - Arrow keys to navigate results
  - `Enter` to select
- **Search UI**:
  - Modal overlay with backdrop
  - Show matched text snippets
  - Highlight matching terms
  - Display category/breadcrumb for context
  - Show recent searches (localStorage)

### 4. Table of Contents

#### Auto-generated TOC

- Extract h2 and h3 headings from content
- Sticky positioning on desktop (right sidebar)
- Smooth scroll to anchors
- Highlight active section on scroll
- Collapsible on mobile
- Show/hide toggle

### 5. Dark Mode

#### Theme System

- **Toggle button** in header
- **Persist preference** in localStorage
- **System preference detection** on first visit
- **Smooth transitions** between themes
- **Color scheme**:
  - Light mode: Clean, professional whites and grays
  - Dark mode: Easy on eyes, good contrast (WCAG AA compliant)
  - Syntax highlighting adapted for both themes

### 6. Code Syntax Highlighting

#### Requirements

- Support for common languages: JavaScript, TypeScript, Python, Bash, JSON, YAML, CSS, HTML, Markdown
- Line numbers (optional, configurable per block)
- Copy-to-clipboard button
- Language label display
- Line highlighting capability: `{3,5-7}`
- Filename display: ` ```js:filename.js`
- Works in both light and dark modes

### 7. Responsive Design

#### Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

#### Mobile Behavior

- Hamburger menu for sidebar
- Bottom sheet or drawer for TOC
- Touch-friendly tap targets (min 44px)
- Optimized font sizes
- Collapsible search on mobile

---

## Page Layout Specifications

### Homepage (`/`)

- Hero section with project title and description
- Quick start guide or featured content
- Category cards linking to main sections
- Search bar prominently displayed

### Documentation Page (`/docs/[...slug]`)

- **Header**:
  - Logo/site title (left)
  - Search button (center/right)
  - Dark mode toggle (right)
  - GitHub link (optional, right)
- **Sidebar** (left, ~250-300px):
  - Navigation tree
  - Collapsible sections
  - Search input at top
- **Main Content** (center, max-width ~800px):
  - Breadcrumbs
  - Page title (h1)
  - Last updated date
  - Article content
  - Previous/Next navigation
- **TOC** (right, ~200-250px):
  - Page outline
  - Sticky on scroll
  - Active section highlighting

---

## Configuration Files

### `astro.config.mjs`

```javascript
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://yourdomain.com",
  integrations: [
    mdx({
      syntaxHighlight: "shiki",
      shikiConfig: { theme: "github-dark-dimmed" },
      remarkPlugins: [],
      rehypePlugins: [],
    }),
    tailwind(),
    sitemap(),
  ],
  markdown: {
    shikiConfig: {
      theme: "github-dark-dimmed",
      wrap: true,
    },
  },
});
```

### `tailwind.config.cjs`

```javascript
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Custom color palette
      },
      typography: {
        // Prose styling for markdown content
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
```

### Content Collections Schema (`src/content/config.ts`)

```typescript
import { defineCollection, z } from "astro:content";

const docsCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.string(),
    topic: z.string().optional(),
    order: z.number().default(999),
    tags: z.array(z.string()).default([]),
    lastUpdated: z.date(),
    author: z.string().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = {
  docs: docsCollection,
};
```

---

## Development Workflow

### Setup Instructions

```bash
# 1. Install dependencies
npm install

# 2. Run development server
npm run dev

# 3. Build for production
npm run build

# 4. Preview production build
npm run preview
```

### Content Addition Workflow

1. Create new `.md` or `.mdx` file in `src/content/docs/[category]/`
2. Add required frontmatter
3. Write content using markdown
4. File automatically appears in navigation (based on frontmatter)
5. Search index updates automatically

### Scripts in `package.json`

```json
{
  "scripts": {
    "dev": "astro dev",
    "start": "astro dev",
    "build": "astro check && astro build",
    "preview": "astro preview",
    "astro": "astro"
  }
}
```

---

## Performance Requirements

- **Lighthouse Score**: 95+ on all metrics
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3.5s
- **Static generation**: All pages pre-rendered at build time
- **Image optimization**: Use Astro's Image component
- **CSS**: Minimal, scoped, tree-shaken
- **JavaScript**: Minimal, only where needed (search, theme toggle)

---

## SEO Requirements

- Semantic HTML structure
- Meta tags for title, description, OG tags
- Sitemap generation
- Robots.txt
- Structured data (schema.org)
- Canonical URLs
- Fast page loads
- Mobile-friendly

---

## Accessibility Requirements

- WCAG 2.1 AA compliance
- Keyboard navigation support
- Screen reader friendly
- Focus indicators
- Alt text for images
- Proper heading hierarchy
- Skip to content link
- Sufficient color contrast (4.5:1 minimum)

---

## Example Content Structure

```
src/content/docs/
├── getting-started/
│   ├── index.md (What is this project?)
│   ├── installation.md
│   └── quick-start.md
├── guides/
│   ├── beginner/
│   │   ├── index.md
│   │   ├── your-first-note.md
│   │   └── organizing-notes.md
│   └── advanced/
│       ├── index.md
│       ├── custom-components.md
│       └── deployment.md
├── reference/
│   ├── markdown-syntax.md
│   ├── frontmatter-schema.md
│   └── keyboard-shortcuts.md
└── tutorials/
    ├── creating-diagrams.md
    ├── embedding-videos.md
    └── code-examples.md
```

---

## Deployment

### Recommended Platforms

1. **Vercel** - Zero config, instant deploys
2. **Netlify** - Easy setup, form handling
3. **GitHub Pages** - Free for public repos
4. **Cloudflare Pages** - Fast global CDN

### Build Command

```bash
npm run build
```

### Output Directory

```bash
dist/
```

---

## Optional Enhancements (Future)

- [ ] Comments system (Giscus, Utterances)
- [ ] Analytics integration (Plausible, Fathom)
- [ ] RSS feed for updates
- [ ] PDF export functionality
- [ ] Multi-language support (i18n)
- [ ] Version switching (for docs with multiple versions)
- [ ] Interactive code playgrounds
- [ ] Mermaid diagram support
- [ ] Reading time estimate
- [ ] Print-friendly styles

---

## Success Criteria

### Must Have

✅ Markdown files organize into nested categories  
✅ Sidebar navigation auto-generates from file structure  
✅ Search works instantly with fuzzy matching  
✅ Dark mode persists across sessions  
✅ Code blocks have syntax highlighting  
✅ TOC shows and highlights current section  
✅ Mobile responsive with good UX  
✅ Fast page loads (< 3s)

### Nice to Have

- Edit on GitHub links
- Copy code button
- Breadcrumb navigation
- Previous/Next page links
- Reading progress indicator

---

## Design Inspiration

Reference these documentation sites for design/UX patterns:

- [Astro Docs](https://docs.astro.build)
- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [MDN Web Docs](https://developer.mozilla.org)

---

## Agent Instructions

When building this project:

1. **Initialize Project**
   - Create Astro project with TypeScript
   - Install all required dependencies
   - Set up Tailwind CSS with typography plugin
   - Configure content collections

2. **Create Layout System**
   - Build main DocLayout with header, sidebar, content, TOC
   - Implement responsive breakpoints
   - Add dark mode toggle with localStorage persistence

3. **Build Components**
   - Sidebar with auto-generated navigation from content
   - Search modal with keyboard shortcuts
   - Table of Contents with scroll spy
   - Theme toggle button
   - Code block with copy button

4. **Content Integration**
   - Set up content collection schema
   - Create example markdown files in each category
   - Configure MDX with syntax highlighting
   - Add rehype/remark plugins for TOC and heading links

5. **Styling**
   - Implement light and dark themes
   - Style markdown content (typography)
   - Make fully responsive
   - Add smooth transitions

6. **Search Implementation**
   - Build search index from all content
   - Implement fuzzy search with Fuse.js
   - Create search UI with results display
   - Add keyboard navigation

7. **Testing**
   - Test on mobile, tablet, desktop
   - Verify dark mode works
   - Check search functionality
   - Test navigation and TOC
   - Validate accessibility

8. **Documentation**
   - Create README with setup instructions
   - Document folder structure
   - Explain how to add new content
   - Include customization guide

---

## Files to Provide

After building, provide:

- Complete project structure
- All source code files
- Configuration files
- Example markdown content (at least 5 pages)
- README.md with instructions
- package.json with all dependencies

---

## Questions for Clarification

Before starting implementation, confirm:

1. Preferred color scheme (brand colors)?
2. Site name/title?
3. Do you want GitHub integration (edit links)?
4. Preferred deployment platform?
5. Any specific categories you already have in mind?
