import { HomeIcon, LucideIcon, Package } from "lucide-react";

function generateIcon(iconName: string): LucideIcon | undefined {
  switch (iconName) {
    case "HomeIcon":
      return HomeIcon;
    case "Package":
      return Package
  }
} 

export default generateIcon;