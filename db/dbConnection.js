const  mongoose = require('mongoose');

mongoose
  .connect('mongodb://localhost:27017/calicutBattery')
  .then(() => {
    console.log('Db connected');
  })
  .catch(e => {
    console.log(e);
  });

module.exports = mongoose;
