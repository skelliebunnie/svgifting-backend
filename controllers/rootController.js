const express = require('express');
const router = express.Router();
const db = require("../models");
const Item = db.Item;

router.get('/', function(req, res) {
  Item.findAll({})
    .then(results => res.json(results))
    .catch(err => {
      console.error(err);
      res.status(500).json(err)
    })
  
  // return res.json({ message: 'success' })
})

module.exports = router;