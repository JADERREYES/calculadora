const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 5000;

app.use(cors()); // Habilita CORS para evitar bloqueos en el navegador

// Ruta principal para probar si el servidor funciona
app.get("/", (req, res) => {
    res.send("🚀 Servidor funcionando correctamente");
});

// Ruta para operaciones matemáticas
app.get("/:operacion/:num1/:num2", (req, res) => {
    let { operacion, num1, num2 } = req.params;
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
    
    if (isNaN(num1) || isNaN(num2)) {
        return res.json({ error: "Por favor, ingresa números válidos" });
    }

    let resultado;
    switch (operacion) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            if (num2 === 0) {
                return res.json({ error: "No se puede dividir entre 0" });
            }
            resultado = num1 / num2;
            break;
        default:
            return res.json({ error: "Operación no válida" });
    }

    res.json({ resultado });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en el puerto ${PORT}`);
});
