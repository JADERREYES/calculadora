import React, { useState } from "react";

function App() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [resultado, setResultado] = useState("");

  // Funciones para las operaciones
  const calcular = (operacion) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResultado("Ingrese números válidos");
      return;
    }

    let res = 0;
    switch (operacion) {
      case "sumar":
        res = n1 + n2;
        break;
      case "restar":
        res = n1 - n2;
        break;
      case "multiplicar":
        res = n1 * n2;
        break;
      case "dividir":
        res = n2 !== 0 ? n1 / n2 : "No se puede dividir por 0";
        break;
      default:
        res = "Operación no válida";
    }
    setResultado(res);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Calculadora</h1>
      <input
        type="number"
        placeholder="Primer número"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <br />
      <input
        type="number"
        placeholder="Segundo número"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <br />
      <button onClick={() => calcular("sumar")}>Sumar</button>
      <button onClick={() => calcular("restar")}>Restar</button>
      <button onClick={() => calcular("multiplicar")}>Multiplicar</button>
      <button onClick={() => calcular("dividir")}>Dividir</button>
      <h2>Resultado: {resultado}</h2>
    </div>
  );
}

export default App;
