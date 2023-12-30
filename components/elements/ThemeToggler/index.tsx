"use client";

import { useTheme } from "next-themes";
import DarkModeButton from "./DarkModeButton";
import LightModeButton from "./LightModeButton";

export default function ThemeToggler() {
  const { theme } = useTheme();

  return theme === "dark" ? <LightModeButton /> : <DarkModeButton />;
}
