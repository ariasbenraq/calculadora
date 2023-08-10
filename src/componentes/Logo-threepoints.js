import React from "react";
import threePointsLogo from '../imagenes/threepoints-logo.webp';
import '../hojas-de.estilo/Logothreepoints.css';

function Logothreepoints() {
    return (
        <div>
        <img
          src={threePointsLogo}
          className='threepoints-logo'
          alt='Logo de threePoints' />
      </div>
    );
};

export default Logothreepoints;