"use client";

import SidebarToggler from "@/components/elements/SidebarToggler";
import ThemeToggler from "@/components/elements/ThemeToggler";
import * as Styled from "./Topbar.styled";
import {
  Avatar,
  Badge,
  Box,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
} from "@mui/material";
import { Mail, MoreVert, Notifications } from "@mui/icons-material";

export default function Topbar() {
  return (
    <Styled.TopbarContainer position="static" elevation={0}>
      <Toolbar disableGutters sx={{ padding: "0 1rem" }}>
        <SidebarToggler />
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "none", md: "flex" },
            justifyContent: "flex-end",
          }}
        >
          <ThemeToggler />
          <IconButton aria-label="show new messages">
            <Badge badgeContent={4} color="primary">
              <Mail />
            </Badge>
          </IconButton>
          <IconButton aria-label="show new messages">
            <Badge badgeContent={112} color="primary">
              <Notifications />
            </Badge>
          </IconButton>
          <Box sx={{ padding: "0 2rem" }}>
            <Tooltip title="Open Settings">
              <IconButton>
                <Avatar
                  alt="Christopher Campbell"
                  src="/images/profile_pic.jpg"
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            display: { xs: "flex", md: "none" },
            justifyContent: "flex-end",
          }}
        >
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
          >
            <MoreVert />
          </IconButton>
        </Box>
      </Toolbar>
    </Styled.TopbarContainer>
  );
}
