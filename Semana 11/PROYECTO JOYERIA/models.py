import sqlite3

# Clase Producto (POO)
class Joya:
    def __init__(self, id, nombre, material, cantidad, precio):
        self.id = id
        self.nombre = nombre
        self.material = material
        self.cantidad = cantidad
        self.precio = precio

# Clase Inventario para manejar la Base de Datos
class Inventario:
    def __init__(self):
        self.db = "joyeria.db"
        self.conectar_db()

    def conectar_db(self):
        with sqlite3.connect(self.db) as con:
            con.execute("""
                CREATE TABLE IF NOT EXISTS joyas (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    nombre TEXT,
                    material TEXT,
                    cantidad INTEGER,
                    precio REAL
                )
            """)

    def agregar(self, nombre, material, cantidad, precio):
        with sqlite3.connect(self.db) as con:
            con.execute("INSERT INTO joyas (nombre, material, cantidad, precio) VALUES (?, ?, ?, ?)", 
                        (nombre, material, cantidad, precio))

    def obtener_todos(self):
        with sqlite3.connect(self.db) as con:
            con.row_factory = sqlite3.Row
            cursor = con.cursor()
            cursor.execute("SELECT * FROM joyas")
            return [dict(row) for row in cursor.fetchall()]

    def eliminar(self, id):
        with sqlite3.connect(self.db) as con:
            con.execute("DELETE FROM joyas WHERE id = ?", (id,))