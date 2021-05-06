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
    attributes: ['name'],
    include: [
      {
        model: db.Villager,
        attributes: ['name'],
        through: {
          model: db.Gift,
          attributes: []
        }
      }
    ],
    order: ['name']
  }).then((gifts) => {
    const list = gifts.filter(gift => gift.Villagers.length > 0).sort((a, b) => a.Villagers.length > b.Villagers.length ? -1 : 1)
    res.json(list)
  }).catch(error => {
    console.log(error.message);
    res.status(500).send(error.message)
  })
})

// GET all gifts, with associated villagers, by preference
router.get("/api/gifts/:preference", function (req, res) {
  db.Item.findAll({
    attributes: ['name'],
    include: [
      {
        model: db.Villager,
        attributes: ['name'],
        through: {
          model: db.Gift,
          attributes: [],
          where: {
            preference: req.params.preference
          }
        }
      }
    ],
    order: ['name']
  }).then((gifts) => {
    const list = gifts.filter(gift => gift.Villagers.length > 0).sort((a, b) => a.Villagers.length > b.Villagers.length ? -1 : 1)
    res.json(list)
  }).catch(error => {
    console.log(error.message);
    res.status(500).send(error.message)
  })
})

// GET one gift (by name)
router.get("/api/gift/:name", function (req, res) {
  db.Item.findOne({
    attributes: ['name'],
    where: {
      name: req.params.name
    },
    include: [
      {
        model: db.Gift,
        attributes: ['preference']
      },
      {
        model: db.Villager,
        attributes: ['name'],
        through: db.Gift
      },
    ]
  }).then(function (singleGift) {
    res.send(singleGift)
  }).catch(error => {
    res.status(500).send(error.message)
  })
})


// UPDATE gift information
router.put("/api/gift/:id", function (req, res) {
  db.Gift.update(req.body,
  {
    where: {
      id: req.params.id
    }
  })
  .then(updatedGift => {
    res.json(updatedGift)
  }).catch(error => {
    res.status(500).send(error.message)
  })
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