"use client";

import ISidebarItem from "@/constants/models/SidebarItem.model";
import generateIcon from "@/utils/generateIcon";
import ifPathnameIncludes from "@/utils/ifPathnameIncludes";
import { ExpandMore } from "@mui/icons-material";
import {
  Button,
  ClickAwayListener,
  Grow,
  ListItemIcon,
  ListItemText,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Typography,
} from "@mui/material";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import SidebarItemWithChildren from "./SidebarItemWithChildren";

interface Props {
  item: ISidebarItem;
}

export default function SidebarItem({ item }: Props) {
  const pathname = usePathname();

  const Icon = item.icon && generateIcon(item.icon);

  if (item.children && item.children.length) {
    return <SidebarItemWithChildren item={item} />;
  }

  return (
    <Link
      href={(item.children && item.children[0].href) || "/"}
      passHref
      legacyBehavior
    >
      <MenuItem selected={!!ifPathnameIncludes(pathname, item.basepath)}>
        <ListItemIcon>{Icon ? <Icon /> : null}</ListItemIcon>
        <ListItemText>
          <Typography fontWeight={600}>{item.title}</Typography>
        </ListItemText>
      </MenuItem>
    </Link>
  );
}
