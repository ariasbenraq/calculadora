import React from "react";
import freeCodeCampLogo from '../imagenes/freecodecamp-logo.png';
import '../hojas-de.estilo/Logofreecodecamp.css';

function Logofreecodecamp() {
    return (
        <div>
        <img
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
    );
};

export default Logofreecodecamp;