// REST API ROUTES

const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const PostEntry = require('../models/MockData');

router.get('/', (req, res, next) => {
  res.send('API Routes');
});

router.get('/posts/:id', (req, res, send) => {
  PostEntry.findOne({ 'id': req.params.id })
    .then(mongoRes => {
      res.send(mongoRes);
    })
    .catch(err => {
      res.send('Error!', err);
    });
});

module.exports = router;