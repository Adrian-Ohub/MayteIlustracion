import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
  Grid,
  MenuItem,
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
} from "@material-ui/core";
import { Link as LinkRouter } from "react-router-dom";
import Footer from "../Footer";
import Logo from "../../assets/logo/logo.jpeg";

const useStyles = makeStyles((theme) => ({
  offset: theme.mixins.toolbar,
  root: {
    minHeight: "100vh",
    position: "relative",
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  divLeft: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "stretch",
  },
  divImg: {
    width: "7rem",
    display: "flex",
  },
  img: {
    /* objectFit: "contain",
    width: "100%", */
    maxWidth: "100%",
    maxHeight: "100%",
    display: "block",
  },
  footer: {
    width: "100%",
    position: "absolute",
    bottom: 0,
    textAlign: "center",
    backgroundColor: "#f5f5f5",
  },
}));

const AppFrame = ({ children, keyword }) => {
  const myCallBack = (category) => {
    keyword(category);
  };
  const classes = useStyles();
  console.log("category en AppFrame:");
  return (
    //Grid container sive para generar un contenedor y disponer los elementos (items)
    <div className={classes.root}>
      <AppBar position="fixed" color="primary">
        <Toolbar className={classes.toolbar}>
          <div className={classes.divLeft}>
            <div className={classes.divImg}>
              <img src={Logo} alt="logo" className={classes.img} />
            </div>
            <div className={classes.menu}>
              <MenuItem
                component={LinkRouter}
                onClick={() => myCallBack("ilustracion")}
                to="/ilustracion"
                color="inherit"
              >
                <Typography variant="body2">Ilustracion</Typography>
              </MenuItem>
              <MenuItem
                component={LinkRouter}
                onClick={() => myCallBack("diseño")}
                to="/home#diseño"
                color="inherit"
              >
                <Typography variant="body2">Diseño</Typography>
              </MenuItem>
              {/* <MenuItem component={LinkRouter} to="/contacto" color="inherit">
                <Typography variant="body2">Contacto</Typography>
              </MenuItem> */}
            </div>
          </div>
          <div className={classes.divRight}>
            <MenuItem
              component={LinkRouter}
              onClick={() => myCallBack("")}
              to="/home"
              color="inherit"
            >
              <Typography variant="h3">MAV</Typography>
            </MenuItem>
          </div>
        </Toolbar>
      </AppBar>
      <div className={classes.offset}></div>
      <Grid container>{children}</Grid>
      <div className={classes.offset}></div>
      <div className={classes.footer}>
        <Footer></Footer>
      </div>
    </div>
  );
};

AppFrame.propTypes = {
  children: PropTypes.node,
};

export default AppFrame;
