function createBook(data) {
    const images = data.photos.map(imgLoad).join(' ')
    const div = document.createElement('div')
    div.className = 'book'
    div.id = data.id
    div.innerHTML = `<div class="item-block" >
        <div class="item-info">
            <h1>${data.name}</h1>
            <h3>${data.author}</h3>
        </div>
        <div class="img-slider">
        
           ${images}
          
           <a class="prev" id='prev'>&#10094;</a>
           <a class="next" >&#10095;</a>
        </div>
    </div>
    
  <div class="book-info-wrap">
    <h2 class="book-title">Информация</h2>
      <ul class="book-info">
          <li>
                <label>Дата: </label>
                <span>${data.published}</span>
          </li>
          <li>
                <label>Категория: </label>
                <span>${data.category}}</span>
          </li>
          <li>
                <label>Издательство: </label>
                <span>${data.publisher.name}</span>
          </li>
          <li>
              <label>Телефон издательства: </label>
              <span>${data.publisher.phone}</span>
          </li>
          <li>
              <label>Адрес издательства: </label>
              <span>${data.publisher.address}</span>
          </li>
      </ul>
     
  </div>
  <div>
  <a href="./form.html"  class='upgrade-btn btn-style'>Изменить</a>
  <a href='#'  class='btn-style delete-btn'>Удалить</a>
  </div>
  `
    return div
}

function createPreviewBook(data) {
    const div = document.createElement('div')
    div.className = 'book'
    div.id = data.id
    div.innerHTML = `<div class="item-block" >
        <div class="item-info">
            <h1>${data.name}</h1>
            <h3>${data.author}</h3>
        </div>
        <div class="img">
            <img src='${data.photos[0]}'>
        </div>
       
    </div>`
    return div
}

function imgLoad(img) {
    const image = `<div class="item-img"><img src='${img}'></div>`
 return image
      
}

export { createPreviewBook, createBook}