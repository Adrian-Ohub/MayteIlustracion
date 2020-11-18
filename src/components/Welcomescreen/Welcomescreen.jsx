import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Birds from "vanta/dist/vanta.birds.min";
import * as THREE from "three";

const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null);

  const [vanta, setVanta] = useState(0);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Birds({
          THREE,
          el: myRefDiv.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0x4db6ac,
          color1: 0x0,
          color2: 0xffd196,
          colorMode: "variance",
        })
      );
      console.log("Establece vanta");
    }
    // Desasociar los recursos al salir de la pagina
    return () => {
      if (vanta) {
        vanta.destroy();
      }
    };
  }, [vanta]);

  return (
    <div className="full" ref={myRefDiv}>
      {children}
    </div>
  );
};

WelcomeScreen.propTypes = {
  children: PropTypes.node,
};

export default WelcomeScreen;
