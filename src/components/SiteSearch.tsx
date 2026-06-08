import { useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Search } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { siteSearchIndex } from '@/data/siteSearchIndex';

type SearchResult = {
  title: string;
  path: string;
  content: string;
};

export function SiteSearch() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const timer = window.setTimeout(() => inputRef.current?.focus(), 0);
    return () => window.clearTimeout(timer);
  }, [open]);

  const results = useMemo(() => {
    const terms = query.trim().toLowerCase().split(/\s+/).filter(Boolean);
    if (!terms.length) return [];
    const scored = siteSearchIndex
      .map((item) => {
        const haystack = [item.title, item.content, item.keywords?.join(' ') || '']
          .join(' ')
          .toLowerCase();
        let matches = 0;
        for (const term of terms) {
          if (haystack.includes(term)) matches += 1;
        }
        if (!matches) return null;
        const titleBoost = terms.some((term) => item.title.toLowerCase().includes(term)) ? 2 : 0;
        return { item, score: matches + titleBoost };
      })
      .filter(Boolean)
      .sort((a, b) => (b?.score || 0) - (a?.score || 0))
      .slice(0, 8)
      .map((entry) => entry!.item);

    return scored as SearchResult[];
  }, [query]);

  const handleSelect = (path: string) => {
    navigate(path);
    setOpen(false);
    setQuery('');
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-full border border-bit-dark/10 dark:border-gray-700 bg-white/70 dark:bg-gray-800/70 text-bit-dark/70 dark:text-gray-300 h-10 w-10 shadow-sm hover:border-bit-lavender/40 hover:text-bit-lavender transition-colors"
          aria-label="Search the site"
        >
          <Search className="w-4 h-4" />
        </button>
      </PopoverTrigger>
      <PopoverContent align="end" side="bottom" sideOffset={12} className="w-80 sm:w-96 p-4">
        <div className="space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 text-bit-dark/40 dark:text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search all pages..."
              className="w-full rounded-xl border border-bit-dark/10 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 pl-9 pr-3 py-2.5 text-sm text-bit-dark dark:text-gray-200 focus:outline-none focus:ring-2 focus:ring-bit-lavender/40"
            />
          </div>
          {query.trim().length === 0 ? (
            <p className="text-xs text-bit-dark/50 dark:text-gray-400">
              Start typing to find pages across the site.
            </p>
          ) : results.length === 0 ? (
            <p className="text-xs text-bit-dark/50 dark:text-gray-400">No matching pages found.</p>
          ) : (
            <div className="flex flex-col gap-2 max-h-72 overflow-y-auto pr-1">
              {results.map((item) => (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => handleSelect(item.path)}
                  className="flex items-start gap-3 rounded-xl border border-bit-dark/5 dark:border-gray-700 bg-white/60 dark:bg-gray-900/60 px-3 py-2 text-left hover:border-bit-lavender/40 hover:bg-white/90 dark:hover:bg-gray-800/90 transition-colors"
                >
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-bit-dark dark:text-white">{item.title}</p>
                    <p className="text-xs text-bit-dark/60 dark:text-gray-400 line-clamp-2">
                      {item.content}
                    </p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-bit-lavender shrink-0 mt-1" />
                </button>
              ))}
            </div>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
