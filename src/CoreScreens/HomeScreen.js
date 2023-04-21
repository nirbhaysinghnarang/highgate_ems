import { styled } from "@mui/material/styles";
import { useEffect, useState } from "react";
import { Box, Container, Stack, Card, Typography } from "@mui/material";
import Page from "../Components/Page";
import Snapshot from "../Components/Snapshot";
import { ComplianceAnalytic } from "../Components/ComplianceAnalytic";
import { ButtonNav } from "../Components/ButtonNav";
import { ProgressAnaytic } from "../Components/ProgressAnalytic";
import VolunteerSnapshot from "../Components/VolunteerSnapshot";
import { VolunteeringAnalytic } from "../Components/VolunteeringAnalytic";
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
        <Container maxWidth="lg" sx={{ display: "flex", flex: 1, minHeight: "80vh" }}>
          {view == "HOME" && <Rollout></Rollout>}
          {view == "POWER" && <Electricity></Electricity>}
          {view == "HOURS" && <Hours></Hours>}
          {view == "TRASH" && <Trash></Trash>}
          {view == "WATER" && <Water></Water>}
          {view == "PAPER" && <Paper></Paper>}
        </Container>
      </RootStyle>
    </Stack>

  );

  function Rollout() {
    return (
      <Stack direction="row" justifyContent="space-evenly" spacing={2} flex={1}>
        <Stack direction="column" flex={1} flexGrow={1} spacing={2}>
          <Snapshot power={"166"} waste={"166"} water={"166"} hours={"166"} />
          <ProgressAnaytic 
          goalSeries={[44, 100 ,44, 100]}
          goalLabels={["Not started", "On track", "Falling short", "Done"]}
          projectSeries={[44, 100 ,44, 100]}
          projectLabels={["Not started", "On track", "Falling short", "Done"]}></ProgressAnaytic>
        </Stack>
        <Stack direction="column" flex={1} flexGrow={2} spacing={2}>
          <ComplianceAnalytic
            series={[44, 100 - 44]}
            labels={["Compliant", "Non-Compliant"]}
          ></ComplianceAnalytic>
        </Stack>


      </Stack>
    );
  }

  function Electricity() {
    return (
      <Typography>Electricity</Typography>
    );
  }

  function Water() {
    return (
      <Typography>Water</Typography>
    );
  }

  function Hours() {
    return (
      <Stack direction="row" justifyContent="space-evenly" spacing={2}>
        <Stack direction="column" spacing={2}>
          <VolunteerSnapshot hours={"30,649"} raised={"USD 30,000"} engagement={"500 people"}> </VolunteerSnapshot>
          <VolunteeringAnalytic series={[1,2,3]} labels={["Food", "Env", "Edu", "Health", "Misc"]}></VolunteeringAnalytic>
        </Stack>



      </Stack>
    );
  }

  function Paper() {
    return (
      <Typography>Paper</Typography>
    );
  }

  function Trash() {
    return (
      <Typography>Trash</Typography>
    );
  }
}
