import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("Calcular el resultado", () => {
  const { getByText, getByTestId } = render(<App />);

  // Simular entrada en la calculadora
  fireEvent.click(getByText("1"));
  fireEvent.click(getByText("+"));
  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("="));

  // Comprobar el resultado en la pantalla
  const pantalla = getByTestId("pantalla");
  expect(pantalla.textContent).toBe("3");
});
