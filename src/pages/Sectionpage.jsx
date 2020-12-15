import React, { useState, useEffect } from "react";
import AppFrame from "../components/AppFrame/AppFrame";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import GallerySection from "../components/GallerySection";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "hidden",
    minHeight: "100%",
  },
}));

const Sectionpage = (props) => {
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (props.category === "") {
      setTitle("Bienvenidos");
    } else {
      setTitle(props.category);
    }
  }, [props.category]);

  const classes = useStyles();

  return (
    <AppFrame>
      <Grid container item className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" color="inherit">
            {title}
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <GallerySection category={props.category}></GallerySection>
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default Sectionpage;
