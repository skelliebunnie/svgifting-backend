const express = require("express");
const router = express.Router();
const db = require("../models");

require('dotenv').config()

router.post('/api/create', function(req, res) {
  
})

router.get('/api/equipment', function(req, res) {
  db.Equipment.findAll({
    order: ['name']
  })
    .then(equipment => res.json(equipment))
    .catch(err => res.status(500).json(err))
})

router.put('/api/write', function(req, res) {
  
})

router.delete('/api/delete', function(req, res) {
  
})

module.exports = router;