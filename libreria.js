const mostrarLibros = document.querySelector('.libros');
const añadirLibros = document.querySelector('.añadirlibro-btn');
const form = document.querySelector('.añadir-libro');
const form_nombre = document.querySelector('#nombre');
const form_autor = document.querySelector('#autor');
const form_paginas = document.querySelector('#paginas');
const enviarForm = document.querySelector('.enviar-form');
const check = document.querySelector('.check');

let myLibrary = [];

class Book {
    constructor(titulo, autor, paginas, leido, nº) {
        this.Titulo = titulo;
        this.Autor = autor;
        this.Paginas = paginas;
        this.Leido = leido;
        this.LibroNº = nº;
    }
    
    estado() {

        if (this.Leido === 'No') {
            return this.Leido = 'Si';
        } else if (this.Leido === 'Si'){
            return this.Leido = 'No';
        }

    }

}

//Añade los libros al array myLibrary y los muestra en pantalla
function añadiraLibreria() {
    let check = document.querySelector('.check')
    let ultimoElem2 = myLibrary.length - 1
    let titulo = form.elements[0].value;
    let autor = form.elements[1].value;
    let cantPag = form.elements[2].value;
    let leido = form.elements[3].value;
    leido = ''

     form.elements[0].value = '';
     form.elements[1].value = '';
     form.elements[2].value = '';
     form.elements[3].value = '';

    if (check.checked === true) {
        leido = 'Si';
    } else {
        leido = 'No';
    }

    libro = new Book(titulo, autor, cantPag, leido, ultimoElem2 + 1);
    myLibrary.push(libro);
    crearLibros();
}

//Crea los libros en el DOM
function crearLibros() {
    let ultimoElem = myLibrary.length - 1
    let btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn-eliminar'
    btnEliminar.dataset.id = `${ultimoElem}`;
    let btnCheck = document.createElement('button');
    btnCheck.className = 'btn-check';
    btnCheck.dataset.id = `${ultimoElem}`;
    let div = document.createElement('div');
    let divbtn = document.createElement('div');
    divbtn.className = 'div-botones'
    div.dataset.id = `${ultimoElem}`;
    mostrarLibros.appendChild(div);
    div.appendChild(divbtn)
    divbtn.appendChild(btnEliminar);
    divbtn.appendChild(btnCheck);
    btnEliminar.innerHTML = 'ELIMINAR'
    btnCheck.innerHTML = 'LEIDO'

    let valores = Object.values(myLibrary[ultimoElem]);
    let llaves = Object.keys(myLibrary[ultimoElem]);
    // If valores es igual a tal atributo no crea el libro el valor se asigna en el set
    for (let j = 0; j < llaves.length; j++) {
        let p = document.createElement('p');
        p.className = `p${ultimoElem}`;
        div.appendChild(p);
        p.innerHTML = `<strong>${llaves[j]}:</strong> <br> ${valores[j]}`
    }

    const ultimoP = div.lastElementChild;
    ultimoP.remove();
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


//Cambia el estado de los libros de leido a no leido.
function cambiarEstado(evento1) {
    const elemento = evento1.target;

    if (elemento.classList.contains('btn-check')) {
        let id = elemento.dataset.id
        let libro = myLibrary[id];
        libro.estado();
        
        const div = document.querySelector(`div[data-id='${id}']`);
        const p = document.querySelectorAll(`.p${id}`);

        for (let i = 0; i < p.length; i++) {
            p[i].remove();
        }

        let valores = Object.values(myLibrary[id]);
        let llaves = Object.keys(myLibrary[id]);
        
        for (let j = 0; j < llaves.length; j++) {
            let p = document.createElement('p');
            p.className = `p${id}`;
            div.appendChild(p);
            p.innerHTML = `<strong>${llaves[j]}:</strong> <br> ${valores[j]}`
        }

        const ultimoP = div.lastElementChild;
        ultimoP.remove();
    }
}

//Evento que llama a funcion para cambiar estado de libros.
document.addEventListener('click', cambiarEstado );

//Evento que llama a funcion para eliminar libros.
document.addEventListener('click', eliminarLibro );
    
//Muestra form para añadir libros.
añadirLibros.addEventListener('click', () => {
    form.hidden = false;
})

// Funcion para chequear si un campo es valido

function checkValue() {

    let error_titulo = document.querySelector('.error-nombre')
    let error_autor = document.querySelector('.error-autor')
    let error_paginas = document.querySelector('.error-paginas')

    if (form_nombre.validity.valueMissing) {
        error_titulo.textContent = 'El campo esta vacio!'
    } else {
        error_titulo.textContent = ''
    }
    
    if (form_autor.validity.valueMissing) {
        error_autor.textContent = 'El campo esta vacio!'
    } else {
        error_autor.textContent = ''
    }
    
    if (form_paginas.validity.valueMissing) {
        error_paginas.textContent = 'El campo esta vacio!'
    } else {
        error_paginas.textContent = ''
    }
    
}

// Funcion para enviar el form en caso de ser validos los campos.

form.addEventListener('submit', (event) => {
    
    if (!form_nombre.validity.valid || !form_autor.validity.valid || !form_paginas.validity.valid) {

        checkValue();

        event.preventDefault();

    } else {
        
        checkValue();
        añadiraLibreria();
        event.preventDefault();

    }

})