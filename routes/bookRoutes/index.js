const express = require('express');
const Book = require('../../db/models/bookSchema');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const book = await Book.find().populate(['user', 'battery']);
    res.status(200).json(book);
  } catch (e) {
    res.status(500).json({ message: 'Error' });
  }
});
router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const book = await Book.create(body);
    res.status(200).json(book);
  } catch (e) {
    res.status(401).json(e);
  }
});

module.exports = router;
