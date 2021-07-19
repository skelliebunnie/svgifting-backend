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
    order: ['name']
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

// post for new, put for update
// can I use post for upsert? YES!
router.post('/api/item/upsert', function(req, res) {
  db.Item.upsert(
    req.body,
    { returning: true }
  )
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({message: err.message})
    });
})

router.delete('/api/item/delete/:id', function(req, res) {
  
})

module.exports = router;