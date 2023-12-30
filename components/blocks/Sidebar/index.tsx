"use client";

import sidebarItems from "@/constants/SidebarItems";
import { MenuList } from "@mui/material";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  return (
    <MenuList>
      {sidebarItems.map((item) => {
        return <SidebarItem key={item.id} item={item} />;
      })}
    </MenuList>
  );
}
