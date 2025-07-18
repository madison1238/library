
const libraryCont = document.querySelector('#library')
const addBookBtn = document.querySelector('#add-book button')
const formContainer = document.querySelector('#add-form')
const form = document.querySelector('form')
const readBtn = document.querySelectorAll('#read')


const myLibrary = [];


class Book {
    constructor(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
    }
}


function addBookToLibrary(title,author,pages,read){
    newBook = new Book(title,author,pages,read);
    myLibrary.push(newBook);
    displayBooks()
}

function createCard(book){
    const newCard = document.createElement('div');
    newCard.classList.add('card');
    newCard.setAttribute('data-id', book.id)

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
        read.style.backgroundColor = 'var(--green)'
    }
    else{
        read.textContent = 'not read';
        read.style.backgroundColor = 'var(--red)'
    }
    addReadListener(read)

    const remove = document.createElement('button');
    remove.id = 'remove';
    remove.textContent = 'remove'
    addRemoveListener(remove)
    
    libraryCont.appendChild(newCard);
    newCard.appendChild(title);
    newCard.appendChild(author);
    newCard.appendChild(pages);
    newCard.appendChild(read)
    newCard.appendChild(remove);
}

function displayBooks(){
    libraryCont.innerHTML = '';
    for(let book of myLibrary){
        createCard(book);
    }
}

function read(word){
    if (word == 'on') return true
    return false
}

function addRemoveListener(btn){
btn.addEventListener('click', () => {
        const removeCardID = btn.parentElement.getAttribute('data-id')
        for ( let i = 0 ; i < myLibrary.length; i++){
            let book = myLibrary.at(i)
            if (book.id === removeCardID){
                myLibrary.splice(i,1);
            }
        }
        displayBooks();
    })

}

function addReadListener(btn){
    btn.addEventListener('click', () => {
        const bookId = btn.parentElement.getAttribute('data-id')
        for(let book of myLibrary){
            if(book.id === bookId){
                if(book.read == true){
                    book.read = false;
                    btn.style.backgroundColor = 'var(--red)'
                    btn.textContent = 'not read'
                }
                else{
                    book.read = true
                    btn.style.backgroundColor = 'var(--green)'
                    btn.textContent = 'read'
                }
            }
        }
    })
}


addBookBtn.addEventListener('click', () => {
    formContainer.style.display = 'flex'
})

formContainer.addEventListener('click', (e) => {
    if (e.target === formContainer){
        formContainer.style.display = 'none';
    }
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const fd = new FormData(form)
    const obj = Object.fromEntries(fd);
    addBookToLibrary(obj.title, obj.author, obj.pages, read(obj.read))
    formContainer.style.display = 'none';
    form.reset();
})


