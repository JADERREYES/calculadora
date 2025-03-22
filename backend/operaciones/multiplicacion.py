from operaciones.suma import sumar

def multiplicar(a, b):
    c = 0
    for _ in range(b):
        c = sumar(c, a)  # Usa la suma para multiplicar
    return c
