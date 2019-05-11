import { get, update } from './models/books.model';
import { createPreviewBook } from './service/element.service';

const mainContent = document.querySelector('.content')
const filterBtn = document.querySelector('#filter-btn')
const booksContent = document.querySelector('.books-content')

init()

mainContent.addEventListener('click', infoBook)
filterBtn.addEventListener('click', filterBookByName)


function infoBook (event) {
    const el = event.target
    const parEl = el.closest('.book')
    const books = get('books')
    const book = books.filter(v => v.id == parEl.id)
    
    update('infoBook', book)
    window.location.href = './book.html'
}

function filterBookByName(event) {
    const books = get('books')
    books.sort(function(a, b){
        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
        if (nameA < nameB) 
          return -1
        if (nameA > nameB)
          return 1
        return 0 
        })
       update('books', books)
       replaceContent(books)
}


function init() {
    
    const returnBooks = get('books')
      returnBooks.forEach(v => {
          
         booksContent.appendChild(createPreviewBook(v))
      })
  
return;
}

function replaceContent(books) {
    const div = document.createElement('div')
    div.className = 'books-content'
    books.forEach(v => {
          div.appendChild(createPreviewBook(v))
      
     })
     mainContent.replaceChild(div, booksContent)
}