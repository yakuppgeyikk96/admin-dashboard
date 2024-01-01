"use client";

import { createTheme } from "@mui/material/styles";

export const getTheme = (mode: "dark" | "light") => {

  const { palette} = createTheme();
  
  return createTheme({
    palette: {
      mode,
      ...(mode === 'light') ? {
        primary: {
          main: '#e76f51',
          dark: '#e55837',
          light: '#ea886f',
          contrastText: '#fff'
        },
        secondary: {
          main: '#2a9d90',
          dark: '#279082',
          light: '#3baca1'
        },
        borderColor: {
          main: '#cfcfcf',
        },
        background: {
          default: '#fafafa'
        },
      } : {
        primary: {
          main: '#e76f51',
          dark: '#e55837',
          light: '#ea886f',
          contrastText: '#fff'
        },
        secondary: {
          main: '#2a9d90',
          dark: '#279082',
          light: '#3baca1'
        },
        borderColor: {
          main: '#333',
        },
      }
    },
  })
}
