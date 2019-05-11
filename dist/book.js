/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/book.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/book.js":
/*!********************!*\
  !*** ./js/book.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_books_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/books.model */ \"./js/models/books.model.js\");\n/* harmony import */ var _service_element_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/element.service */ \"./js/service/element.service.js\");\n/* harmony import */ var _service_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/slider */ \"./js/service/slider.js\");\n\r\n\r\n\r\nconst mainContent = document.querySelector('.content')\r\n\r\n\r\n init()\r\n Object(_service_slider__WEBPACK_IMPORTED_MODULE_2__[\"showSlides\"])()\r\n\r\nmainContent.addEventListener('click', check)\r\n\r\n\r\n\r\nfunction check (event) {\r\n    const el = event.target\r\n    const parEl = el.closest('.book')\r\n    if(el.className == 'upgrade-btn') return upgradeBook(parEl)\r\n    if(el.className == 'delete-btn') return deleteBook(parEl)\r\n    if(el.className == 'prev') return Object(_service_slider__WEBPACK_IMPORTED_MODULE_2__[\"minusSlide\"])()\r\n    if(el.className == 'next') return Object(_service_slider__WEBPACK_IMPORTED_MODULE_2__[\"plusSlide\"])()\r\n}\r\n\r\nfunction deleteBook(el) {\r\n\r\n   const books = Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"get\"])('books')\r\n    const upBooks = books.filter(v => v.id != el.id)\r\n   Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"update\"])('books',upBooks)\r\n   Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"deleteItem\"])('infoBook')\r\n   window.location.href = './previewBooks.html'\r\n  \r\n}\r\n\r\nfunction upgradeBook(el) {\r\n    const books = Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"get\"])('books')\r\n   const book = books.filter(v => v.id == el.id)\r\n   Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"update\"])('book', book)\r\n  \r\n}\r\n\r\n\r\n\r\n function init() {\r\n    \r\n    const returnBooks = Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"get\"])(\"infoBook\")\r\n      returnBooks.forEach(v => {\r\n          \r\n         mainContent.appendChild(Object(_service_element_service__WEBPACK_IMPORTED_MODULE_1__[\"createBook\"])(v))\r\n      })\r\n  \r\nreturn;\r\n}\n\n//# sourceURL=webpack:///./js/book.js?");

/***/ }),

/***/ "./js/models/books.model.js":
/*!**********************************!*\
  !*** ./js/models/books.model.js ***!
  \**********************************/
/*! exports provided: get, update, deleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteItem\", function() { return deleteItem; });\nfunction get(key) {\r\n    return JSON.parse(localStorage.getItem(key))\r\n}\r\n\r\n function update(key, books) {\r\n    var serialObj = JSON.stringify(books);\r\n    localStorage.setItem(key, serialObj);\r\n}\r\nfunction deleteItem(key) {\r\n    localStorage.removeItem(key)\r\n}\r\n\n\n//# sourceURL=webpack:///./js/models/books.model.js?");

/***/ }),

/***/ "./js/service/element.service.js":
/*!***************************************!*\
  !*** ./js/service/element.service.js ***!
  \***************************************/
/*! exports provided: createPreviewBook, createBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPreviewBook\", function() { return createPreviewBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBook\", function() { return createBook; });\nfunction createBook(data) {\r\n    const images = data.photos.map(imgLoad).join(' ')\r\n    const div = document.createElement('div')\r\n    div.className = 'book'\r\n    div.id = data.id\r\n    div.innerHTML = `<div class=\"item-block\" >\r\n        <div class=\"item-info\">\r\n            <h1>${data.name}</h1>\r\n            <h3>${data.author}</h3>\r\n        </div>\r\n        <div class=\"img-slider\">\r\n        \r\n           ${images}\r\n          \r\n           <a class=\"prev\" id='prev'>&#10094;</a>\r\n           <a class=\"next\" >&#10095;</a>\r\n        </div>\r\n    </div>\r\n    \r\n  <div class=\"book-info-wrap\">\r\n    <h2 class=\"book-title\">Book details</h2>\r\n      <ul class=\"book-info\">\r\n          <li>\r\n                <label>Дата</label>\r\n                <span>${data.published}</span>\r\n          </li>\r\n          <li>\r\n                <label>Категория</label>\r\n                <span>${data.category}}</span>\r\n          </li>\r\n          <li>\r\n                <label>Название издательства</label>\r\n                <span>${data.publisher.name}</span>\r\n          </li>\r\n          <li>\r\n              <label>телефон издательства</label>\r\n              <span>${data.publisher.phone}</span>\r\n          </li>\r\n          <li>\r\n              <label>адрес издательства</label>\r\n              <span>${data.publisher.address}</span>\r\n          </li>\r\n      </ul>\r\n     \r\n  </div>\r\n  <div>\r\n  <a href=\"./form.html\" class='upgrade-btn' >Изменить</a>\r\n  <a href='#' class='delete-btn' >Удалить</a>\r\n  </div>\r\n  `\r\n    return div\r\n}\r\n\r\nfunction createPreviewBook(data) {\r\n    const div = document.createElement('div')\r\n    div.className = 'book'\r\n    div.id = data.id\r\n    div.innerHTML = `<div class=\"item-block\" >\r\n        <div class=\"item-info\">\r\n            <h1>${data.name}</h1>\r\n            <h3>${data.author}</h3>\r\n        </div>\r\n        <div class=\"img\">\r\n            <img src='${data.photos[0]}'>\r\n        </div>\r\n       \r\n    </div>`\r\n    return div\r\n}\r\n\r\nfunction imgLoad(img) {\r\n    const image = `<div class=\"item-img\"><img src='${img}'></div>`\r\n return image\r\n      \r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/service/element.service.js?");

/***/ }),

/***/ "./js/service/slider.js":
/*!******************************!*\
  !*** ./js/service/slider.js ***!
  \******************************/
/*! exports provided: plusSlide, currentSlide, showSlides, minusSlide */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"plusSlide\", function() { return plusSlide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"currentSlide\", function() { return currentSlide; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"showSlides\", function() { return showSlides; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"minusSlide\", function() { return minusSlide; });\n\r\nlet slideIndex = 1;\r\nshowSlides(slideIndex);\r\n\r\n\r\nfunction plusSlide() {\r\n    showSlides(slideIndex += 1);\r\n}\r\n\r\n\r\nfunction minusSlide() {\r\n    console.log('asfaf')\r\n    showSlides(slideIndex -= 1);  \r\n}\r\n\r\n\r\nfunction currentSlide(n) {\r\n    showSlides(slideIndex = n);\r\n}\r\n\r\n\r\nfunction showSlides(n) {\r\n    let i;\r\n    const slides = document.getElementsByClassName(\"item-img\");\r\n  \r\n    if (n > slides.length) {\r\n      slideIndex = 1\r\n    }\r\n    if (n < 1) {\r\n        slideIndex = slides.length\r\n    }\r\n    for (i = 0; i < slides.length; i++) {\r\n        slides[i].style.display = \"none\";\r\n    }\r\n   \r\n  if(slides.length != 0)  slides[slideIndex - 1].style.display = \"block\";\r\n \r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./js/service/slider.js?");

/***/ })

/******/ });