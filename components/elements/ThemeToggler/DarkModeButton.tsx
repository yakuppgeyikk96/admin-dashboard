"use client";

import { DarkMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useTheme } from "next-themes";

export default function DarkModeButton() {
  const { setTheme } = useTheme();

  const switchToDark = () => {
    setTheme("dark");
  };

  return (
    <IconButton onClick={switchToDark}>
      <DarkMode />
    </IconButton>
  );
}
