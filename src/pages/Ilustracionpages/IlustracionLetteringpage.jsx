import React, { useState } from "react";
import AppFrame from "../../components/AppFrame/AppFrame";
import { Grid, Typography, makeStyles } from "@material-ui/core";
import GalleryLettering from "../../components/GalleryImgs/GalleryIlustracion/GalleryLettering/GalleryLettering";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
  },
  img: {
    display: "block",
    width: "100%",
    objectFit: "contain",
    cursor: "pointer",
  },
}));
const IlustracionLetteringpage = () => {
  const classes = useStyles();

  const [img, setImg] = useState("");
  const [imgTitle, setImgTitle] = useState("");
  const onClickHandler = (src) => {
    setImg(src.img);
    setImgTitle(src.title);
    console.log(src);
  };

  return (
    <AppFrame>
      <Grid container item xs={12}>
        <Grid item xs={12}>
          <Typography variant="h2" color="inherit">
            Ilustracion - Lettering
          </Typography>
        </Grid>
        <Grid container item spacing={2} className={classes.root}>
          <Grid item xs={12}>
            <Typography variant="h6" color="inherit" align="right">
              Haz 'click' sobre las miniaturas
            </Typography>
          </Grid>
          <Grid item xs={4}>
            <GalleryLettering onClick={onClickHandler}></GalleryLettering>
          </Grid>
          <Grid item xs={8}>
            <img src={img} alt={imgTitle} className={classes.img} />
          </Grid>
        </Grid>
      </Grid>
    </AppFrame>
  );
};

export default IlustracionLetteringpage;