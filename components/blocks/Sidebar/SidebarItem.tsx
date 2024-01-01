"use client";

import ISidebarItem from "@/constants/models/SidebarItem.model";
import generateIcon from "@/utils/generateIcon";
import ifPathnameIncludes from "@/utils/ifPathnameIncludes";
import {
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";

import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarItemWithChildren from "./SidebarItemWithChildren";
import { useReadLocalStorage } from "usehooks-ts";

interface Props {
  item: ISidebarItem;
}

export default function SidebarItem({ item }: Props) {
  const isSidebarOpened = useReadLocalStorage("isSidebarOpened");
  const pathname = usePathname();

  const Icon = item.icon && generateIcon(item.icon);

  const pathnameIncludes = !!ifPathnameIncludes(pathname, item.basepath);

  if (item.children && item.children.length) {
    return <SidebarItemWithChildren item={item} />;
  }

  return (
    <Link
      href={(item.children && item.children[0].href) || "/"}
      passHref
      legacyBehavior
    >
      <MenuItem selected={pathnameIncludes}>
        <ListItemIcon
          sx={{
            paddingLeft: isSidebarOpened ? "0" : "0.2rem",
          }}
        >
          {Icon ? (
            <Icon
              sx={{
                color: pathnameIncludes ? "primary.main" : "#606060",
              }}
            />
          ) : null}
        </ListItemIcon>
        {isSidebarOpened ? (
          <ListItemText>
            <Typography
              fontWeight={600}
              color={pathnameIncludes ? "primary.main" : "#606060"}
            >
              {item.title}
            </Typography>
          </ListItemText>
        ) : null}
      </MenuItem>
    </Link>
  );
}
