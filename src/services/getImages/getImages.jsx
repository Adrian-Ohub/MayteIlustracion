import React from "react";
//imagenes cuento
import cuento from "../../assets/ilustracion/cuento/foto_luz_natural.jpg";
import cuento1 from "../../assets/ilustracion/cuento/IMG_1633.jpg";
import cuento2 from "../../assets/ilustracion/cuento/IMG_1636.jpg";
import cuento3 from "../../assets/ilustracion/cuento/IMG_1657.jpg";
import cuento4 from "../../assets/ilustracion/cuento/IMG_1661.jpg";
import cuento5 from "../../assets/ilustracion/cuento/IMG_1669.jpg";
import cuento6 from "../../assets/ilustracion/cuento/IMG_1670.jpg";
import cuento7 from "../../assets/ilustracion/cuento/IMG_1675.jpg";
import cuento8 from "../../assets/ilustracion/cuento/IMG_1684.jpg";
import cuento9 from "../../assets/ilustracion/cuento/IMG_1688.jpg";
import cuento10 from "../../assets/ilustracion/cuento/IMG_1698.jpg";
import cuento11 from "../../assets/ilustracion/cuento/IMG_1701.jpg";
import cuento12 from "../../assets/ilustracion/cuento/IMG_1710.jpg";
//imagenes lettering
import letter from "../../assets/ilustracion/lettering/13307969536.jpg";
import letter1 from "../../assets/ilustracion/lettering/IMG_5683.JPG";
import letter2 from "../../assets/ilustracion/lettering/IMG_5685.JPG";
import letter3 from "../../assets/ilustracion/lettering/IMG_5690.JPG";
import letter4 from "../../assets/ilustracion/lettering/IMG_5726.JPG";
import letter5 from "../../assets/ilustracion/lettering/IMG_5729.JPG";
import letter6 from "../../assets/ilustracion/lettering/IMG_5732.JPG";
import letter7 from "../../assets/ilustracion/lettering/IMG_5735.JPG";
import letter8 from "../../assets/ilustracion/lettering/IMG_5740.JPG";
import letter9 from "../../assets/ilustracion/lettering/IMG_5745.JPG";
import letter10 from "../../assets/ilustracion/lettering/IMG_5748.JPG";
import letter11 from "../../assets/ilustracion/lettering/IMG_5835.JPG";
import letter12 from "../../assets/ilustracion/lettering/IMG_5843.JPG";
import letter13 from "../../assets/ilustracion/lettering/IMG_5847def.jpg";
import letter14 from "../../assets/ilustracion/lettering/IMG_5855.JPG";
import letter15 from "../../assets/ilustracion/lettering/IMG_5913.JPG";
import letter16 from "../../assets/ilustracion/lettering/IMG_5920.JPG";
import letter17 from "../../assets/ilustracion/lettering/IMG_5925.JPG";
import letter18 from "../../assets/ilustracion/lettering/IMG_5942.JPG";
import letter19 from "../../assets/ilustracion/lettering/IMG_5959.JPG";
import letter20 from "../../assets/ilustracion/lettering/IMG_6018.jpg";
import letter21 from "../../assets/ilustracion/lettering/IMG_6019.jpg";
import letter22 from "../../assets/ilustracion/lettering/IMG_6020.jpg";
import letter23 from "../../assets/ilustracion/lettering/IMG_6021.jpg";
import letter24 from "../../assets/ilustracion/lettering/IMG_6022.jpg";
import letter25 from "../../assets/ilustracion/lettering/IMG_6023.jpg";
//imagenes guerreras
import warrior from "../../assets/ilustracion/guerreras/warrior.jpg";
import warrior1 from "../../assets/ilustracion/guerreras/warrior1.jpg";
import warrior2 from "../../assets/ilustracion/guerreras/warrior2.jpeg";
import warrior3 from "../../assets/ilustracion/guerreras/warrior3.jpg";
import warrior4 from "../../assets/ilustracion/guerreras/warrior4.jpg";
import warrior5 from "../../assets/ilustracion/guerreras/warrior5.jpg";
//imagenes invitacion
import inv from "../../assets/diseño/invitacion/inv.jpg";
import inv1 from "../../assets/diseño/invitacion/inv1.jpg";
import inv2 from "../../assets/diseño/invitacion/inv2.jpg";
import inv3 from "../../assets/diseño/invitacion/inv3.jpg";
import inv4 from "../../assets/diseño/invitacion/inv4.jpg";
import inv5 from "../../assets/diseño/invitacion/inv5.jpg";
import inv6 from "../../assets/diseño/invitacion/inv6.jpg";
import inv7 from "../../assets/diseño/invitacion/inv7.jpeg";
import inv8 from "../../assets/diseño/invitacion/inv8.jpg";
import inv9 from "../../assets/diseño/invitacion/inv9.jpg";
import inv10 from "../../assets/diseño/invitacion/inv10.jpg";
import inv11 from "../../assets/diseño/invitacion/inv11.jpg";
import inv12 from "../../assets/diseño/invitacion/inv12.jpg";
import inv13 from "../../assets/diseño/invitacion/inv13.jpg";

const getImages = () => {
  const arrayImages = {
    ilustracion: [
      {
        cuento: [
          { img: `${cuento}`, title: "cuento", tag: "ilustracion" },
          { img: `${cuento1}`, title: "cuento1", tag: "ilustracion" },
          { img: `${cuento2}`, title: "cuento2", tag: "ilustracion" },
          { img: `${cuento3}`, title: "cuento3", tag: "ilustracion" },
          { img: `${cuento4}`, title: "cuento4", tag: "ilustracion" },
          { img: `${cuento5}`, title: "cuento5", tag: "ilustracion" },
          { img: `${cuento6}`, title: "cuento6", tag: "ilustracion" },
          { img: `${cuento7}`, title: "cuento7", tag: "ilustracion" },
          { img: `${cuento8}`, title: "cuento8", tag: "ilustracion" },
          { img: `${cuento9}`, title: "cuento9", tag: "ilustracion" },
          { img: `${cuento10}`, title: "cuento10", tag: "ilustracion" },
          { img: `${cuento11}`, title: "cuento11", tag: "ilustracion" },
          { img: `${cuento12}`, title: "cuento12", tag: "ilustracion" },
        ],
        lettering: [
          { img: `${letter}`, title: "lettering", tag: "ilustracion" },
          { img: `${letter1}`, title: "letter1", tag: "ilustracion" },
          { img: `${letter2}`, title: "letter2", tag: "ilustracion" },
          { img: `${letter3}`, title: "letter3", tag: "ilustracion" },
          { img: `${letter4}`, title: "letter4", tag: "ilustracion" },
          { img: `${letter5}`, title: "letter5", tag: "ilustracion" },
          { img: `${letter6}`, title: "letter6", tag: "ilustracion" },
          { img: `${letter7}`, title: "letter7", tag: "ilustracion" },
          { img: `${letter8}`, title: "letter8", tag: "ilustracion" },
          { img: `${letter9}`, title: "letter9", tag: "ilustracion" },
          { img: `${letter10}`, title: "letter10", tag: "ilustracion" },
          { img: `${letter11}`, title: "letter11", tag: "ilustracion" },
          { img: `${letter12}`, title: "letter12", tag: "ilustracion" },
          { img: `${letter13}`, title: "letter13", tag: "ilustracion" },
          { img: `${letter14}`, title: "letter14", tag: "ilustracion" },
          { img: `${letter15}`, title: "letter15", tag: "ilustracion" },
          { img: `${letter16}`, title: "letter16", tag: "ilustracion" },
          { img: `${letter17}`, title: "letter17", tag: "ilustracion" },
          { img: `${letter18}`, title: "letter18", tag: "ilustracion" },
          { img: `${letter19}`, title: "letter19", tag: "ilustracion" },
          { img: `${letter20}`, title: "letter20", tag: "ilustracion" },
          { img: `${letter21}`, title: "letter21", tag: "ilustracion" },
          { img: `${letter22}`, title: "letter22", tag: "ilustracion" },
          { img: `${letter23}`, title: "letter23", tag: "ilustracion" },
          { img: `${letter24}`, title: "letter24", tag: "ilustracion" },
          { img: `${letter25}`, title: "letter25", tag: "ilustracion" },
        ],
        guerreras: [
          { img: `${warrior}`, title: "guerreras", tag: "ilustracion" },
          { img: `${warrior1}`, title: "warrior1", tag: "ilustracion" },
          { img: `${warrior2}`, title: "warrior2", tag: "ilustracion" },
          { img: `${warrior3}`, title: "warrior3", tag: "ilustracion" },
          { img: `${warrior4}`, title: "warrior4", tag: "ilustracion" },
          { img: `${warrior5}`, title: "warrior5", tag: "ilustracion" },
        ],
      },
    ],
    diseño: [
      {
        invitacion: [
          { img: `${inv}`, title: "invitacion", tag: "diseño" },
          { img: `${inv1}`, title: "inv1", tag: "diseño" },
          { img: `${inv2}`, title: "inv2", tag: "diseño" },
          { img: `${inv3}`, title: "inv3", tag: "diseño" },
          { img: `${inv4}`, title: "inv4", tag: "diseño" },
          { img: `${inv5}`, title: "inv5", tag: "diseño" },
          { img: `${inv6}`, title: "inv6", tag: "diseño" },
          { img: `${inv7}`, title: "inv7", tag: "diseño" },
          { img: `${inv8}`, title: "inv8", tag: "diseño" },
          { img: `${inv9}`, title: "inv9", tag: "diseño" },
          { img: `${inv10}`, title: "inv10", tag: "diseño" },
          { img: `${inv11}`, title: "inv11", tag: "diseño" },
          { img: `${inv12}`, title: "inv12", tag: "diseño" },
          { img: `${inv13}`, title: "inv13", tag: "diseño" },
        ],
      },
    ],
  };
  return arrayImages;
};

export default getImages;
