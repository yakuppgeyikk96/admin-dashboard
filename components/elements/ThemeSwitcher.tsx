"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export default function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const iconSize = 20;
  const iconClassname = "cursor-pointer";

  const switchToDark = () => {
    setTheme("dark");
  };

  const switchToLight = () => {
    setTheme("light");
  };

  return theme === "light" ? (
    <Moon size={iconSize} className={iconClassname} onClick={switchToDark} />
  ) : (
    <Sun size={iconSize} className={iconClassname} onClick={switchToLight} />
  );
}
