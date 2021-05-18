const express = require("express");
const router = express.Router();
const db = require("../models");

require('dotenv').config()

router.post('/api/season', function(req, res) {
  
})

router.get('/api/seasons', function(req, res) {
  db.Season.findAll()
    .then(seasons => res.json(seasons))
    .catch(err => res.status(500).json(err))
})

router.put('/api/write', function(req, res) {
  
})

router.delete('/api/delete', function(req, res) {
  
})

module.exports = router;