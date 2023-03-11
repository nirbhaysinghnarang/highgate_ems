import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
import NavBar from "./NavBar";
import { Card, Stack } from "@mui/material";
// ----------------------------------------------------------------------
const Page = forwardRef(({ children, title = "", ...other }, ref) => (
  <Card p={2} sx={{ borderRadius: 5 }} ref={ref} {...other}>
    <Stack direction="column">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <NavBar></NavBar>

      {children}
    </Stack>
  </Card>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
