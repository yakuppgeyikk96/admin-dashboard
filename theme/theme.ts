"use client";

import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "dark" | "light") => {
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light') ? {} : {}
    },
  })
}
