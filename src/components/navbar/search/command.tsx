// src/components/navbar/search/command.tsx
"use client";

import { useEffect } from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useSearch } from "@/context/search-context";
import { SearchResult } from "@/types/search";
import { useRouter } from "next/navigation";
import { useTheme } from "@/context/theme-context";

export const SearchCommand = () => {
  const router = useRouter();
  const { theme } = useTheme();
  const { query, setQuery, isOpen, handleOpen, handleClose, groupedResults } =
    useSearch();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        handleOpen();
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, [handleOpen]);

  const onSelectItem = (result: SearchResult) => {
    handleClose();

    if (result.href) {
      router.push(result.href);
    } else if (result.action) {
      result.action();
    }
  };

  return (
    <div className={theme}>
      <CommandDialog open={isOpen} onOpenChange={handleClose}>
        <CommandInput
          placeholder="Search anything..."
          value={query}
          onValueChange={setQuery}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          {groupedResults.map((group) => (
            <CommandGroup key={group.category} heading={group.title}>
              {group.results.map((result) => (
                <CommandItem
                  key={result.id}
                  onSelect={() => onSelectItem(result)}
                >
                  {result.icon && <result.icon className="mr-2 h-4 w-4" />}
                  <div className="flex flex-col">
                    <span>{result.title}</span>
                    {result.description && (
                      <span className="text-sm text-muted-foreground">
                        {result.description}
                      </span>
                    )}
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          ))}
        </CommandList>
      </CommandDialog>
    </div>
  );
};
