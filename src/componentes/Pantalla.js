import React from "react";
import '../hojas-de.estilo/Pantalla.css';

const Pantalla = ({ input }) => (
  <div className="input" data-testid="pantalla"> {/* Agrega el atributo data-testid aquí */}
    {input}
  </div>
);

export default Pantalla;
