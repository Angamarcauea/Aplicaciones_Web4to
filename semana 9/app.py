from flask import Flask

app = Flask(__name__)

@app.route("/")
def inicio():
    return "Bienvenido a J&J Joyas - Catálogo Online"

@app.route("/producto/<nombre>")
def producto(nombre):
    return f"Producto: {nombre} - Disponible en nuestra tienda"

if __name__ == "__main__":
    app.run()
