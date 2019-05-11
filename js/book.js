import { get, update, deleteItem } from './models/books.model';
import { createBook } from './service/element.service';
import {plusSlide,showSlides,minusSlide} from './service/slider'
const mainContent = document.querySelector('.content')


 init()
 showSlides()

mainContent.addEventListener('click', check)



function check (event) {
    const el = event.target
    const parEl = el.closest('.book')
    if(el.className == 'upgrade-btn') return upgradeBook(parEl)
    if(el.className == 'delete-btn') return deleteBook(parEl)
    if(el.className == 'prev') return minusSlide()
    if(el.className == 'next') return plusSlide()
}

function deleteBook(el) {

   const books = get('books')
    const upBooks = books.filter(v => v.id != el.id)
   update('books',upBooks)
   deleteItem('infoBook')
   window.location.href = './previewBooks.html'
  
}

function upgradeBook(el) {
    const books = get('books')
   const book = books.filter(v => v.id == el.id)
   update('book', book)
  
}



 function init() {
    
    const returnBooks = get("infoBook")
      returnBooks.forEach(v => {
          
         mainContent.appendChild(createBook(v))
      })
  
return;
}