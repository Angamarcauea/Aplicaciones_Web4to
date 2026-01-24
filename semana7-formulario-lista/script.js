let ciudades = [];

const listaCiudades = document.getElementById("lista-ciudades");
const btnGuardarCiudad = document.getElementById("btnGuardarCiudad");
const btnMostrar = document.getElementById("btnMostrar");

const provinciaInput = document.getElementById("provincia");
const habitantesInput = document.getElementById("habitantes");
const fotoInput = document.getElementById("foto");

let posicionEditar = null;

function mostrarCiudades() {
    listaCiudades.innerHTML = "";

    ciudades.forEach((item, i) => {
        const li = document.createElement("li");

        li.innerHTML = `
            <img src="${item.foto || 'https://via.placeholder.com/300'}">
            <p><strong>Provincia:</strong> ${item.provincia}</p>
            <p><strong>Habitantes:</strong> ${item.habitantes}</p>
            <button onclick="editarCiudad(${i})">Editar</button>
            <button onclick="borrarCiudad(${i})">Eliminar</button>
        `;

        listaCiudades.appendChild(li);
    });
}

function editarCiudad(i) {
    const c = ciudades[i];
    provinciaInput.value = c.provincia;
    habitantesInput.value = c.habitantes;
    fotoInput.value = c.foto;
    posicionEditar = i;
}

function borrarCiudad(i) {
    ciudades.splice(i, 1);
    mostrarCiudades();
}

btnGuardarCiudad.addEventListener("click", () => {

    if (provinciaInput.value === "" || habitantesInput.value === "") {
        alert("Complete los campos");
        return;
    }

    const nuevoRegistro = {
        provincia: provinciaInput.value,
        habitantes: habitantesInput.value,
        foto: fotoInput.value
    };

    if (posicionEditar === null) {
        ciudades.push(nuevoRegistro);
    } else {
        ciudades[posicionEditar] = nuevoRegistro;
        posicionEditar = null;
    }

    provinciaInput.value = "";
    habitantesInput.value = "";
    fotoInput.value = "";

    mostrarCiudades();
    listaCiudades.style.display = "grid";
    btnMostrar.textContent = "Ocultar registros";
});

btnMostrar.addEventListener("click", () => {
    if (listaCiudades.style.display === "none") {
        listaCiudades.style.display = "grid";
        btnMostrar.textContent = "Ocultar registros";
    } else {
        listaCiudades.style.display = "none";
        btnMostrar.textContent = "Mostrar registros";
    }
});
