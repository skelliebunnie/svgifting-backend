const express = require("express");
const router = express.Router();
const db = require("../models");

require('dotenv').config()

router.post('/api/create', function(req, res) {
  
})

router.get('/api/locations', function(req, res) {
  db.Location.findAll()
    .then(types => res.json(types))
    .catch(err => res.status(500).json(err))

})

router.get('/api/residences', function (req, res) {
  db.Location.findAll({
    where: {
      residence: true
    }
  }).then(types => res.json(types))
    .catch(err => res.status(500).json(err))

})

router.put('/api/write', function(req, res) {
  
})

router.delete('/api/delete', function(req, res) {
  
})

module.exports = router;