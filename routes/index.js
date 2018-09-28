var express = require('express')
var router = express.Router()
const server = require('../js/server')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.send('hello')
})

// Get all studies
router.get('/studies', function (req, res, next) {
  server.getCaseStudyList().then(resp => {
    res.json(resp)
  }).catch(err => {
    res.json(err)
  })
})

// Get a study by id.
// localhost:3000/studies/1000
router.get('/studies/:id', function (req, res, next) {
  server.getCaseStudyById(req.params.id).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).json(err)
  })
})

// Update a study.
// localhost:3000/studies/1000
router.put('/studies/:id', function (req, res) {
  server.updateCaseStudy(req.params.id, req.body).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).json(err)
  })
})

// Create a study.
// localhost:3000/studies
router.post('/studies', function (req, res) {
  server.addCaseStudy(req.body).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).json(err)
  })
})

// Delete a study.
// localhost:3000/studies/1000
router.delete('/studies/:id', function (req, res) {
  server.deleteCaseStudy(req.params.id).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.json(err)
  })
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

// Create a presentation.
// localhost:3000/presentation
router.post('/presentation/:id', function (req, res) {
  server.createHITSlide(req.params.id).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.json(err)
  })
})

module.exports = router
