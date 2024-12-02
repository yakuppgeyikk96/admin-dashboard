import { LucideIcon } from "lucide-react";

export interface QuickAction {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
  bgColor: string;
}
