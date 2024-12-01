"use client";

import React from "react";
import { Menu, ChevronLeft } from "lucide-react";
import { useSidebar } from "@/context/sidebar-context";
import { cn } from "@/lib/utils";

interface ToggleButtonProps {
  className?: string;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({
  className = "",
}) => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className={cn(
        "p-2 rounded-lg transition-colors",
        "hover:bg-gray-100 dark:hover:bg-sidebar-hover",
        className
      )}
    >
      {isCollapsed ? (
        <Menu className="w-5 h-5 text-gray-600 dark:text-sidebar-foreground" />
      ) : (
        <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-sidebar-foreground" />
      )}
    </button>
  );
};
