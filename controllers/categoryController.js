const express = require("express");
const router = express.Router();
const db = require("../models");

require('dotenv').config()

router.post('/api/categories', function(req, res) {
  
})

router.get('/api/categories', function(req, res) {
  db.Category.findAll({
    order: ['name']
  })
    .then(categories => res.json(categories))
    .catch(err => res.status(500).json(err))
})

router.put('/api/categories', function(req, res) {
  
})

router.delete('/api/categories/:id', function(req, res) {
  
})

module.exports = router;