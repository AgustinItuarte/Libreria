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
const RuedaDelTiempo = new Book('elhobbit', 'tolkien', 500, 'si');
myLibrary.push(ElHobbit);
myLibrary.push(RuedaDelTiempo);

console.log(myLibrary);