const mostrarLibros = document.querySelector('.libros');
const añadirLibros = document.querySelector('.añadirlibro-btn')
const form = document.querySelector('.añadir-libro')

let myLibrary = [];

function Book(titulo, autor, paginas, leido) {
    this.Titulo = titulo
    this.Autor = autor
    this.Paginas = paginas
    this.Leido = leido
}

function addBookToLibrary() {
    prompt
}

añadirLibros.addEventListener('click', () => {
    console.log('hola')
    form.hidden = false;
})

const ElHobbit = new Book('ElHobbit', 'Tolkien', 500, 'si');
const RuedaDelTiempo = new Book('While of Time', 'Brandon Sanderson', 1000, 'no');
myLibrary.push(ElHobbit);
myLibrary.push(RuedaDelTiempo);

//Muestra libros en pantalla.
for (let i = 0; i < myLibrary.length; i++) {
    let div = document.createElement('div');
    mostrarLibros.appendChild(div)

    let valores = Object.values(myLibrary[i]);
    let llaves = Object.keys(myLibrary[i]);
    
    for (let j = 0; j < llaves.length; j++) {
        let p = document.createElement('p');
        div.appendChild(p);
        p.innerHTML = `${llaves[j]}: <br> ${valores[j]}`
    }
}
