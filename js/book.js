import { get, update, deleteItem } from './models/books.model';
import { createBook } from './service/element.service';
import {plusSlide,showSlides,minusSlide} from './service/slider'


const mainContent = document.querySelector('.content')
document.addEventListener("DOMContentLoaded", ready);
init()





function ready() {

const upgradeBtn = document.querySelector('.upgrade-btn')
const deleteBtn = document.querySelector('.delete-btn')
const prev = document.querySelector('.prev')
const next = document.querySelector('.next')

showSlides()



upgradeBtn.addEventListener('click', upgradeBook)
deleteBtn.addEventListener('click', deleteBook)
prev.addEventListener('click', minusSlide)
next.addEventListener('click',plusSlide)



function deleteBook(event) {
   const el = event.target.closest('.book')
   const books = get('books')
   const upBooks = books.filter(v => v.id != el.id)
   update('books',upBooks)
   deleteItem('infoBook')
   window.location.href = './index.html'
  
}

function upgradeBook(event) {
   const el = event.target.closest('.book')
    const books = get('books')
   const book = books.filter(v => v.id == el.id)
   update('book', book)
  
}


}


 function init() {
    
    const returnBooks = get("infoBook")
      returnBooks.forEach(v => {
          
         mainContent.appendChild(createBook(v))
      })
  
return;
}