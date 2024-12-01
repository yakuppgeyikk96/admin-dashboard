import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSidebar } from "@/context/sidebar-context";

export const CollapseButton: React.FC = () => {
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <button
      onClick={toggleSidebar}
      className="absolute -right-3 top-6 bg-slate-800 rounded-full p-1.5 hover:bg-slate-700"
    >
      {isCollapsed ? (
        <ChevronRight className="w-4 h-4" />
      ) : (
        <ChevronLeft className="w-4 h-4" />
      )}
    </button>
  );
};
