import PropTypes from "prop-types";
import { Helmet } from "react-helmet-async";
import { forwardRef } from "react";
import NavBar from "./NavBar";
import { Card, Container } from "@mui/material";
// ----------------------------------------------------------------------
const Page = forwardRef(({ children, title = "",isLogin=false, ...other  }, ref) => (
  <Card
    p={2}
    sx={{ borderRadius: 5, width: "100%", height: "100%", }}
    ref={ref}
    {...other}
  >
    <Container>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {!isLogin && <NavBar></NavBar>}
      {children}
    </Container>
  </Card>
));

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string,
};

export default Page;
