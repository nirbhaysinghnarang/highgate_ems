import React from "react";
import { Stack, Typography, Card } from "@mui/material";
import { Timer, Group, MonetizationOn} from "@mui/icons-material";

function SnapshotElement({ snapshotIcon, text }) {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      {snapshotIcon}
      <Typography sx={{ fontSize: "medium" }}>{text}</Typography>
    </Stack>
  );
}
export default function VolunteerSnapshot({ hours, raised, engagement }) {
  return (
    <Card sx={{ padding: 4, borderRadius: 10 }} elevation={5}>
      <Typography variant="h6" gutterBottom sx={{ mb: 3 }}>
        {" "}
        Volunteering Snapshot
      </Typography>

      <Stack direction="column" spacing={2}>
          <SnapshotElement
            snapshotIcon={<Timer fontSize="large" htmlColor="#6F7378"></Timer>}
            text={hours}
          ></SnapshotElement>
          <SnapshotElement
            snapshotIcon={
              <MonetizationOn fontSize="large" htmlColor="#6F7378"></MonetizationOn>
            }
            text={raised}
          ></SnapshotElement>
          <SnapshotElement
            snapshotIcon={<Group fontSize="large" htmlColor="#6F7378"></Group>}
            text={engagement}
          ></SnapshotElement>
         

      </Stack>
    </Card>
  );
}
