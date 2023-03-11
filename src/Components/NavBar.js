import React from "react";
import { Stack, Typography, Toolbar, Box, Button, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 88;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter,
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <ToolbarStyle style={{ flex: 1, justifyContent: "space-between" }}>
        <Stack
          direction="row"
          flex={1}
          sx={{ flexGrow: 1 }}
          justifyContent="space-around"
          alignItems={"center"}
          spacing={5}
        >
          <Typography variant="h5">Highgate</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Typography>Home</Typography>
          <Typography>Analyse</Typography>
          <Typography>Projects</Typography>
          <Typography>Goals</Typography>
        </Stack>
      </ToolbarStyle>
    </Box>
  );
}
