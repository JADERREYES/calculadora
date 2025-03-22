def restar(a, b):
    c = 0
    if a > b:
        while a > b:
            a -= 1
            c += 1
    elif a < b:
        while a < b:
            a += 1
            c -= 1
    return c
