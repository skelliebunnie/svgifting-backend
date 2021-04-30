const express = require("express");
const router = express.Router();
const db = require("../models");

require('dotenv').config()

//CREATE new villager
router.post("/api/villager", function (req, res) {
  db.Villager.create(req.body).then(newVillager => {
    return res.json(newVillager)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})


//GET all villagers
router.get("/api/villagers", function (req, res) {
  db.Villager.findAll({
    attributes: ['name', 'birthdayDate', 'checkupDate', 'available'],
    include: [
      {
        model: db.Item,
        attributes: ['name'],
        through: {
          model: db.Gift,
          attributes: ['preference'],
        }
      },
      {
        model: db.Season,
        attributes: ['name'],
        as: 'birthdaySeason'
      },
      {
        model: db.Season,
        attributes: ['name'],
        as: 'checkupSeason'
      },
      {
        model: db.Location,
        attributes: ['name'],
        include: [
          {
            model: db.SubRegion,
            attributes: ['name'],
            include: [
              {
                model: db.Region,
                attributes: ['name']
              }
            ]
          }
        ]
      }
    ]
  }).then((villagers) => {
    res.json(villagers)
  }).catch(error => {
    console.log(error.message);
    res.status(500).send(error.message)
  })
})

//GET one villager (by name)
router.get("/api/villagers/:villagerName", function (req, res) {
  db.Villager.findOne({
    attributes: ['name', 'birthdayDate', 'checkupDate', 'available'],
    where: {
      name: req.params.villagerName
    },
    include: [
      {
        model: db.Villager,
        attributes: ['name'],
        as: 'family',
        duplicating: true
      },
      {
        model: db.Item,
        attributes: ['name'],
        through: {
          model: db.Gift,
          attributes: ['preference'],
        }
      },
      {
        model: db.Season,
        attributes: ['name'],
        as: 'birthdaySeason'
      },
      {
        model: db.Season,
        attributes: ['name'],
        as: 'checkupSeason'
      },
      {
        model: db.Location,
        attributes: ['name'],
        include: [
          {
            model: db.SubRegion,
            attributes: ['name'],
            include: [
              {
                model: db.Region,
                attributes: ['name']
              }
            ]
          }
        ]
      }
    ]
  }).then(function (singleVillager) {
    res.send(singleVillager)
  }).catch(error => {
    res.status(500).send(error.message)
  })
})

//UPDATE villager information
router.put("/api/villager", function (req, res) {
  db.Villager.update(req.body,
  {
    where: {
      id: req.body.id
    }
  })
  .then(updatedVillager => {
    res.json(updatedVillager)
  }).catch(error => {
    res.status(500).send(error.message)
  })
})

//DELETE villager
router.delete("/api/villager/:id", function (req, res) {
  db.Villager.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deleteVillager => {

    res.json(deleteVillager)
  }).catch(error => {
    res.status(500).send(error.message)
  })
})

module.exports = router;