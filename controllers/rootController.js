const express = require('express');
const router = express.Router();
const db = require("../models");

router.get('/', function(req, res) {
  db.Item.findOne({
    where: {
      id: 1
    }
  })
    .then(item => res.json(item))
    .catch(err => res.status(500).json(err))
})

module.exports = router;