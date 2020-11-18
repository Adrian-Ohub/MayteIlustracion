import React from "react";
import AppFrame from "../components/AppFrame/AppFrame";
import { Grid, makeStyles, Typography, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({}));
const Homepage = (props) => {
  const classes = useStyles();
  return (
    <AppFrame>
      <Grid item>
        <Typography variant="h6" color="initial">
          Bienvenidos a mi pagina web de diseño
        </Typography>

        <Paper>Hola mundo</Paper>
        <Paper>Hola mundo</Paper>
        <Paper>Hola mundo</Paper>
        <Paper>Hola mundo</Paper>
        <Paper>Hola mundo</Paper>
      </Grid>
    </AppFrame>
  );
};

export default Homepage;
