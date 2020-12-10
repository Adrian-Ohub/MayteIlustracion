import React, { useState, useEffect } from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import getImages from "../../../../services/getImages";
import Image from "../../../SingleImg";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";
import _ from "lodash";

const GalleryCuento = (props) => {
  console.log(props);
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

  const [images, setImages] = useState([]);

  useEffect(() => {
    const imgCuento = _.map(getImages().ilustracion, props.proyect);
    setImages(_.map(imgCuento[0]));
  }, [props.proyect]);

  const onClickHandler = (data) => {
    props.onClick(data);
    console.log(data);
  };
  console.log(images);
  return (
    <GridList cellHeight={"auto"} cols={getGridListCols()}>
      {images.map((singleImage) => (
        <GridListTile
          key={singleImage.title}
          onClick={() => onClickHandler(singleImage)}
          style={{ cursor: "pointer" }}
        >
          <Image img={singleImage.img} title={singleImage.title} />
          <GridListTileBar title={singleImage.title} titlePosition="bottom" />
        </GridListTile>
      ))}
    </GridList>
  );
};

export default withWidth()(GalleryCuento);
