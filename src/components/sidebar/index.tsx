// src/components/sidebar/index.tsx
"use client";

import React from "react";
import { Logo } from "./logo";
import { NavSection } from "./nav-section";
import { navigationItems } from "@/config/nav";
import { useSidebar } from "@/context/sidebar-context";
import { cn } from "@/lib/utils";

const Sidebar: React.FC = () => {
  const { isCollapsed } = useSidebar();

  return (
    <div
      className={cn(
        "h-screen bg-sidebar text-sidebar-foreground p-4 transition-all duration-300 shrink-0",
        "border-r border-sidebar-hover/30",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      <Logo className="mb-8" />
      <NavSection items={navigationItems} />
    </div>
  );
};

export default Sidebar;
