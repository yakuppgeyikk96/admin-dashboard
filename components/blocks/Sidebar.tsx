"use client";

import sidebarItems from "@/constants/SidebarItems";
import SidebarItem from "../elements/SidebarItem";
import { useReadLocalStorage } from "usehooks-ts";

export default function Sidebar() {
  const isSidebarOpened = useReadLocalStorage("isSidebarOpened");

  return (
    <ul
      className={`dark bg-background text-primary h-screen shadow-2xl p-3 flex flex-col gap-2 ${
        isSidebarOpened ? "w-64" : "w-12"
      }`}
    >
      {sidebarItems.map((sidebarItem) => {
        return <SidebarItem key={sidebarItem.id} item={sidebarItem} />;
      })}
    </ul>
  );
}
