import React from "react";
import * as Styled from "./MainLayout.styled";
import SidebarLayout from "../SidebarLayout";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { Box, CssBaseline } from "@mui/material";
import MuiThemeProviderWrapper from "@/theme/ThemeProviderWrapper";
import ThemeContextProvider from "@/context/ThemeContextProvider";
import HeaderLayout from "../HeaderLayout";

interface MainLayoutProps {
  children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <ThemeContextProvider>
      <AppRouterCacheProvider>
        <MuiThemeProviderWrapper>
          <CssBaseline />
          <Styled.MainLayoutContainer>
            <SidebarLayout />
            <Box component="section" sx={{ flex: 1 }}>
              <HeaderLayout />
              {children}
            </Box>
          </Styled.MainLayoutContainer>
        </MuiThemeProviderWrapper>
      </AppRouterCacheProvider>
    </ThemeContextProvider>
  );
}
