import { LucideIcon } from "lucide-react";

export interface NavItem {
  icon?: LucideIcon; // İkon opsiyonel oldu
  label: string;
  href: string;
  children?: NavItem[];
}
