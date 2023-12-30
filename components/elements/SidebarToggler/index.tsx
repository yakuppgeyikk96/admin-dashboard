"use client";

import { KeyboardBackspace, Menu as MenuIcon } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useLocalStorage } from "usehooks-ts";

export default function SidebarToggler() {
  const [isSidebarOpened, setIsSidebarOpened] = useLocalStorage(
    "isSidebarOpened",
    true
  );

  const toggleSidebar = () => {
    setIsSidebarOpened((prevVal) => !prevVal);
  };

  return isSidebarOpened ? (
    <IconButton onClick={toggleSidebar}>
      <KeyboardBackspace />
    </IconButton>
  ) : (
    <IconButton onClick={toggleSidebar}>
      <MenuIcon />
    </IconButton>
  );
}
