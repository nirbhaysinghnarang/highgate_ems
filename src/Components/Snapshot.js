import React from "react";
import { Stack, Typography, Card } from "@mui/material";
import { Power, Opacity, Delete, VolunteerActivism } from "@mui/icons-material";

function SnapshotElement({ snapshotIcon, text }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {snapshotIcon}
      <Typography sx={{ fontSize: "large" }}>{text}</Typography>
    </Stack>
  );
}
export default function Snapshot({ power, water, waste, hours }) {
  return (
    <Card sx={{ padding: 4, borderRadius: 5 }} elevation={5}>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        {" "}
        Realized Savings
      </Typography>

      <Stack direction="column" spacing={2}>
        <Stack direction="row" spacing={1}  alignItems={"center"} justifyContent="space-around">
          <SnapshotElement
            snapshotIcon={<Power fontSize="large" htmlColor="#6F7378"></Power>}
            text={power}
          ></SnapshotElement>
          <SnapshotElement
            snapshotIcon={
              <Opacity fontSize="large" htmlColor="#6F7378"></Opacity>
            }
            text={water}
          ></SnapshotElement>
        </Stack>
        <Stack direction="row" spacing={1}  alignItems={"center"} justifyContent="space-around">
          <SnapshotElement
            snapshotIcon={<Delete fontSize="large" htmlColor="#6F7378"></Delete>}
            text={waste}
          ></SnapshotElement>
          <SnapshotElement
            snapshotIcon={
              <VolunteerActivism
                fontSize="large"
                htmlColor="#6F7378"
              ></VolunteerActivism>
            }
            text={hours}
          ></SnapshotElement>
        </Stack>

      </Stack>
    </Card>
  );
}
