const express = require('express');
const mongoose = require('mongoose');

const keys = require('./config/keys');
require('./models/mockData');

const app = express();

mongoose.connect(keys.mongoConfig);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

const apiRoutes = require('./api');
app.use('/api', apiRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT ? process.env.PORT : 5000;

app.listen(port, () => {
  console.log('Express Server Listening on Port 5000!');
});