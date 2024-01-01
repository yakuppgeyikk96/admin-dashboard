"use client";

import sidebarItems from "@/constants/SidebarItems";
import SidebarItem from "./SidebarItem";
import * as Styled from "./Sidebar.styled";
import { useReadLocalStorage } from "usehooks-ts";

export default function Sidebar() {
  const isSidebarOpened = useReadLocalStorage("isSidebarOpened");

  return (
    <Styled.SidebarContainer
      sx={{
        borderRight: 1,
        borderRightColor: "borderColor.main",
        minWidth: isSidebarOpened ? "15rem" : "",
      }}
    >
      {sidebarItems.map((item) => {
        return <SidebarItem key={item.id} item={item} />;
      })}
    </Styled.SidebarContainer>
  );
}
