// src/context/search-context.tsx
"use client";

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { SearchResult, SearchCategoryGroup } from "@/types/search";

const searchData: SearchResult[] = [
  {
    id: "1",
    title: "Dashboard",
    description: "Go to dashboard overview",
    category: "pages",
    href: "/",
  },
  {
    id: "2",
    title: "User List",
    description: "Manage system users",
    category: "pages",
    href: "/users/list",
  },
  {
    id: "3",
    title: "Create New User",
    description: "Add a new user to the system",
    category: "actions",
    href: "/users/new",
  },
  {
    id: "4",
    title: "System Settings",
    description: "Configure system preferences",
    category: "settings",
    href: "/settings",
  },
];

interface SearchContextType {
  isOpen: boolean;
  query: string;
  setQuery: (query: string) => void;
  handleOpen: () => void;
  handleClose: () => void;
  groupedResults: SearchCategoryGroup[];
}

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export function SearchProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");

  const handleOpen = useCallback(() => setIsOpen(true), []);
  const handleClose = useCallback(() => {
    setIsOpen(false);
    setQuery("");
  }, []);

  const filteredResults = searchData.filter((item) =>
    query
      ? item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description?.toLowerCase().includes(query.toLowerCase())
      : true
  );

  const groupedResults = Object.entries(
    filteredResults.reduce((groups, result) => {
      const category = result.category;
      if (!groups[category]) {
        groups[category] = [];
      }
      groups[category].push(result);
      return groups;
    }, {} as Record<string, SearchResult[]>)
  ).map(
    ([category, results]): SearchCategoryGroup => ({
      category: category as SearchCategoryGroup["category"],
      title: category.charAt(0).toUpperCase() + category.slice(1),
      results,
    })
  );

  return (
    <SearchContext.Provider
      value={{
        isOpen,
        query,
        setQuery,
        handleOpen,
        handleClose,
        groupedResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};
