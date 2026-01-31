// Botón de alerta
const btnAlerta = document.createElement("button");
btnAlerta.textContent = "Ver mensaje";
btnAlerta.className = "btn btn-outline-success mb-3";

document.querySelector("main").prepend(btnAlerta);

btnAlerta.addEventListener("click", () => {
    alert("El deporte mejora la salud física y mental");
});

// Validación del formulario
const form = document.getElementById("formContacto");
const error = document.getElementById("error");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const correo = document.getElementById("correo").value.trim();
    const mensaje = document.getElementById("mensaje").value.trim();

    if (nombre === "" || correo === "" || mensaje === "") {
        error.textContent = "Por favor complete todos los campos";
    } else {
        error.textContent = "";
        alert("Gracias por compartir tu opinión");
        form.reset();
    }
});