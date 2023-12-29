"use client";

import { DarkMode } from "@mui/icons-material";
import { useTheme } from "next-themes";
import { useDarkMode } from "usehooks-ts";

export default function DarkModeButton() {
  const { setTheme } = useTheme();

  const switchToDark = () => {
    setTheme("dark");
  };

  return <DarkMode onClick={switchToDark} />;
}
