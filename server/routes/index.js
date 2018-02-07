const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const MockEntry = require('../models/MockData');

router.get('/', (req, res, next) => {
  res.send('API Routes');
});

router.get('/mock-data', (req, res, send) => {
  MockEntry.find()
    .then(mongoRes => {
      res.send(mongoRes);
    })
    .catch(err => {
      res.send('Error!', err);
    });
});

module.exports = router;