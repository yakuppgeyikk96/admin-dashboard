"use client";

import { useTheme } from "next-themes";
import DarkModeButton from "./DarkModeButton";
import LightModeButton from "./LightModeButton";
import { useEffect, useState } from "react";

export default function ThemeToggler() {
  const [mode, setMode] = useState<"dark" | "light" | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    setMode(theme === "dark" ? "dark" : "light" || null);
  }, [theme]);

  return mode && mode === "dark" ? <LightModeButton /> : <DarkModeButton />;
}
