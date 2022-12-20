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

function addBookToLibrary() {
    let ultimoElem2 = myLibrary.length - 1
    let titulo = form.elements[0].value;
    let autor = form.elements[1].value;
    let cantPag = form.elements[2].value;
    let leido = form.elements[3].value;
    
    libro = new Book(titulo, autor, cantPag, leido, ultimoElem2 + 1)
    myLibrary.push(libro);

    //Muestra libros en pantalla.
    
    let ultimoElem = myLibrary.length - 1
    let btnEliminar = document.createElement('button');
    btnEliminar.className = 'btn-eliminar'
    btnEliminar.dataset.id = `${ultimoElem}`;
    let div = document.createElement('div');
    div.dataset.id = `${ultimoElem}`;
    mostrarLibros.appendChild(div);
    div.appendChild(btnEliminar);
    btnEliminar.innerHTML = 'ELIMINAR'

    let valores = Object.values(myLibrary[ultimoElem]);
    let llaves = Object.keys(myLibrary[ultimoElem]);
    
    for (let j = 0; j < llaves.length; j++) {
        let p = document.createElement('p');
        div.appendChild(p);
        p.innerHTML = `${llaves[j]}: <br> ${valores[j]}`
    }
}

function eliminarLibro(libro) {
    const btn = document.querySelector('.btn-eliminar');
    libro.id
}

if (btnEliminar) {
    btnEliminar.addEventListener('click', () => {
        console.log('hola')
    })
}
    
//Muestra form para añadir libros.
añadirLibros.addEventListener('click', () => {
    form.hidden = false;
})


//Boton para añadir libros a la coleccion
enviarForm.addEventListener('click', function(e) {
    e.preventDefault();
    addBookToLibrary();
})
