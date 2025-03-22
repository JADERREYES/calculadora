from flask import Flask, request, jsonify, render_template
from flask_cors import CORS
from operaciones.suma import sumar
from operaciones.resta import restar
from operaciones.multiplicacion import multiplicar
from operaciones.division import dividir

app = Flask(__name__, template_folder="frontend")  # Asegúrate de que el template_folder apunta donde está index.html
CORS(app)

# Ruta para servir el archivo HTML en el navegador
@app.route('/')
def home():
    return render_template('index.html')

@app.route('/sumar/<int:a>/<int:b>', methods=['GET'])
def route_sumar(a, b):
    resultado = sumar(a, b)
    return jsonify({"resultado": resultado})

@app.route('/restar/<int:a>/<int:b>', methods=['GET'])
def route_restar(a, b):
    resultado = restar(a, b)
    return jsonify({"resultado": resultado})

@app.route('/multiplicar/<int:a>/<int:b>', methods=['GET'])
def route_multiplicar(a, b):
    resultado = multiplicar(a, b)
    return jsonify({"resultado": resultado})

@app.route('/dividir/<int:a>/<int:b>', methods=['GET'])
def route_dividir(a, b):
    if b == 0:
        return jsonify({"error": "No se puede dividir por 0"}), 400
    resultado = dividir(a, b)
    return jsonify({"resultado": resultado})

if __name__ == '__main__':
    app.run(debug=True)
