import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  img: {
    display: "block",
    width: "100%",
    height: "200px",
  },
}));

function ImagesIlustration({ img, title }) {
  const classes = useStyle();

  return <img src={img} alt={title} className={classes.img} />;
}

export default ImagesIlustration;
