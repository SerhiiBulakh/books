import { get, update, deleteItem } from './models/books.model';


    const booksForm = document.querySelector('#bookForm')
    const bname = document.querySelector('#bname')
    const idBook = document.querySelector('#id-book')
    const author = document.querySelector('#author')
    const date = document.querySelector('#date')
    const category = document.querySelector('#category')
    const publishingName = document.querySelector('#publishingName')
    const publishingAddress = document.querySelector('#publishingAddress')
    const publishingPhone = document.querySelector('#publishingPhone') 
    const img = document.querySelector('#img')
   
    
    if(booksForm) booksForm.addEventListener('submit', checkForm)

    

   if(booksForm) main()


function main() {
   const book =  get('book')
   if(book === null) return
 bname.value = book[0].name
idBook.value = book[0].id
author.value = book[0].author
date.value = book[0].published
category.value = book[0].category
publishingName.value = book[0].publisher.name
publishingAddress.value = book[0].publisher.address
publishingPhone.value = book[0].publisher.phone

}
    
    
   async function checkForm(event) {
        event.preventDefault()
        const book = await fillBookObj()
       if(!idBook.value) return addBook(book)
       
        return updateBook(book)
    }
    function updateBook(book) {
        const books = get('books')
        book.id = +idBook.value
        books.forEach((value, index, arr) => {
            if(value.id == idBook.value) arr[index] = book
        })
        update('books',books)
        deleteItem('book')
        clearForm()
    }
    
    
    function addBook(book) {
        book.id = Date.now()
        let books = get('books')
        if(books === null) books = []
        books.push(book)
        update('books',books)
        clearForm()
    }



  function clearForm() {
    bname.value = ''
    idBook.value = ''
    author.value = ''
    date.value = ''
    category.value = ''
    publishingName.value = ''
    publishingAddress.value = ''
    publishingPhone.value = ''
    img.value = ''
  }
      
 async function fillBookObj() {
    const images = img.files;
        const imageValue = Object.values(images)
        const photos = []
      for (const item of imageValue) {
       const imageUrl = await readFileAsync(item);
       photos.push(imageUrl)
      }
        const book = {
            name: bname.value,
            author: author.value,
            published: date.value,
            publisher:{
                name: publishingName.value,
                address: publishingAddress.value,
                phone: publishingPhone.value
            },
            category: category.value,
            photos
        }
        return book
  }
       
      
      function readFileAsync(file) {
        return new Promise((resolve, reject) => {
          let reader = new FileReader();
      
          reader.onload = () => {
            resolve(reader.result);
          };
      
          reader.onerror = reject;
      
          reader.readAsDataURL(file);
        })
      }