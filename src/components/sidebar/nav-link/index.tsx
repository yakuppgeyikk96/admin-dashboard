// src/components/sidebar/nav-link/nav-link.tsx
"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { NavItem } from "@/types/nav";
import { useSidebar } from "@/context/sidebar-context";
import { cn } from "@/lib/utils";
import { styles } from "./styles";
import { ChevronDown } from "lucide-react";

interface NavLinkProps extends NavItem {
  className?: string;
  level?: number;
}

export const NavLink: React.FC<NavLinkProps> = ({
  icon: Icon,
  label,
  href,
  children,
  className = "",
  level = 0,
}) => {
  const { isCollapsed } = useSidebar();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const submenuRef = useRef<HTMLDivElement>(null);

  const isActive = pathname === href;
  const hasChildren = children && children.length > 0;
  const isChildActive =
    hasChildren && children.some((child) => pathname === child.href);

  React.useEffect(() => {
    if (isChildActive) {
      setIsOpen(true);
    }
  }, [isChildActive]);

  const handleMouseEnter = () => {
    if (isCollapsed && hasChildren) {
      setShowPopup(true);
    }
  };

  const handleMouseLeave = () => {
    if (isCollapsed && hasChildren) {
      setShowPopup(false);
    }
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className={cn(
          styles.base,
          isCollapsed ? styles.layout.collapsed : styles.layout.expanded,
          !level && (isActive || isChildActive)
            ? styles.states.active
            : styles.states.inactive,
          hasChildren && "justify-between",
          className
        )}
        onClick={
          hasChildren
            ? (e) => {
                e.preventDefault();
                if (!isCollapsed) {
                  setIsOpen(!isOpen);
                }
              }
            : undefined
        }
        title={label}
      >
        <div className="flex items-center">
          {Icon && (
            <Icon
              className={cn(
                styles.icon.base,
                isActive || isChildActive
                  ? styles.icon.active
                  : styles.icon.inactive
              )}
            />
          )}

          <span
            className={cn(
              styles.label.base,
              isCollapsed ? styles.label.collapsed : styles.label.expanded,
              !Icon && "ml-0"
            )}
          >
            {label}
          </span>
        </div>

        {hasChildren && !isCollapsed && (
          <ChevronDown
            className={cn(
              "w-4 h-4 transition-transform duration-200",
              isOpen && "transform rotate-180"
            )}
          />
        )}

        {isCollapsed && <div className={styles.tooltip}>{label}</div>}
      </Link>

      {isCollapsed && hasChildren && showPopup && (
        <div
          className={cn(
            "absolute left-full top-0 ml-2",
            "bg-sidebar rounded-lg p-2",
            "min-w-[160px] z-50"
          )}
        >
          {children.map((child) => (
            <Link
              key={child.href}
              href={child.href}
              className={cn(
                "flex items-center px-3 py-2 text-sm rounded-md",
                "text-sidebar-muted hover:text-sidebar-foreground",
                "transition-colors",
                pathname === child.href &&
                  "text-accent-orange hover:text-accent-orange font-bold"
              )}
            >
              {child.label}
            </Link>
          ))}
        </div>
      )}

      {!isCollapsed && hasChildren && (
        <div
          ref={submenuRef}
          className={styles.submenu.wrapper}
          style={{
            height: isOpen ? submenuRef.current?.scrollHeight : 0,
            opacity: isOpen ? 1 : 0,
          }}
        >
          <div className="space-y-1">
            {children.map((child) => (
              <NavLink
                key={child.href}
                {...child}
                level={level + 1}
                className={cn(
                  styles.submenu.item,
                  pathname === child.href && styles.submenu.activeItem
                )}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
