const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    book: './js/book.js',
    form: './js/forma.js',
    previewBook: './js/previewBooks.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
    
  }
};