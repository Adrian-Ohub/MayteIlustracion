import React from "react";
import PropTypes from "prop-types";
import { Typography } from "@material-ui/core";

const Footer = () => {
  return (
    <Typography variant="body2" color="inherit">
      Made with ♥ by Gnomo
    </Typography>
  );
};

Footer.propTypes = {
  children: PropTypes.node,
};

export default Footer;
