const express = require("express");
const router = express.Router();
const db = require("../models");

require('dotenv').config()

//CREATE new npc
router.post("/api/npc", function (req, res) {
  db.Npc.create(req.body).then(newNpc => {
    return res.json(newNpc)
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  })
})


//GET all npcs
router.get("/api/npcs", function (req, res) {
  db.Npc.findAll({
    attributes: ['name', 'birthdayDate', 'checkupDate', 'marriageable', 'id', 'availableIn'],
    order: [['name'], [db.Item, 'name']],
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
      },
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
  }).then((npcs) => {
    res.json(npcs)
  }).catch(error => {
    console.log(error.message);
    res.status(500).send(error.message)
  })
})

//GET one npc (by name)
router.get("/api/npcs/:npcName", function (req, res) {
  db.Npc.findOne({
    attributes: ['name', 'birthdayDate', 'checkupDate', 'marriageable', 'id', 'availableIn'],
    where: {
      name: req.params.npcName
    },
    include: [
      {
        model: db.Npc,
        attributes: ['name', 'birthdayDate', 'checkupDate', 'marriageable', 'id', 'availableIn'],
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
  }).then(function (singleNpc) {
    res.send(singleNpc)
  }).catch(error => {
    res.status(500).send(error.message)
  })
})

//GET one npc (by ID)
router.get("/api/npcs/:npcId", function (req, res) {
  db.Npc.findOne({
    attributes: ['name', 'birthdayDate', 'checkupDate', 'marriageable', 'id', 'availableIn'],
    where: {
      id: req.params.npcId
    },
    include: [
      {
        model: db.Npc,
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
  }).then(function (singleNpc) {
    res.send(singleNpc)
  }).catch(error => {
    res.status(500).send(error.message)
  })
})

router.post('/api/npc/upsert', function (req, res) {
  db.Npc.upsert(
    req.body,
    { returning: true }
  )
    .then(result => {
      res.json(result);
    })
    .catch(err => {
      console.error(err.message);
      res.status(500).json({ message: err.message })
    });
})

//UPDATE npc information
router.put("/api/npc", function (req, res) {
  db.Npc.update(req.body,
  {
    where: {
      id: req.body.id
    }
  })
  .then(updatedNpc => {
    res.json(updatedNpc)
  }).catch(error => {
    res.status(500).send(error.message)
  })
})

//DELETE npc
router.delete("/api/npc/:id", function (req, res) {
  db.Npc.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(deleteNpc => {

    res.json(deleteNpc)
  }).catch(error => {
    res.status(500).send(error.message)
  })
})

module.exports = router;