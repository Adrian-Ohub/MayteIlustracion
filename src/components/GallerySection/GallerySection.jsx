import React, { useState, useEffect } from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from "@material-ui/core";
import Image from "../SingleImg";
import { Link as LinkRouter } from "react-router-dom";
import GetImages from "../../services/GetImages";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import _ from "lodash";

const useStyles = makeStyles(() => ({
  gridlist: {
    flexWrap: "wrap",
    transform: "translateZ(0)",
    /* height: "100%", */
  },
}));

function GalleryImgs(props) {
  const getGridListCols = () => {
    if (isWidthUp("xl", props.width)) {
      return 3;
    }

    if (isWidthUp("lg", props.width)) {
      return 3;
    }

    if (isWidthUp("md", props.width)) {
      return 2;
    }

    return 1;
  };
  const classes = useStyles();
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (props.category !== "") {
      const collection = GetImages({
        category: props.category,
      });
      const arrayFirstItem = [];
      _(collection).forEach((img) => {
        arrayFirstItem.push(img[0]);
      });
      setImages(arrayFirstItem);
    } else {
      const collection = GetImages({ category: "" });
      const arrayFirstItem = [];
      _(collection).forEach((img) => {
        arrayFirstItem.push(img[0]);
      });
      setImages(arrayFirstItem);
    }
  }, [props.category]);
  return (
    <GridList
      className={classes.gridlist}
      cellHeight={"auto"}
      cols={getGridListCols()}
      spacing={5}
    >
      {images.map((singleImage) => (
        <GridListTile
          key={singleImage.title}
          component={LinkRouter}
          //singleImage.tag puede ser sustituido por props.category?
          to={`${singleImage.tag}/${singleImage.title}`}
        >
          <Image img={singleImage.img} title={singleImage.title} />
          <GridListTileBar title={singleImage.title} />
        </GridListTile>
      ))}
    </GridList>
  );
}

export default withWidth()(GalleryImgs);
