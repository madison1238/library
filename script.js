
const library = document.querySelector('#library')
const newDiv = document.createElement('div')


const myLibrary = [];

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}

function addBookToLibrary(title,author,pages,read){
    newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
}

function createCard(book){
    const newDiv = Document.createElement('div')
    newDiv.classList.add('card')
    library.appendChild(newDiv);

}

function displayBooks(library){
    for(let book of library ){
        createCard(book)
    }
}



addBookToLibrary('mad', 'madi', 32, true)

