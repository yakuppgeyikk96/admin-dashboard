"use client";

import sidebarItems from "@/constants/SidebarItems";
import SidebarItem from "./SidebarItem";
import * as Styled from "./Sidebar.styled";

export default function Sidebar() {
  return (
    <Styled.SidebarContainer
      sx={{
        borderRight: 1,
        borderRightColor: "borderColor.main",
      }}
    >
      {sidebarItems.map((item) => {
        return <SidebarItem key={item.id} item={item} />;
      })}
    </Styled.SidebarContainer>
  );
}
