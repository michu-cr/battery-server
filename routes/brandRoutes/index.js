const express = require('express');
const  Brand  = require('../../db/models/brandSchema');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const brand = await Brand.find();
    res.status(200).json(brand);
  } catch (e) {
    res.status(401).json(e);
  }
});
router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const brand = await Brand.create(body);
    res.status(200).json(brand);
  } catch (e) {
    res.status(401).json(e);
  }
});
module.exports = router;
