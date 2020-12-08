import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import Waves from "vanta/dist/vanta.waves.min";
import * as THREE from "three";

const WelcomeScreen = ({ children }) => {
  const myRefDiv = useRef(null);

  const [vanta, setVanta] = useState(0);

  useEffect(() => {
    if (!vanta) {
      setVanta(
        Waves({
          THREE,
          el: myRefDiv.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          color: "#4f5b62",
          shininess: 10.0,
          waveHeight: 3.5,
          waveSpeed: 0.5,
          zoom: 0.8,
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
