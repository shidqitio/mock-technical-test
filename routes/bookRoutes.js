const express = require('express');
const router = express.Router();

const booksController = require('../controllers/bookController.js');

router.get('/', booksController.getBookAll);
router.get('/:id', booksController.bookById);
router.get('/jenis/:jenis', booksController.booksJenis);
router.put('/:id', booksController.putBook);
router.post('/', booksController.createBook)
router.delete("/:id", booksController.delete)

module.exports = router;