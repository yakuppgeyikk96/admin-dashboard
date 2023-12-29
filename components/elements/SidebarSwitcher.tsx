"use client";

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

  // return isSidebarOpened ? (
  //   <ArrowLeftFromLine className={iconClasses} onClick={toggleSidebar} />
  // ) : (
  //   <ArrowRightFromLine className={iconClasses} onClick={toggleSidebar} />
  // );

  return <div>Sşdebar switch</div>;
}
