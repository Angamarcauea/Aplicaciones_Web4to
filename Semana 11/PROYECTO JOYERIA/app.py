from flask import Flask, render_template, request, redirect
from models import Inventario

app = Flask(__name__)
inv = Inventario()

@app.route('/')
def inicio():
    # Obtenemos los productos de la base de datos
    productos = inv.obtener_todos()
    return render_template('index.html', lista=productos)

@app.route('/agregar', methods=['POST'])
def agregar():
    nombre = request.form['nombre']
    material = request.form['material']
    cantidad = request.form['cantidad']
    precio = request.form['precio']
    inv.agregar(nombre, material, cantidad, precio)
    return redirect('/')

@app.route('/eliminar/<int:id>')
def eliminar(id):
    inv.eliminar(id)
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)