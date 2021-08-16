const express = require("express");
const router = express.Router();
const db = require('../models');
const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');
const auth = require("./auth.js");

require('dotenv').config()

router.post('/api/item', function(req, res) {
	let userData = auth.user(req);

  if(userData.admin) {
  	db.item.create(req.body).then(newItem => {
	    return res.json(newItem);
	  }).catch(err => res.status(500).json(err));
  } else {
  	res.status(403).send('you must be an admin to create items!')
  }
})

router.get('/api/items', function(req, res) {
  db.item.findAll({
    order: ['name'],
    include: [
    	{
	    	model: db.category,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.animal,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.equipment,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.season,
	    	through: ItemAvailability,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.location,
	    	through: itemavailability,
	    	attributes: ['id', 'name'],
	    	include: {
	    		model: db.subregion,
	    		attributes: ['id', 'name'],
	    		include: {
	    			model: db.region,
	    			attributes: ['id', 'name']
	    		}
	    	}
	    }
    ]
  }).then(items => {
    return res.json(items);
  }).catch(err => {
  	console.error(err);
  	res.status(500).json(err)
  });
})

router.get('/api/item/:name', function(req, res) {
  db.Item.findOne({
    where: {
      name: req.params.name
    },
    include: [
    	{
	    	model: db.category,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.animal,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.equipment,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.season,
	    	through: itemavailability,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.location,
	    	through: itemavailability,
	    	attributes: ['id', 'name'],
	    	include: {
	    		model: db.subregion,
	    		attributes: ['id', 'name'],
	    		include: {
	    			model: db.region,
	    			attributes: ['id', 'name']
	    		}
	    	}
	    }
    ]
  }).then(item => {
    return res.json(item.data);
  }).catch(err => res.status(500).json(err));
})

// post for new, put for update
// can I use post for upsert? YES!
router.post('/api/item/upsert', function(req, res) {
  let userData = auth.user(req);

  if(userData.admin) {
  	db.item.upsert(
	    req.body,
	    { returning: true }
	  )
	    .then(result => {
	      res.json(result);
	    })
	    .catch(err => {
	      console.error(err);
	      res.status(500).json(err)
	    });
  } else {
  	res.status(403).send('you must be an admin to create / update items!')
  }
})

// router.delete('/api/item/delete/:id', function(req, res) {
  
// })

module.exports = router;