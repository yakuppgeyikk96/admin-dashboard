// src/components/sidebar/logo.tsx
import React from "react";
import { useSidebar } from "@/context/sidebar-context";

interface LogoProps {
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = "" }) => {
  const { isCollapsed } = useSidebar();

  return (
    <div className={`p-2 flex justify-start ${className}`}>
      <h1
        className={`
        text-xl font-bold
        transition-all duration-300
        overflow-hidden whitespace-nowrap text-center
      `}
      >
        {isCollapsed ? "A" : "Admin Panel"}
      </h1>
    </div>
  );
};
