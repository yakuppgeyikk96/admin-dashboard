// src/components/navbar/container.tsx
"use client";

import React from "react";
import { useSidebar } from "@/context/sidebar-context";
import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
}) => {
  const { isCollapsed } = useSidebar();

  return (
    <nav
      className={cn(
        "h-16 border-b border-border transition-all duration-300",
        isCollapsed ? "left-16" : "left-64",
        className
      )}
    >
      <div className="h-full px-4 flex items-center justify-between">
        {children}
      </div>
    </nav>
  );
};
