const express = require('express');
const routes = express.Router();

const { createBook, findBook, updateBook} = require('../controllers/bookContro');


routes.post('/books', createBook);
routes.get('/booksOne', findBook);
routes.put('/books/:id', updateBook);


module.exports = routes