// src/config/nav.ts
import { LayoutDashboard, Users, Settings, FileText } from "lucide-react";
import { NavItem } from "@/types/nav";

export const navigationItems: NavItem[] = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Users,
    label: "Users",
    href: "/users",
    children: [
      {
        label: "User List",
        href: "/users/list",
      },
      {
        label: "Permissions",
        href: "/users/permissions",
      },
    ],
  },
  {
    icon: FileText,
    label: "Documents",
    href: "/documents",
    children: [
      {
        label: "Reports",
        href: "/documents/reports",
      },
      {
        label: "Inbox",
        href: "/documents/inbox",
      },
    ],
  },
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
];
