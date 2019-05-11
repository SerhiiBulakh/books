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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/previewBooks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/models/books.model.js":
/*!**********************************!*\
  !*** ./js/models/books.model.js ***!
  \**********************************/
/*! exports provided: get, update, deleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteItem\", function() { return deleteItem; });\nfunction get(key) {\r\n    return JSON.parse(localStorage.getItem(key))\r\n}\r\n\r\n function update(key, books) {\r\n    var serialObj = JSON.stringify(books);\r\n    localStorage.setItem(key, serialObj);\r\n}\r\nfunction deleteItem(key) {\r\n    localStorage.removeItem(key)\r\n}\r\n\n\n//# sourceURL=webpack:///./js/models/books.model.js?");

/***/ }),

/***/ "./js/previewBooks.js":
/*!****************************!*\
  !*** ./js/previewBooks.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_books_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/books.model */ \"./js/models/books.model.js\");\n/* harmony import */ var _service_element_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./service/element.service */ \"./js/service/element.service.js\");\n\r\n\r\n\r\nconst mainContent = document.querySelector('.content')\r\nconst filterBtn = document.querySelector('#filter-btn')\r\nconst booksContent = document.querySelector('.books-content')\r\n\r\ninit()\r\n\r\nmainContent.addEventListener('click', infoBook)\r\nfilterBtn.addEventListener('click', filterBookByName)\r\n\r\n\r\nfunction infoBook (event) {\r\n    const el = event.target\r\n    const parEl = el.closest('.book')\r\n    const books = Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"get\"])('books')\r\n    const book = books.filter(v => v.id == parEl.id)\r\n    \r\n    Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"update\"])('infoBook', book)\r\n    window.location.href = './book.html'\r\n}\r\n\r\nfunction filterBookByName(event) {\r\n    const books = Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"get\"])('books')\r\n    books.sort(function(a, b){\r\n        var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()\r\n        if (nameA < nameB) \r\n          return -1\r\n        if (nameA > nameB)\r\n          return 1\r\n        return 0 \r\n        })\r\n       Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"update\"])('books', books)\r\n       replaceContent(books)\r\n}\r\n\r\n\r\nfunction init() {\r\n    \r\n    const returnBooks = Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"get\"])('books')\r\n      returnBooks.forEach(v => {\r\n          \r\n         booksContent.appendChild(Object(_service_element_service__WEBPACK_IMPORTED_MODULE_1__[\"createPreviewBook\"])(v))\r\n      })\r\n  \r\nreturn;\r\n}\r\n\r\nfunction replaceContent(books) {\r\n    const div = document.createElement('div')\r\n    div.className = 'books-content'\r\n    books.forEach(v => {\r\n          div.appendChild(Object(_service_element_service__WEBPACK_IMPORTED_MODULE_1__[\"createPreviewBook\"])(v))\r\n      \r\n     })\r\n     mainContent.replaceChild(div, booksContent)\r\n}\n\n//# sourceURL=webpack:///./js/previewBooks.js?");

/***/ }),

/***/ "./js/service/element.service.js":
/*!***************************************!*\
  !*** ./js/service/element.service.js ***!
  \***************************************/
/*! exports provided: createPreviewBook, createBook */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createPreviewBook\", function() { return createPreviewBook; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"createBook\", function() { return createBook; });\nfunction createBook(data) {\r\n    const images = data.photos.map(imgLoad).join(' ')\r\n    const div = document.createElement('div')\r\n    div.className = 'book'\r\n    div.id = data.id\r\n    div.innerHTML = `<div class=\"item-block\" >\r\n        <div class=\"item-info\">\r\n            <h1>${data.name}</h1>\r\n            <h3>${data.author}</h3>\r\n        </div>\r\n        <div class=\"img-slider\">\r\n        \r\n           ${images}\r\n          \r\n           <a class=\"prev\" id='prev'>&#10094;</a>\r\n           <a class=\"next\" >&#10095;</a>\r\n        </div>\r\n    </div>\r\n    \r\n  <div class=\"book-info-wrap\">\r\n    <h2 class=\"book-title\">Book details</h2>\r\n      <ul class=\"book-info\">\r\n          <li>\r\n                <label>Дата</label>\r\n                <span>${data.published}</span>\r\n          </li>\r\n          <li>\r\n                <label>Категория</label>\r\n                <span>${data.category}}</span>\r\n          </li>\r\n          <li>\r\n                <label>Название издательства</label>\r\n                <span>${data.publisher.name}</span>\r\n          </li>\r\n          <li>\r\n              <label>телефон издательства</label>\r\n              <span>${data.publisher.phone}</span>\r\n          </li>\r\n          <li>\r\n              <label>адрес издательства</label>\r\n              <span>${data.publisher.address}</span>\r\n          </li>\r\n      </ul>\r\n     \r\n  </div>\r\n  <div>\r\n  <a href=\"./form.html\" class='upgrade-btn' >Изменить</a>\r\n  <a href='#' class='delete-btn' >Удалить</a>\r\n  </div>\r\n  `\r\n    return div\r\n}\r\n\r\nfunction createPreviewBook(data) {\r\n    const div = document.createElement('div')\r\n    div.className = 'book'\r\n    div.id = data.id\r\n    div.innerHTML = `<div class=\"item-block\" >\r\n        <div class=\"item-info\">\r\n            <h1>${data.name}</h1>\r\n            <h3>${data.author}</h3>\r\n        </div>\r\n        <div class=\"img\">\r\n            <img src='${data.photos[0]}'>\r\n        </div>\r\n       \r\n    </div>`\r\n    return div\r\n}\r\n\r\nfunction imgLoad(img) {\r\n    const image = `<div class=\"item-img\"><img src='${img}'></div>`\r\n return image\r\n      \r\n}\r\n\r\n\n\n//# sourceURL=webpack:///./js/service/element.service.js?");

/***/ })

/******/ });