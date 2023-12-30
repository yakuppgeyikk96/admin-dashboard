import ISidebarItem from "@/constants/models/SidebarItem.model";
import generateIcon from "@/utils/generateIcon";
import ifPathnameIncludes from "@/utils/ifPathnameIncludes";
import {
  CheckOutlined,
  ChevronRight,
  ExpandLess,
  ExpandMore,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  Box,
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  MenuItem,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface Props {
  item: ISidebarItem;
}

export default function SidebarItemWithChildren({ item }: Props) {
  const pathname = usePathname();

  const Icon = item.icon && generateIcon(item.icon);

  const pathnameIncludes = !!ifPathnameIncludes(pathname, item.basepath);

  return (
    <Box>
      <Link
        href={(item.children && item.children[0].href) || "/"}
        passHref
        legacyBehavior
      >
        <MenuItem selected={pathnameIncludes}>
          <ListItemIcon>{Icon ? <Icon /> : null}</ListItemIcon>
          <ListItemText>
            <Typography fontWeight={600}>{item.title}</Typography>
          </ListItemText>
          <ListItemIcon>
            {pathnameIncludes ? <ExpandLess /> : <ExpandMore />}
          </ListItemIcon>
        </MenuItem>
      </Link>
      <Collapse in={pathnameIncludes} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.children &&
            item.children.length &&
            item.children.map((child) => (
              <Link
                key={child.id}
                href={child.href || "/"}
                passHref
                legacyBehavior
              >
                <ListItemButton sx={{ pl: 2 }}>
                  <KeyboardArrowRight
                    sx={{
                      visibility: pathname === child.href ? "unset" : "hidden",
                    }}
                    color="primary"
                  />
                  <ListItemText>
                    <Typography fontWeight={600}>{child.title}</Typography>
                  </ListItemText>
                </ListItemButton>
              </Link>
            ))}
        </List>
      </Collapse>
    </Box>
  );
}
