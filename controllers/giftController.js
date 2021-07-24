const express = require("express");
const router = express.Router();
const db = require("../models");

require('dotenv').config()

// CREATE new gift
router.post("/api/gift", function (req, res) {
  db.Gift.create(req.body).then(newGift => {
    return res.json(newGift)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})

// GET all gifts
router.get("/api/gifts", function (req, res) {
  db.Item.findAll({
    attributes: ['id', 'name'],
    include: [
      {
        model: db.Npc,
        attributes: ['id', 'name'],
        through: {
          model: db.Gift,
          attributes: []
        }
      },
      {
        model: db.Season,
        attributes: ["name", "id"],
        through: {
          model: db.ItemAvailabilities,
          attributes: []
        }
      }
    ],
    order: [
      ['name', 'ASC'],
      [db.Npc, 'name', 'ASC']
    ]
  }).then((gifts) => {
    const list = gifts.filter(gift => gift.Npcs.length > 0)
      // .sort((a, b) => a.Npcs.length > b.Npcs.length ? -1 : 1)

    res.json(list);
  }).catch(error => {
    console.log(error.message);
    res.status(500).send(error.message)
  })
})

// GET all gifts, with associated npcs, by preference
router.get("/api/gifts/:preference", function (req, res) {
  db.Item.findAll({
    attributes: ['id','name'],
    include: [
      {
        model: db.Npc,
        attributes: ['id', 'name', 'marriageable', 'availableIn'],
        through: {
          model: db.Gift,
          attributes: [],
          where: {
            preference: req.params.preference
          }
        },
        include: [
        	{
		        model: db.Season,
		        attributes: ['id', 'name'],
		        through: {
		          model: db.Event,
		          attributes: ['id', 'day', 'type', 'name'],
		          where: {
		            type: 'birthday'
		          }
		        }
		      }
        ]
      }
    ],
    order: [
      ['name', 'ASC'],
      [db.Npc, 'name', 'ASC']
    ]
  }).then((gifts) => {
    const list = gifts.filter((gift) => gift.Npcs.length > 0)
      // .sort((a, b) => (a.Npcs.length > b.Npcs.length ? -1 : 1))

    res.json(list)
  }).catch(error => {
    console.log(error.message);
    res.status(500).send(error.message)
  })
})

// GET one gift (by name)
router.get("/api/gift/:name", function (req, res) {
  db.Item.findOne({
    attributes: ['id', 'name'],
    where: {
      name: req.params.name
    },
    include: [
      {
        model: db.Gift,
        attributes: ['preference']
      },
      {
        model: db.Npc,
        attributes: ['id', 'name', 'birthdayDate', 'birthdaySeasonId', 'marriageable', 'availableIn'],
        through: db.Gift
      },
    ]
  }).then(function (singleGift) {
    res.send(singleGift)
  }).catch(error => {
    res.status(500).send(error.message)
  })
})


// UPSERT gift information
router.post("/api/gift/upsert", function (req, res) {
  console.log("UPSERT", req.body)
  db.Gift.upsert(
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

// DELETE gift
router.delete("/api/gift/:id", function (req, res) {
  db.Gift.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deleteGift => {

    res.json(deleteGift)
  }).catch(error => {
    res.status(500).send(error.message)
  })
})

module.exports = router;