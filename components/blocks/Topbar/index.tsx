"use client";

import SidebarToggler from "@/components/elements/SidebarToggler";
import ThemeToggler from "@/components/elements/ThemeToggler";
import * as Styled from "./Topbar.styled";

export default function Topbar() {
  return (
    <Styled.TopbarContainer>
      <SidebarToggler />
      <ThemeToggler />
    </Styled.TopbarContainer>
  );
}
