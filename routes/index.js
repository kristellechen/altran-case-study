var express = require('express')
var router = express.Router()
const server = require('../js/server')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('hello')
})

// Get all studies
router.get('/studies', function (req, res, next) {
  res.send('list of studies')
})

// Get a study by id.
// localhost:3000/studies/1000
router.get('/studies/:id', function (req, res, next) {
  res.send(`Get study with id = ${req.params.id}`)
})

// Update a study.
// localhost:3000/studies/1000
router.put('/studies/:id', function (req, res) {
  res.send(`Update study with id = ${req.params.id}`)
})

// Create a study.
// localhost:3000/studies
router.post('/studies', function (req, res) {
  var body = JSON.stringify(req.body)
  res.send(`Create a new study with id = ${body}`)
})

// Delete a study.
// localhost:3000/studies/1000
router.delete('/studies/:id', function (req, res) {
  res.send(`Delete study with id = ${req.params.id}`)
})

// Get Engagement Table
router.get('/engagement-table', function (req, res, next) {
  server.getEngagementList().then(resp => {
    res.json(resp)
  }).catch(err => {
    res.json(err)
  })
})

// Get Services Table
router.get('/services-table', function (req, res, next) {
  server.getServicesList().then(resp => {
    res.json(resp)
  }).catch(err => {
    res.json(err)
  })
})

// Get Services Table
router.get('/keyword-table', function (req, res, next) {
  server.getKeywordList().then(resp => {
    res.json(resp)
  }).catch(err => {
    res.json(err)
  })
})

module.exports = router
