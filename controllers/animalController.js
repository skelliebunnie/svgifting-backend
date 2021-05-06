const express = require("express");
const router = express.Router();
const db = require("../models");

require('dotenv').config()

router.post('/api/create', function(req, res) {
  
})

router.get('/api/animals', function(req, res) {
  db.Animal.findAll({
    order: ['name']
  })
    .then(animals => res.json(animals))
    .catch(err => res.status(500).json(err))
})

router.put('/api/write', function(req, res) {
  
})

router.delete('/api/delete', function(req, res) {
  
})

module.exports = router;