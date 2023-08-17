import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

test("Calcular el resultado de manera asíncrona", async () => {
  const { getByText, getByTestId } = render(<App />);

  // Simular entrada en la calculadora
  fireEvent.click(getByText("1"));
  fireEvent.click(getByText("+"));
  fireEvent.click(getByText("2"));
  fireEvent.click(getByText("="));

  // Esperar a que la pantalla muestre el resultado (maneja el código asíncrono)
  await waitFor(() => {
    const pantalla = getByTestId("pantalla");
    expect(pantalla.textContent.trim()).toBe("3");
  });
});
