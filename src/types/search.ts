export type SearchCategory = "pages" | "actions" | "documents" | "settings";

export interface SearchResult {
  id: string;
  title: string;
  description?: string;
  category: SearchCategory;
  icon?: React.ComponentType<{ className?: string }>;
  href?: string;
  action?: () => void;
}

export interface SearchCategoryGroup {
  category: SearchCategory;
  title: string;
  results: SearchResult[];
}
