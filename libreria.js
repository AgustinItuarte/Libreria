const mostrarLibros = document.querySelector('.libros');

let myLibrary = [];

function Book(titulo, autor, paginas, leido) {
    this.titulo = titulo
    this.autor = autor
    this.paginas = paginas
    this.leido = leido
}

function addBookToLibrary() {
    prompt
}

const ElHobbit = new Book('elhobbit', 'tolkien', 500, 'si');
const RuedaDelTiempo = new Book('While of Time', 'Brandon Sanderson', 10000, 'no');
myLibrary.push(ElHobbit);
myLibrary.push(RuedaDelTiempo);

console.log(myLibrary);


for (let i = 0; i < myLibrary.length; i++) {
    let div = document.createElement('div');
    mostrarLibros.appendChild(div)
}