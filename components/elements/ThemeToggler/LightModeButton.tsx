"use client";

import { LightMode } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useTheme } from "next-themes";

export default function LightModeButton() {
  const { setTheme } = useTheme();

  const switchToDark = () => {
    setTheme("light");
  };

  return (
    <IconButton onClick={switchToDark}>
      <LightMode sx={{ color: "#e9c46a" }} />
    </IconButton>
  );
}
