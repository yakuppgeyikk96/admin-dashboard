"use client";

import { ArrowLeftFromLine, ArrowRightFromLine } from "lucide-react";
import { useLocalStorage } from "usehooks-ts";

const iconClasses = "cursor-pointer";

export default function SidebarSwitcher() {
  const [isSidebarOpened, setIsSidebarOpened] = useLocalStorage(
    "isSidebarOpened",
    true
  );

  const toggleSidebar = () => {
    setIsSidebarOpened((prevVal) => !prevVal);
  };

  return isSidebarOpened ? (
    <ArrowLeftFromLine className={iconClasses} onClick={toggleSidebar} />
  ) : (
    <ArrowRightFromLine className={iconClasses} onClick={toggleSidebar} />
  );
}
