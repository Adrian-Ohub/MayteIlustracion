import React, { useState, useEffect } from "react";
import { GridList, GridListTile, GridListTileBar } from "@material-ui/core";
import GetImages from "../../services/GetImages";
import Image from "../SingleImg";
import withWidth, { isWidthUp } from "@material-ui/core/withWidth";

const GalleryCuento = (props) => {
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
    const array = GetImages({
      category: props.category,
      proyect: props.proyect,
    });
    setImages(array);
  }, [props.category, props.proyect]);

  const onClickHandler = (image) => {
    props.onClick(image);
  };
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
