import React, { useState, useEffect } from "react";
import AppFrame from "../components/AppFrame/AppFrame";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import GalleryImgs from "../components/GalleryImgs";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    overflow: "hidden",
    minHeight: "100%",
  },
}));

const Homepage = () => {
  /* //funcion de filtro
  const [keywordList, setKeywordList] = useState("");
  const myCallBack = (value) => {
    setKeywordList(value);
  }; */

  const classes = useStyles();

  return (
    <AppFrame /* keyword={myCallBack} */>
      <Grid container item className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h2" color="inherit">
            Bienvenidos
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <GalleryImgs /* keyword={keywordList} */></GalleryImgs>
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default Homepage;
