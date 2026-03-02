# 💎 Sistema de Gestión de Inventario - Joyería Luxury

Este proyecto es una aplicación web desarrollada con **Flask** para la gestión de inventarios de una joyería, aplicando conceptos avanzados de programación.

## 🚀 Tecnologías Utilizadas
* **Python / Flask**: Servidor web y lógica de rutas.
* **SQLite**: Base de datos relacional para persistencia de datos.
* **Jinja2**: Motor de plantillas para la interfaz de usuario.
* **HTML/CSS**: Diseño de la interfaz.

## 🛠️ Conceptos Aplicados (Requisitos de la Tarea)

### 1. Programación Orientada a Objetos (POO)
Se utilizaron clases para estructurar el programa:
* **Clase `Joya`**: Representa la entidad del producto con atributos como ID, nombre, material, cantidad y precio.
* **Clase `Inventario`**: Encapsula la lógica de negocio y las operaciones de la base de datos.

### 2. Uso de Colecciones
Para el manejo eficiente de los datos, se implementaron:
* **Listas y Diccionarios**: El sistema recupera los datos de SQLite y los organiza en una **lista de diccionarios** para que Flask pueda renderizarlos dinámicamente en la tabla de la interfaz.

### 3. Base de Datos SQLite y CRUD
Se integró una base de datos `joyeria.db` para realizar operaciones reales:
* **Create (Añadir)**: Registro de nuevas piezas de joyería.
* **Read (Mostrar)**: Visualización completa del inventario en tiempo real.
* **Delete (Eliminar)**: Eliminación de registros mediante el ID único.

## 📦 Instalación y Uso
1. Instalar dependencias: `pip install -r requirements.txt`
2. Ejecutar la aplicación: `python app.py`
3. Acceder en el navegador a: `http://127.0.0.1:5000`