import { useState, useEffect, useCallback, useRef } from "react";
import Fuse from "fuse.js";
import { Dialog } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";

interface SearchItem {
  slug: string;
  title: string;
  description: string;
  category: string;
  topic?: string;
  tags: string[];
}

interface SearchProps {
  items: SearchItem[];
}

export function Search({ items }: SearchProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchItem[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

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
    })
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [open]);

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
      setOpen(false);
    }
  };

  return (
    <>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setOpen(true)}
        aria-label="Search"
        class="flex items-center gap-2 text-muted-foreground"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
        <span class="hidden sm:inline text-sm">Search</span>
        <Kbd class="ml-auto hidden sm:inline-flex">{typeof navigator !== "undefined" && navigator.platform.includes("Mac") ? "⌘" : "Ctrl"}K</Kbd>
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <div class="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]">
          <div class="w-full max-w-lg mx-4">
            <div class="glass rounded-xl overflow-hidden">
              <div class="flex items-center gap-2 px-4 border-b border-border">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="text-muted-foreground shrink-0"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => doSearch(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Search notes..."
                  class="flex-1 bg-transparent border-none outline-none py-3 text-sm text-foreground placeholder:text-muted-foreground"
                />
                <Kbd>ESC</Kbd>
              </div>
              {results.length > 0 && (
                <div class="max-h-80 overflow-y-auto p-2">
                  {results.map((item, i) => (
                    <a
                      key={item.slug}
                      href={`/${item.slug}`}
                      onClick={() => setOpen(false)}
                      class={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors no-underline ${
                        i === selectedIndex
                          ? "bg-accent text-accent-foreground"
                          : "text-foreground hover:bg-accent/50"
                      }`}
                    >
                      <div class="flex-1 min-w-0">
                        <div class="font-medium truncate">{item.title}</div>
                        <div class="text-xs text-muted-foreground truncate">
                          {item.category}{item.topic ? ` / ${item.topic}` : ""}
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              )}
              {query && results.length === 0 && (
                <div class="p-6 text-center text-sm text-muted-foreground">
                  No results found
                </div>
              )}
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
}
