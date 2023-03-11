import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
import NavBar from "./NavBar";
import { Card, Box } from "@mui/material";
// ----------------------------------------------------------------------
const Page = forwardRef(({ children, title = "", ...other }, ref) => (
  <Card ref={ref} {...other}>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    <NavBar></NavBar>

    {children}
  </Card>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
