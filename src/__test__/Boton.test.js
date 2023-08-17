import React from "react";
import { render } from "@testing-library/react";
import Boton from "../componentes/Boton";
import '@testing-library/jest-dom/extend-expect';



test("Comprobar si el botón es un operador", () => {
  const { getByText } = render(<Boton>+</Boton>);
  expect(getByText("+")).toHaveClass("operador");
});

test("Comprobar si el botón no es un operador", () => {
  const { getByText } = render(<Boton>1</Boton>);
  expect(getByText("1")).not.toHaveClass("operador");
});
