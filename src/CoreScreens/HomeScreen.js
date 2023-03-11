import { styled } from "@mui/material/styles";
import { Box, Container, Typography, Stack } from "@mui/material";
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
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}></Box>
      </Container>
    </RootStyle>
  );
}
