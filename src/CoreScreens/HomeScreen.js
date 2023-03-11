import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack, Card } from "@mui/material";
import Page from "../Components/Page";
import { Toolbar } from "@mui/material";
import NavBar from "../Components/NavBar";
const RootStyle = styled(Page)(({ theme }) => ({
  overflowY: "scroll",
  [theme.breakpoints.up("md")]: {
    display: "flex",
  },
}));

export default function HomeScreen() {
  return (
    <RootStyle title="Home | Highgate EMS ">
      <Container maxWidth="lg">
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <Stack direction="column" sx={{ width: "100%", height: "100%" }}>
            <Stack
              direction="row"
              justifyContent="space-evenly"
              spacing={2}
              sx={{ width: "100%" }}
            >
              <Card sx={{ flexGrow: 1, width: 200, height: 200 }}>
                <Typography> Hello</Typography>
              </Card>
              <Card sx={{ flexGrow: 1, width: 200, height: 200 }}>
                <Typography> Hello</Typography>
              </Card>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </RootStyle>
  );
}
