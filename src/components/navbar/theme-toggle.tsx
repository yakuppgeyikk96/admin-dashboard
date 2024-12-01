// src/components/navbar/theme-toggle.tsx
"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/theme-context";

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg transition-colors hover:bg-gray-100 dark:hover:bg-sidebar-hover"
    >
      {theme === "dark" ? (
        <Sun className="w-5 h-5 text-gray-600 dark:text-sidebar-foreground" />
      ) : (
        <Moon className="w-5 h-5 text-gray-600 dark:text-sidebar-foreground" />
      )}
    </button>
  );
};
