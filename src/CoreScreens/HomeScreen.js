import { styled } from "@mui/material/styles";
import { Box, Container, Stack, Card } from "@mui/material";
import Page from "../Components/Page";
import Snapshot from "../Components/Snapshot";

import { ComplianceAnalytic } from "../Components/ComplianceAnalytic";
const RootStyle = styled(Page)(({ theme }) => ({
  overflowY: "scroll",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export default function HomeScreen() {
  return (
    <RootStyle title="Home | Highgate EMS ">
      <Container maxWidth="lg" sx={{ display: "flex", flex: 1 }}>
        <Stack direction="column" sx={{ width: "100%" }}>
          <Stack
            direction="row"
            justifyContent="space-evenly"
            spacing={2}
            sx={{ width: "100%" }}
          >
            <Snapshot
              power="166 kwH"
              waste="166 lbs"
              water="166 litres"
              hours="166 hours"
            ></Snapshot>
            <Card
              sx={{
                padding: 4,
                width: "100%",
                borderRadius: 10,
              }}
              elevation={5}
            >
              <ComplianceAnalytic
                series={[44, 100 - 44]}
                labels={["Compliant", "Non-Compliant"]}
              ></ComplianceAnalytic>
            </Card>
          </Stack>
        </Stack>
      </Container>
    </RootStyle>
  );
}
