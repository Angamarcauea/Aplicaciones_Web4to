// Referencias a los campos
const nombre = document.getElementById("txtNombre");
const email = document.getElementById("txtEmail");
const clave = document.getElementById("txtClave");
const confirmar = document.getElementById("txtConfirmar");
const edad = document.getElementById("txtEdad");
const boton = document.getElementById("btnRegistrar");

// Ojos de contraseña
const eyeClave = document.getElementById("eyeClave");
const eyeConfirmar = document.getElementById("eyeConfirmar");

// Formulario
const registro = document.getElementById("registro");

// Mensajes
const eNombre = document.getElementById("errorNombre");
const eEmail = document.getElementById("errorEmail");
const eClave = document.getElementById("errorClave");
const eConfirmar = document.getElementById("errorConfirmar");
const eEdad = document.getElementById("errorEdad");

// Mostrar u ocultar contraseña
eyeClave.onclick = () => clave.type = clave.type === "password" ? "text" : "password";
eyeConfirmar.onclick = () => confirmar.type = confirmar.type === "password" ? "text" : "password";

// Funciones visuales
function error(input, msg, texto) {
    input.className = "incorrecto";
    msg.className = "error";
    msg.textContent = texto;
}

function correcto(input, msg, texto) {
    input.className = "correcto";
    msg.className = "ok";
    msg.textContent = texto;
}

// Validación nombre
function checkNombre() {
    if (nombre.value.length < 3) {
        error(nombre, eNombre, "El nombre debe tener al menos 3 caracteres");
        return false;
    }
    correcto(nombre, eNombre, "Nombre válido");
    return true;
}

// Validación email
function checkEmail() {
    const regex = /^[^@]+@[^@]+\.[a-z]{2,}$/i;
    if (!regex.test(email.value)) {
        error(email, eEmail, "Formato de correo inválido");
        return false;
    }
    correcto(email, eEmail, "Correo válido");
    return true;
}

// Validación contraseña
function checkClave() {
    const regex = /^(?=.*\d)(?=.*[\W_]).{8,}$/;
    if (!regex.test(clave.value)) {
        error(
            clave,
            eClave,
            "Debe tener mínimo 8 caracteres, un número y un carácter especial"
        );
        return false;
    }
    correcto(clave, eClave, "Contraseña segura");
    return true;
}

// Confirmación contraseña
function checkConfirmar() {
    if (confirmar.value !== clave.value || confirmar.value === "") {
        error(confirmar, eConfirmar, "Las contraseñas no coinciden");
        return false;
    }
    correcto(confirmar, eConfirmar, "Coincide correctamente");
    return true;
}

// Validación edad
function checkEdad() {
    if (edad.value < 18) {
        error(edad, eEdad, "Debe ser mayor o igual a 18 años");
        return false;
    }
    correcto(edad, eEdad, "Edad válida");
    return true;
}

// Validación general
function validarTodo() {
    boton.disabled = !(
        checkNombre() &&
        checkEmail() &&
        checkClave() &&
        checkConfirmar() &&
        checkEdad()
    );
}

// Validaciones en tiempo real
[nombre, email, clave, confirmar, edad].forEach(campo => {
    campo.addEventListener("input", validarTodo);
});

// Envío del formulario
registro.addEventListener("submit", e => {
    e.preventDefault();
    alert("✅ Formulario validado correctamente. Registro exitoso.");
});
