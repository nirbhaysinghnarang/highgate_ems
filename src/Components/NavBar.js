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
    <Box sx={{ flexGrow: 1, width: "100%" }}>
      <ToolbarStyle
        style={{ flex: 1, justifyContent: "space-between", width: "100%" }}
      >
        <Stack
          direction="row"
          flex={1}
          display="flex"
          justifyContent="space-between"
          alignItems={"center"}
        >
          <Typography variant="h4">Highgate</Typography>

          <Stack
            ml={5}
            direction="row"
            flex={1}
            spacing={2}
            display="flex"
            justifyContent={"space-evenly"}
          >
            <Typography variant="subtitle1">HOME</Typography>
            <Typography variant="subtitle1">ANALYSE</Typography>
            <Typography variant="subtitle1">PROJECTS</Typography>
            <Typography variant="subtitle1">GOALS</Typography>
          </Stack>
        </Stack>
      </ToolbarStyle>
    </Box>
  );
}
