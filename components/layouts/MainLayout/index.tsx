import React from "react";
import HeaderLayout from "../HeaderLayout";
import * as Styled from "./MainLayout.styled";
import SidebarLayout from "../SidebarLayout";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import MuiThemeProviderWrapper from "@/theme/ThemeProviderWrapper";
import { CssBaseline } from "@mui/material";
import ThemeContextProvider from "@/context/ThemeContextProvider";

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
            <section>
              <HeaderLayout />
              {children}
            </section>
          </Styled.MainLayoutContainer>
        </MuiThemeProviderWrapper>
      </AppRouterCacheProvider>
    </ThemeContextProvider>
  );
}
