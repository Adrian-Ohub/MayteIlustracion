import React from "react";
import PropTypes from "prop-types";
import AppFrame from "../components/AppFrame/AppFrame";
import { makeStyles, Grid } from "@material-ui/core";

/* const useStyles = makeStyles((theme) => ({})); */

const Ilustracionpage = (props) => {
  /*   const classes = makeStyles(); */
  return (
    <AppFrame>
      <Grid container item xs={12}>
        <h2>HOLA</h2>
        <Grid item xs={6}>
          <h3>caracola</h3>
        </Grid>
      </Grid>
    </AppFrame>
  );
};

Ilustracionpage.propTypes = {};

export default Ilustracionpage;
