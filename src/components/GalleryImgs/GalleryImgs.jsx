import React, { useState, useEffect } from "react";
import {
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from "@material-ui/core";
import Image from "../../components/SingleImg";
import { Link as LinkRouter } from "react-router-dom";
import getImages from "../../services/getImages/getImages";
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
    const collectionIlustracion = _.map(getImages().data[0].ilustracion[0]);
    const collectionDiseño = _.map(getImages().data[0].diseño[0]);

    const arrayIlustracion = [];
    _(collectionIlustracion).forEach((img) => {
      arrayIlustracion.push(img[0]);
    });

    const arrayDiseño = [];
    _(collectionDiseño).forEach((img) => {
      arrayDiseño.push(img[0]);
    });
    if (props.keyword === "ilustracion") {
      setImages(arrayIlustracion);
    } else if (props.keyword === "diseño") {
      setImages(arrayDiseño);
    } else {
      setImages(_.union(arrayIlustracion, arrayDiseño));
    }
  }, [props]);

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
