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
  expect(pantalla.textContent.trim()).toBe("3"); // Usa trim() para eliminar espacios en blanco

  // Verificar que el resultado sea mayor que 2
  const resultadoNumerico = parseFloat(pantalla.textContent.trim()); // Convertir a número
  expect(resultadoNumerico).toBeGreaterThan(2);

  // Verificar que el resultado coincida con el patrón "3"
  expect(pantalla.textContent.trim()).toMatch(/^3$/);
  
});