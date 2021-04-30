const express = require("express");
const router = express.Router();
const db = require("../models");

require('dotenv').config()

router.post('/api/item', function(req, res) {
  db.Item.create(req.body).then(newItem => {
    return res.json(newItem);
  }).catch(err => res.status(500).json(err));
})

router.get('/api/items', function(req, res) {
  db.Item.findAll({
    attributes: ['name', 'source', 'sellPrice', 'edible', 'difficulty', 'behavior', 'size', 'initialGrowthTime', 'reproductionTime', 'processingTime', 'EquipmentId', 'AnimalId', 'LocationId', 'TypeId']
  }).then(items => {
    return res.json(items);
  }).catch(err => res.status(500).json(err));
})

router.get('/api/item/:name', function(req, res) {
  db.Item.findOne({
    where: {
      name: req.params.name
    }
  }).then(item => {
    return res.json(item.data);
  }).catch(err => res.status(500).json(err));
})

// router.put('/api/write', function(req, res) {
  
// })

// router.delete('/api/delete', function(req, res) {
  
// })

module.exports = router;