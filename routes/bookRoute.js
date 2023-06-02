const express = require('express');
const routes = express.Router();

const { createBook, findBook, oneBookGet, singleBookUpdate, singleBookDelete} = require('../controllers/bookContro');


routes.post('/books', createBook);
routes.get('/books', findBook);
routes.get('/books/:id', oneBookGet);
routes.put('/books/:id', singleBookUpdate);
routes.delete('/books/:id', singleBookDelete);



module.exports = routes