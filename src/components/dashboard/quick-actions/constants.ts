import { UserPlus, FileText, Download, Settings } from "lucide-react";
import { QuickAction } from "./types";

export const QUICK_ACTIONS: QuickAction[] = [
  {
    title: "Add User",
    description: "Create a new user account",
    icon: UserPlus,
    href: "/users/new",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    title: "New Document",
    description: "Create a new document",
    icon: FileText,
    href: "/documents/new",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    title: "Download Report",
    description: "Get latest reports",
    icon: Download,
    href: "/reports",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    title: "Settings",
    description: "Manage your preferences",
    icon: Settings,
    href: "/settings",
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
  },
];
