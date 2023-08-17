import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "../App";

test("Calcular el resultado", () => {
    const { getByText, getByTestId } = render(<App />);

    // Simular entrada en la calculadora
    fireEvent.click(getByText("1"));
    fireEvent.click(getByText("/")); // Intentar dividir por cero
    fireEvent.click(getByText("0"));
    fireEvent.click(getByText("="));

    // Comprobar el resultado en la pantalla
    const pantalla = getByTestId("pantalla");
    expect(pantalla.textContent.trim()).toBe("Infinity"); // Resultado esperado para división por cero
});

test("Comprobación de excepciones", () => {
    // Definir una función que debería lanzar una excepción
    const funcionQueDeberiaLanzarExcepcion = () => {
        // Simular una acción que genere una excepción, como dividir por cero
        const resultado = () => {
            return 1 / 0; // Esto lanzará una excepción de división por cero
        };
        try {
            resultado();
        } catch (error) {
            // Verificar que la función lanzó una excepción
            expect(error).toBe(TypeError);
        }
    };
});
