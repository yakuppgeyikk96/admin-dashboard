"use client";

import { LightMode } from "@mui/icons-material";
import { useTheme } from "next-themes";

export default function LightModeButton() {
  const { setTheme } = useTheme();

  const switchToDark = () => {
    setTheme("light");
  };

  return <LightMode onClick={switchToDark} />;
}
