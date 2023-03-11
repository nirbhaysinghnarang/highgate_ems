import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Card } from "@mui/material";
import Page from "../Components/Page";
import Snapshot from "../Components/Snapshot";
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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Stack
            direction="column"
            sx={{ width: "100%", height: "100%", display: "flex", flex: 1 }}
          >
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
            </Stack>
          </Stack>
        </Box>
      </Container>
    </RootStyle>
  );
}
