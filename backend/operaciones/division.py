from operaciones.resta import restar
from operaciones.suma import sumar

def dividir(a, b):
    c = 0
    while a >= b:
        a = restar(a, b)  # Usa la resta para dividir
        c = sumar(c, 1)
    return c
