const Shop = require('../../db/models/shopSchema.js');
const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

router.post('/signup', async (req, res) => {
  try {
    const body = req.body;
    const shop = await Shop.findOne({ email: body.email });
    if (shop) {
      return res
        .status(400)
        .json({ message: 'shop with this email already exist' });
    }
    if (body.password != body.confirmPassword) {
      return res.status(400).json({ message: 'Password doesnot match' });
    }
    const hashedPassword = await bcrypt.hash(body.password, 2);
    body.password = hashedPassword;
    const addShop = await Shop.create(body);
    return res.status(200).json(addShop);
  } catch (e) {
    return res.status(500).json(e);
  }
});

router.post('/login', async (req, res) => {
  try {
    const body = req.body;
    const shop = await Shop.findOne({ email: body.email });
    if (!shop) {
      return res.status(403).json({ message: 'email or password missmatch' });
    }
    const isMatching = await bcrypt.compare(body.password, shop.password);
    if (!isMatching) {
      return res.status(403).json({ message: 'email or password missmatch' });
    }
    return res.status(200).json({ message: 'logged in' });
  } catch (e) {
    return res.status(500).json({ error: e.message });
  }
});
router.get('/', async (req, res) => {
  try {
    const shop = await Shop.find();
    res.status(200).json(shop);
  } catch (e) {
    res.status(401).json(e);
  }
});

module.exports = router;
