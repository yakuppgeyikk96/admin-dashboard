import React from "react";
import { NavLink } from "./nav-link";
import { NavItem } from "@/types/nav";

interface NavSectionProps {
  items: NavItem[];
  className?: string;
}

export const NavSection: React.FC<NavSectionProps> = ({
  items,
  className = "",
}) => {
  return (
    <nav className={`space-y-2 ${className}`}>
      {items.map((item) => (
        <NavLink key={item.label} {...item} />
      ))}
    </nav>
  );
};
