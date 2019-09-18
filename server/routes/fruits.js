const express = require('express')

const db = require('../db')
require('dotenv').config()

const router = express.Router()

router.get('/', (req, res) => {
  db.getSatellite()
    .then(satellite => {
      res.json({satellite})
    })
})

module.exports = router
