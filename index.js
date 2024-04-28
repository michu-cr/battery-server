const mongoose =require('./db/dbConnection.js')
const  router = require('./routes/index.js');
const cors = require('cors');

const express= require('express');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('uploads'));

app.use(router);

app.get('/*', (req, res) => {
  res.status(404).json({ message: 'No Route Foubd' });
});

app.listen(4896, () => {
  console.log('http://localhost:4896');
});
