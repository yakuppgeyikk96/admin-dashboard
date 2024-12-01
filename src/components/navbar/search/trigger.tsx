"use client";

import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useKeyboardShortcut } from "@/hooks/use-keyboard-shortcut";

interface SearchTriggerProps {
  onClick: () => void;
}

export const SearchTrigger = ({ onClick }: SearchTriggerProps) => {
  useKeyboardShortcut({
    key: "k",
    ctrlKey: true,
    metaKey: true,
    callback: onClick,
  });

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={onClick}
      className="gap-2 px-2 h-8"
    >
      <Search className="w-4 h-4" />
      <span>Search...</span>
      <kbd className="pointer-events-none hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-xs font-medium opacity-100 md:flex">
        <span className="text-xs">⌘</span>K
      </kbd>
    </Button>
  );
};
