"use client";
import sidebarItems from "@/constants/SidebarItems";
import generateIcon from "@/utils/generateIcon";
import { ChevronLeft, ExpandMore } from "@mui/icons-material";
import {
  Box,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const ifPathnameIncludes = (basepath: string | undefined) => {
    if (basepath === "/") {
      return pathname === basepath;
    }
    return basepath && pathname.includes(basepath);
  };

  return (
    <Box>
      <MenuList>
        {sidebarItems.map((item) => {
          const Icon = item.icon && generateIcon(item.icon);
          return (
            <Link
              key={item.id}
              href={(item.children && item.children[0].href) || "/"}
              passHref
              legacyBehavior
            >
              <MenuItem selected={!!ifPathnameIncludes(item.basepath)}>
                <ListItemIcon>{Icon ? <Icon /> : null}</ListItemIcon>
                <ListItemText>{item.title}</ListItemText>
                <ListItemIcon>
                  <ExpandMore />
                </ListItemIcon>
              </MenuItem>
            </Link>
          );
        })}
      </MenuList>
    </Box>
  );
}
