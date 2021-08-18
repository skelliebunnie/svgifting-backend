const express = require('express');
const router = express.Router();
const db = require("../models");

router.get('/', function(req, res) {
  if(db.User === undefined) {
    console.error(db);
  } else {
    db.User.findAll({})
      .then(results => res.json(results))
      .catch(err => {
        console.error(err);
        res.status(500).json(err)
      })
  }
  
  // return res.json({ message: 'success' })
})

module.exports = router;