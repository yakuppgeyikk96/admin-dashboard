"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, Settings, LogOut } from "lucide-react";
import { useTheme } from "@/context/theme-context";
import { MenuItem } from "./menu-item";
import { Header } from "./header";
import { type ProfileData, type ProfileMenuItem } from "./types";
import { Fragment } from "react";

const defaultMenuItems: ProfileMenuItem[] = [
  {
    icon: User,
    label: "Profile",
    onClick: () => console.log("Profile clicked"),
  },
  {
    icon: Settings,
    label: "Settings",
    onClick: () => console.log("Settings clicked"),
  },
  {
    icon: LogOut,
    label: "Log out",
    onClick: () => console.log("Logout clicked"),
    variant: "destructive",
  },
];

interface ProfileDropdownProps {
  profile: ProfileData;
  menuItems?: ProfileMenuItem[];
}

export const ProfileDropdown = ({
  profile,
  menuItems = defaultMenuItems,
}: ProfileDropdownProps) => {
  const { theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="outline-none">
        <Avatar className="transition-transform hover:scale-105">
          <AvatarImage src={profile.avatarUrl} />
          <AvatarFallback>
            {profile.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        sideOffset={5}
        className={`w-56 data-[state=open]:animate-menu-open ${
          theme === "dark" ? "dark" : ""
        }`}
      >
        <Header {...profile} />
        <DropdownMenuSeparator />
        {menuItems.map((item, index) => (
          <Fragment key={item.label}>
            <MenuItem {...item} />
            {index === menuItems.length - 2 && <DropdownMenuSeparator />}
          </Fragment>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
