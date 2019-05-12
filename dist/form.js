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
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/forma.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/forma.js":
/*!*********************!*\
  !*** ./js/forma.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_books_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/books.model */ \"./js/models/books.model.js\");\n\r\n\r\ndocument.addEventListener(\"DOMContentLoaded\", ready);\r\n\r\n\r\n  function ready() {\r\n    const booksForm = document.querySelector('#bookForm')\r\n    const bname = document.querySelector('#bname')\r\n    const idBook = document.querySelector('#id-book')\r\n    const author = document.querySelector('#author')\r\n    const date = document.querySelector('#date')\r\n    const category = document.querySelector('#category')\r\n    const publishingName = document.querySelector('#publishingName')\r\n    const publishingAddress = document.querySelector('#publishingAddress')\r\n    const publishingPhone = document.querySelector('#publishingPhone') \r\n    const img = document.querySelector('#img')\r\n   \r\n    \r\n     booksForm.addEventListener('submit', checkForm)\r\n     main()\r\n\r\n\r\nfunction main() {\r\n   const book =  Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"get\"])('book')\r\n   if(book === null) return\r\n bname.value = book[0].name\r\nidBook.value = book[0].id\r\nauthor.value = book[0].author\r\ndate.value = book[0].published\r\ncategory.value = book[0].category\r\npublishingName.value = book[0].publisher.name\r\npublishingAddress.value = book[0].publisher.address\r\npublishingPhone.value = book[0].publisher.phone\r\n\r\n}\r\n    \r\n    \r\n   async function checkForm(event) {\r\n        event.preventDefault()\r\n        const book = await fillBookObj()\r\n       if(!idBook.value) return addBook(book)\r\n       \r\n        return updateBook(book)\r\n    }\r\n    function updateBook(book) {\r\n        const books = Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"get\"])('books')\r\n        book.id = +idBook.value\r\n        books.forEach((value, index, arr) => {\r\n            if(value.id == idBook.value) arr[index] = book\r\n        })\r\n        Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"update\"])('books',books)\r\n        Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"deleteItem\"])('book')\r\n        clearForm()\r\n        window.location.href = './index.html'\r\n    }\r\n    \r\n    \r\n    function addBook(book) {\r\n        book.id = Date.now()\r\n        let books = Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"get\"])('books')\r\n        if(books === null) books = []\r\n        books.push(book)\r\n        Object(_models_books_model__WEBPACK_IMPORTED_MODULE_0__[\"update\"])('books',books)\r\n        clearForm()\r\n        window.location.href = './index.html'\r\n    }\r\n\r\n\r\n\r\n  function clearForm() {\r\n    bname.value = ''\r\n    idBook.value = ''\r\n    author.value = ''\r\n    date.value = ''\r\n    category.value = ''\r\n    publishingName.value = ''\r\n    publishingAddress.value = ''\r\n    publishingPhone.value = ''\r\n    img.value = ''\r\n  }\r\n      \r\n async function fillBookObj() {\r\n    const images = img.files;\r\n        const imageValue = Object.values(images)\r\n        const photos = []\r\n      for (const item of imageValue) {\r\n       const imageUrl = await readFileAsync(item);\r\n       photos.push(imageUrl)\r\n      }\r\n        const book = {\r\n            name: bname.value,\r\n            author: author.value,\r\n            published: date.value,\r\n            publisher:{\r\n                name: publishingName.value,\r\n                address: publishingAddress.value,\r\n                phone: publishingPhone.value\r\n            },\r\n            category: category.value,\r\n            photos\r\n        }\r\n        return book\r\n  }\r\n       \r\n      \r\n      function readFileAsync(file) {\r\n        return new Promise((resolve, reject) => {\r\n          let reader = new FileReader();\r\n      \r\n          reader.onload = () => {\r\n            resolve(reader.result);\r\n          };\r\n      \r\n          reader.onerror = reject;\r\n      \r\n          reader.readAsDataURL(file);\r\n        })\r\n      }\r\n  }\r\n\r\n    \n\n//# sourceURL=webpack:///./js/forma.js?");

/***/ }),

/***/ "./js/models/books.model.js":
/*!**********************************!*\
  !*** ./js/models/books.model.js ***!
  \**********************************/
/*! exports provided: get, update, deleteItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"get\", function() { return get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"update\", function() { return update; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"deleteItem\", function() { return deleteItem; });\nfunction get(key) {\r\n    return JSON.parse(localStorage.getItem(key))\r\n}\r\n\r\n function update(key, books) {\r\n    var serialObj = JSON.stringify(books);\r\n    localStorage.setItem(key, serialObj);\r\n}\r\nfunction deleteItem(key) {\r\n    localStorage.removeItem(key)\r\n}\r\n\n\n//# sourceURL=webpack:///./js/models/books.model.js?");

/***/ })

/******/ });