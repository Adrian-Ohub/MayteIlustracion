import React from "react";
import PropTypes from "prop-types";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  containerFooter: {
    width: "100vw",
    position: "fixed",
    bottom: 0,
    left: 0,
    textAlign: "center",
    paddingBottom: 10,
    backgroundColor: "rgb(77, 182, 172)",
  },
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Typography
      className={classes.containerFooter}
      variant="h6"
      color="inherit"
    >
      Made with ♥ by Gnomo
    </Typography>
  );
};

Header.propTypes = {
  children: PropTypes.node,
};

export default Header;
