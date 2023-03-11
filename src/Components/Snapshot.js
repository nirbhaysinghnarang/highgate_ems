import React from "react";
import { Stack, Typography, Card } from "@mui/material";
import { Power, Opacity, Delete, VolunteerActivism } from "@mui/icons-material";

function SnapshotElement({ snapshotIcon, text }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {snapshotIcon}
      <Typography variant="body1">{text}</Typography>
    </Stack>
  );
}
export default function Snapshot({ power, water, waste, hours }) {
  return (
    <Card
      sx={{ flexGrow: 1, width: "100%", padding: 4, borderRadius: 10 }}
      elevation={5}
    >
      <Typography variant="h5" gutterBottom>
        {" "}
        Snapshot
      </Typography>

      <Stack direction="column">
        <SnapshotElement
          snapshotIcon={<Power></Power>}
          text={power}
        ></SnapshotElement>
        <SnapshotElement
          snapshotIcon={<Opacity></Opacity>}
          text={water}
        ></SnapshotElement>
        <SnapshotElement
          snapshotIcon={<Delete></Delete>}
          text={waste}
        ></SnapshotElement>
        <SnapshotElement
          snapshotIcon={<VolunteerActivism></VolunteerActivism>}
          text={hours}
        ></SnapshotElement>
      </Stack>
    </Card>
  );
}
