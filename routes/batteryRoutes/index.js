const express = require('express');
const Battery = require('../../db/models/batterySchema.js');
const Vehicle = require('../../db/models/vehicleSchema.js');

const router = express.Router();

router.get('/:id', async (req, res) => {
  try {
    console.log('hellooo');
    const { id } = req.params;
    const batteryData = await Battery.find({ vehicle: { $in: id } });
    console.log(batteryData, 'this is battery data ');

    res.status(200).json(batteryData);
  } catch (e) {
    res.status(401).json(e);
  }
});
router.get('/', async (req, res) => {
  try {
    const battery = await Battery.find();
    res.status(200).json(battery);
  } catch (e) {
    res.status(401).json(e);
  }
});
router.get('/bat/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const battery = await Battery.findById(id);
    res.status(200).json(battery);
  } catch (e) {
    res.status(401).json(e);
  }
});
router.post('/', async (req, res) => {
  try {
    const body = req.body;
    const battery = await Battery.create(body);
    res.status(200).json(battery);
  } catch (e) {
    res.status(401).json(e);
  }
});
router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const battery = await Battery.findByIdAndDelete(id);
    res.status(200).json(battery);
  } catch (e) {
    res.status(401).json(e);
  }
});
router.patch('/:id', async (req, res) => {
  try {
    const body = req.body;
    const { id } = req.params;
    const battery = await Battery.findByIdAndUpdate(...body, id);
    res.status(200).json(battery);
  } catch (e) {
    res.status(401).json(e);
  }
});
module.exports = router;
