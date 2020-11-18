import React from "react";
import PropTypes from "prop-types";
import {
  Grid,
  Typography,
  AppBar,
  Toolbar,
  Button,
  makeStyles,
} from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";
import Header from "../Footer";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  container: {
    height: "100vh",
    paddingInlineStart: "1em",
    paddingInlineEnd: "1em",
  },
  typographyNavbar: {
    flexGrow: 1,
  },
}));

const NavBtn = (to, text) => {
  return (
    <Button component={LinkRouter} to={to} color="inherit">
      {text}
    </Button>
  );
};

const AppFrame = ({ children }) => {
  const classes = useStyles();
  return (
    //Grid container sive para generar un contenedor y disponer los elementos (items)
    <Grid container direction="column" className={classes.container}>
      <AppBar position="fixed" color="primary">
        <Toolbar>
          <Typography
            className={classes.typographyNavbar}
            variant="h6"
            color="inherit"
          >
            {NavBtn("/", "MAV")}
          </Typography>
          {NavBtn("/home", "HOME")}
          {NavBtn("/ilustracion", "ILUSTRACION")}
          {NavBtn("/contacto", "CONTACTO")}
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      <Grid item>{children}</Grid>
      <Header></Header>
    </Grid>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node,
};

export default AppFrame;
