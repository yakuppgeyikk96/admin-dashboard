import { AppBar } from "@mui/material";
import { styled } from "@mui/system";

export const TopbarContainer = styled(AppBar)(({ theme }) => ({
  background: theme.palette.background.default,
}));
