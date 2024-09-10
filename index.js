// Guardo los elementos en variables
let input_nombre = document.getElementById("nombre");
let input_edad = document.getElementById("edad");
let input_email = document.getElementById("email");
let boton_agregar = document.getElementById("boton-agregar");
let tabla = document.getElementById("cuerpo-tabla");
let usuarios = [];


// Funcion que se ejecuta cuando hago click en el boton "Agregar"
boton_agregar.addEventListener("click", () => {

    // Agarro los valores de los inputs y los guardo en variables
    let nombre = input_nombre.value;
    let edad = input_edad.value;
    let email = input_email.value;

    if (nombre && edad && email) {
        // Creo un objeto usuario y lo agrego al array
        let usuario = { nombre, edad, email };
        usuarios.push(usuario);

        // Llamo a la función para agregar la fila a la tabla
        agregarFilaATabla(usuario);

        // Limpio los inputs
        input_nombre.value = '';
        input_edad.value = '';
        input_email.value = '';
    } else {
        alert('Por favor, completa todos los campos.');
    }
})

// Funcion para agregar una fila a la tabla
function agregarFilaATabla(usuario) {

    // Creo una nueva fila vacia en la tabla
    let nueva_fila = tabla.insertRow();

    // Inserto las celdas para nombre, edad, email y acción (boton eliminar)
    nueva_fila.insertCell(0).innerText = usuario.nombre;
    nueva_fila.insertCell(1).innerText = usuario.edad;
    nueva_fila.insertCell(2).innerText = usuario.email;


    let borrar_celda = nueva_fila.insertCell(3); // Agrego la celda para el boton eliminar a la fila
    let borrar_boton = document.createElement('button'); // Creo el boton de eliminar
    borrar_boton.innerText = 'Eliminar'; // Le pongo texto al botn eliminar
    borrar_celda.appendChild(borrar_boton); // Agrego el boton eliminar a la ultima celda

    // Agrego Listener al botón eliminar
    borrar_boton.addEventListener('click', function () {
        // Elimino el usuario del array
        let indice_fila = nueva_fila.rowIndex - 1; // Obtengo el indice de la linea donde se hace click en el boton eliminar
        usuarios.splice(indice_fila, 1); // Borro el usuario del array
        // Elimino la fila de la tabla
        tabla.deleteRow(indice_fila);
    });
}