import { useState, useCallback, useRef, useEffect } from "react";
import Fuse from "fuse.js";

interface SearchItem {
  slug: string;
  title: string;
  description: string;
  category: string;
  topic?: string;
  tags: string[];
}

interface HeroSearchProps {
  items: SearchItem[];
}

export function HeroSearch({ items }: HeroSearchProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const fuse = useRef(
    new Fuse(items, {
      keys: [
        { name: "title", weight: 2 },
        { name: "description", weight: 1 },
        { name: "tags", weight: 1.5 },
        { name: "category", weight: 1 },
        { name: "topic", weight: 1 },
      ],
      threshold: 0.4,
      includeScore: true,
    }),
  );

  // Keyboard shortcut to focus search
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "/" && !isFocused) {
        e.preventDefault();
        inputRef.current?.focus();
      }
      if (e.key === "Escape") {
        inputRef.current?.blur();
        setIsFocused(false);
      }
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isFocused]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(e.target as Node)
      ) {
        setIsFocused(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const doSearch = useCallback((value: string) => {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const res = fuse.current.search(value);
    setResults(res.map((r) => r.item));
    setSelectedIndex(0);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((i) => Math.min(i + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && results[selectedIndex]) {
      window.location.href = `/${results[selectedIndex].slug}`;
    }
  };

  const categoryIcons: Record<string, string> = {
    framework: "■",
    language: "⟨⟩",
    tool: "⚙",
  };

  const showDropdown = isFocused && query.trim().length > 0;

  return (
    <div ref={containerRef} className="hero-search-container">
      {/* Search input */}
      <div className="hero-search-input-wrap">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="hero-search-icon"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => doSearch(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => setIsFocused(true)}
          placeholder="Search notes..."
          className="hero-search-input"
          autoComplete="off"
        />
        {!isFocused && <kbd className="hero-search-kbd">/</kbd>}
      </div>

      {/* Dropdown results */}
      {showDropdown && (
        <div className="hero-search-dropdown">
          {results.length > 0 ? (
            results.slice(0, 6).map((item, i) => (
              <a
                key={item.slug}
                href={`/${item.slug}`}
                className={`hero-search-result ${i === selectedIndex ? "selected" : ""}`}
              >
                <span className="hero-search-result-icon">
                  {categoryIcons[item.category] || "•"}
                </span>
                <div className="hero-search-result-text">
                  <span className="hero-search-result-title">{item.title}</span>
                  <span className="hero-search-result-meta">
                    {item.category}
                    {item.topic ? ` › ${item.topic}` : ""}
                  </span>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  className="hero-search-result-arrow"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </a>
            ))
          ) : (
            <div className="hero-search-empty">
              No results for "<strong>{query}</strong>"
            </div>
          )}
        </div>
      )}
    </div>
  );
}
