const mostrarLibros = document.querySelector('.libros');
const añadirLibros = document.querySelector('.añadirlibro-btn');
const form = document.querySelector('.añadir-libro');
const enviarForm = document.querySelector('.enviar-form');

let myLibrary = [];

function Book(titulo, autor, paginas, leido, nº) {
    this.Titulo = titulo
    this.Autor = autor
    this.Paginas = paginas
    this.Leido = leido
    this.LibroNº = nº;
}

//Añade los libros al array myLibrary y los muesta en pantalla
function añadiraLibreria() {
    let check = document.querySelector('.check')
    let ultimoElem2 = myLibrary.length - 1
    let titulo = form.elements[0].value;
    let autor = form.elements[1].value;
    let cantPag = form.elements[2].value;
    let leido = ''

    if (check.checked === true) {
        leido = 'Si';
    } else {
        leido = 'No';
    }

    libro = new Book(titulo, autor, cantPag, leido, ultimoElem2 + 1)
    myLibrary.push(libro);
    crearLibros()
}

//Crea los libros en el DOM
function crearLibros() {
    let ultimoElem = myLibrary.length - 1
    let btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn-eliminar'
    btnEliminar.dataset.id = `${ultimoElem}`;
    let btnCheck = document.createElement('button');
    btnCheck.className = 'btn-check';
    let div = document.createElement('div');
    div.dataset.id = `${ultimoElem}`;
    mostrarLibros.appendChild(div);
    div.appendChild(btnEliminar);
    div.appendChild(btnCheck);
    btnEliminar.innerHTML = 'ELIMINAR'
    btnCheck.innerHTML = 'LEIDO'

    let valores = Object.values(myLibrary[ultimoElem]);
    let llaves = Object.keys(myLibrary[ultimoElem]);
    
    for (let j = 0; j < llaves.length; j++) {
        let p = document.createElement('p');
        div.appendChild(p);
        p.innerHTML = `${llaves[j]}: <br> ${valores[j]}`
    }
}

//Funcion que elimina libros
function eliminarLibro(evento) {
    const elemento = evento.target;
    if (elemento.classList.contains('btn-eliminar')) {
        let id = elemento.dataset.id;
        const div = document.querySelector(`div[data-id='${id}']`);
        div.remove();
    }
}

//Evento que llama a funcion para eliminar libros
document.addEventListener('click', eliminarLibro );
    
//Muestra form para añadir libros.
añadirLibros.addEventListener('click', () => {
    form.hidden = false;
})


//Boton para añadir libros a la coleccion
enviarForm.addEventListener('click', function(e) {
    e.preventDefault();
    añadiraLibreria();
})