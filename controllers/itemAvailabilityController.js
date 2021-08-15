const express = require("express");
const router = express.Router();
const db = require("../models");

require('dotenv').config()

router.get('/api/itemavailability/:id', function(req, res) {
  db.ItemAvailability.findAll({
    where: {
    	ItemId: req.params.id
    },
    include: [
    	{
    		model: db.Location,
    		attributes: ['id', 'name']
    	}
    ]
  }).then(items => {
    return res.json(items);
  }).catch(err => res.status(500).json(err));
})

module.exports = router;