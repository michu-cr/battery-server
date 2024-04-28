const express = require('express');
const Vehicle = require('../../db/models/vehicleSchema.js');

const router = express.Router();

router.get('/list/:id', async (req, res) => {
  try {
    const brand = await Vehicle.find({ brand: req.params.id });
    res.status(200).json(brand);
  } catch (e) {
    res.status(401).json(e);
  }
});
router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const vehicle = await Vehicle.create(body);
    res.status(200).json(vehicle);
  } catch (e) {
    res.status(401).json(e);
  }
});
router.get('/', async (req, res) => {
  try {
    const vehicle = await Vehicle.find();
    res.status(200).json(vehicle);
  } catch (e) {
    res.status(401).json(e);
  }
});
module.exports = router;
