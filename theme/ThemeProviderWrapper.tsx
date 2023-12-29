"use client";

import { ThemeProvider as MuiThemeProvider } from "@mui/material/styles";
import React, { useLayoutEffect, useState } from "react";
import { getTheme } from "./theme";
import { useTheme } from "next-themes";

interface Props {
  children: React.ReactNode;
}

export default function MuiThemeProviderWrapper({ children }: Props) {
  const { theme } = useTheme();
  const [mode, setMode] = useState<"dark" | "light">("light");

  useLayoutEffect(() => {
    setMode(theme === "dark" ? "dark" : "light");
  }, [theme]);

  return <MuiThemeProvider theme={getTheme(mode)}>{children}</MuiThemeProvider>;
}
