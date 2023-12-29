"use client";

import { useTheme } from "next-themes";
import DarkModeButton from "./DarkModeButton";
import LightModeButton from "./LightModeButton";

export default function ThemeSwitcher() {
  const { theme } = useTheme();

  return theme === "dark" ? <LightModeButton /> : <DarkModeButton />;
}
