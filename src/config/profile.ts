// src/config/profile.ts
import { User, Settings, LogOut } from "lucide-react";
import {
  ProfileData,
  ProfileMenuItem,
} from "@/components/navbar/profile-dropdown/types";

export const profileData: ProfileData = {
  name: "John Doe",
  email: "john@example.com",
  avatarUrl: "https://github.com/shadcn.png",
};

export const profileMenuItems: ProfileMenuItem[] = [
  {
    icon: User,
    label: "Profile",
    onClick: () => {
      console.log("Profile clicked");
      // Router.push('/profile')
    },
  },
  {
    icon: Settings,
    label: "Settings",
    onClick: () => {
      console.log("Settings clicked");
      // Router.push('/settings')
    },
  },
  {
    icon: LogOut,
    label: "Log out",
    onClick: () => {
      console.log("Logout clicked");
      // logout işlemleri
    },
    variant: "destructive",
  },
];
