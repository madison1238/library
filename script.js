
const libraryCont = document.querySelector('#library')
const addBookBtn = document.querySelector('#add-book button')
const formContainer = document.querySelector('#add-form')
const form = document.querySelector('form')


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
    const newCard = document.createElement('div');
    newCard.classList.add('card');

    const title = document.createElement('p');
    title.id = 'title';
    title.textContent = `${book.title}`;

    const author = document.createElement('p');
    author.id = 'author';
    author.textContent = `${book.author}`;

    const pages = document.createElement('p');
    pages.id = 'pages';
    pages.textContent = `${book.pages} pages`;

    const read = document.createElement('button');
    read.id = 'read'
    if(book.read === true){
        read.textContent = 'read';
        read.classList.add('yread');
    }
    else{
        read.textContent = 'not read';
        read.classList.add('nread');
    }

    const remove = document.createElement('button');
    remove.id = 'remove';
    remove.textContent = 'remove'
    
    libraryCont.appendChild(newCard);
    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(read)
    newCard.appendChild(remove);
}

function displayBooks(library){
    libraryCont.innerHTML = '';
    for(let book of library ){
        createCard(book);
    }
}

addBookBtn.addEventListener('click', () => {
    formContainer.style.display = 'flex'
})

formContainer.addEventListener('click', (e) => {
    if (e.target === formContainer){
        formContainer.style.display = 'none';
    }
})




addBookToLibrary('mad', 'madi', 32, true)
displayBooks(myLibrary)
addBookToLibrary('korn', 'fred', 543, false)
displayBooks(myLibrary)

