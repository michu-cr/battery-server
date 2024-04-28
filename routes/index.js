const  userRoutes = require('./userRoutes/index.js');
const express =require('express')
const bookRoutes =require('../routes/bookRoutes/index.js');
const brandRoutes =require('../routes/brandRoutes/index.js');
const shoproutes =require('../routes/shopRoutes/index.js');
const vehicleRoutes = require('../routes/vehicleRoutes/index.js');
const batteryRoutes = require('../routes/batteryRoutes/index.js');
const imageRoute = require('../routes/imageRoutes/index.js')

const router = express.Router();

router.use('/user', userRoutes);
router.use('/book', bookRoutes);
router.use('/brand', brandRoutes);
router.use('/shop', shoproutes);
router.use('/image',imageRoute)
router.use('/vehicle', vehicleRoutes);
router.use('/battery', batteryRoutes);

module.exports= router;
