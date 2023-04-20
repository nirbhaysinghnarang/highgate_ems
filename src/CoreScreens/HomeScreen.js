import { styled } from "@mui/material/styles";
import { useState } from "react";
import { Box, Container, Stack, Card, Typography } from "@mui/material";
import Page from "../Components/Page";
import Snapshot from "../Components/Snapshot";
import { ComplianceAnalytic } from "../Components/ComplianceAnalytic";
import { ButtonNav } from "../Components/ButtonNav";
const RootStyle = styled(Page)(({ theme }) => ({
  overflowY: "scroll",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export default function HomeScreen() {
  const [view, setView] = useState('HOME')
  return (
    <Stack direction="row" alignItems="center">
      <ButtonNav
        view={view}
        handleChange={setView}
      />
      <RootStyle title="Home | Highgate EMS ">
      <Container maxWidth="lg" sx={{ display: "flex", flex: 1 }}>
        {view=="HOME" && <Rollout></Rollout>}
        {view=="POWER" && <Electricity></Electricity>}
        {view=="HOURS" && <Hours></Hours>}
        {view=="TRASH" && <Trash></Trash>}

        {view=="WATER" && <Water></Water>}
        {view=="PAPER" && <Paper></Paper>}

        
      </Container>
      </RootStyle>
    </Stack>

  );

  function Rollout(){
    return (
      <Typography>Rollout</Typography>
    );
  }

  function Electricity(){
    return (
      <Typography>Electricity</Typography>
    );
  }

  function Water(){
    return (
      <Typography>Water</Typography>
    );
  }

  function Hours(){
    return (
      <Typography>Hours</Typography>
    );
  }

  function Paper(){
    return (
      <Typography>Paper</Typography>
    );
  }

  function Trash(){
    return (
      <Typography>Trash</Typography>
    );
  }
}
