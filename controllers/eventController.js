const express = require("express");
const router = express.Router();
const db = require("../models");

require('dotenv').config()

router.post('/api/event', function(req, res) {
  db.Event.create(req.body)
    .then(newEvent => res.json(newEvent))
    .catch(err => res.status(500).json(err))
})

router.get('/api/events', function(req, res) {
  db.Event.findAll({
    include: [db.Npc['name', "availableIn"], db.Season['name']],
    order: ['seasonId', 'day']
  })
    .then(results => res.json(results))
    .catch(err => res.status(500).json(err))
})

router.get('/api/events/:season', function(req, res) {
  db.Event.findAll({
    where: {
      SeasonId: req.params.season
    },
    attributes: ["SeasonId", "SubRegionId", "NpcId", "day", "endTime", "startTime", "name", "type", "id"],
    include: [
      {
        model: db.Npc,
        attributes: ['name', "availableIn"]
      }, 
      {
        model: db.Season,
        attributes: ['name']
      }
    ],
    order: [
      ['seasonId', 'ASC'],
      ['day', 'ASC'],
      ['type', 'DESC']
    ],
  })
    .then(results => res.json(results))
    .catch(err => res.status(500).json(err))
})

router.post('/api/event/upsert', function(req, res) {
  db.Event.upsert(
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

router.put('/api/write', function(req, res) {
  
})

router.delete('/api/event/:id', function(req, res) {
  db.Event.findOne({
    where: {
      id: req.params.id
    }
  })
  .then(data => {
    const eventData = data;

    db.Event.destroy({
      where: {
        id: req.params.id
      }
    })
    .then((deleted) => {
      console.log(deleted)
      res.json(eventData)
    }).catch(error => {
      res.status(500).send(error.message)
    })
  })
})

module.exports = router;