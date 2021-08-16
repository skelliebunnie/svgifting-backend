const express = require("express");
const router = express.Router();
const db = require("../models/index.js");

const { Op } = require("sequelize");
const jwt = require('jsonwebtoken');
const auth = require("./auth.js");

require('dotenv').config()

router.post('/api/item', function(req, res) {
	let userData = auth.user(req);

  if(userData.admin) {
  	db.Item.create(req.body).then(newItem => {
	    return res.json(newItem);
	  }).catch(err => res.status(500).json(err));
  } else {
  	res.status(403).send('you must be an admin to create items!')
  }
})

router.get('/api/items', function(req, res) {
  db.Item.findAll({
    order: ['name'],
    include: [
    	{
	    	model: db.Category,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.Animal,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.Equipment,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.Season,
	    	through: db.ItemAvailability,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.Location,
	    	through: db.ItemAvailability,
	    	attributes: ['id', 'name'],
	    	include: {
	    		model: db.SubRegion,
	    		attributes: ['id', 'name'],
	    		include: {
	    			model: db.Region,
	    			attributes: ['id', 'name']
	    		}
	    	}
	    }
    ]
  }).then(items => {
    return res.json(items);
  }).catch(err => res.status(500).send(err.message));
})

router.get('/api/item/:name', function(req, res) {
  db.Item.findOne({
    where: {
      name: req.params.name
    },
    include: [
    	{
	    	model: db.Category,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.Animal,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.Equipment,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.Season,
	    	through: db.ItemAvailability,
	    	attributes: ['id', 'name']
	    },
	    {
	    	model: db.Location,
	    	through: db.ItemAvailability,
	    	attributes: ['id', 'name'],
	    	include: {
	    		model: db.SubRegion,
	    		attributes: ['id', 'name'],
	    		include: {
	    			model: db.Region,
	    			attributes: ['id', 'name']
	    		}
	    	}
	    }
    ]
  }).then(item => {
    return res.json(item.data);
  }).catch(err => res.status(500).send(err.message));
})

// post for new, put for update
// can I use post for upsert? YES!
router.post('/api/item/upsert', function(req, res) {
  let userData = auth.user(req);

  if(userData.admin) {
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
  } else {
  	res.status(403).send('you must be an admin to create / update items!')
  }
})

// router.delete('/api/item/delete/:id', function(req, res) {
  
// })

module.exports = router;