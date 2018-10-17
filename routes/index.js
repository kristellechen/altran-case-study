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
    res.status(500).send(err)
  })
})

// Get a study by id.
// localhost:3000/studies/1000
router.get('/studies/:id', function (req, res, next) {
  server.getCaseStudyById(req.params.id).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err)
  })
})

// Update a study.
// localhost:3000/studies/1000
router.put('/studies/:id', function (req, res) {
  server.updateCaseStudy(req.params.id, req.body).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err)
  })
})

// Create a study.
// localhost:3000/studies
router.post('/studies', function (req, res) {
  server.addCaseStudy(req.body).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err)
  })
})

// Delete a study.
// localhost:3000/studies/1000
router.delete('/studies/:id', function (req, res) {
  server.deleteCaseStudy(req.params.id).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err)
  })
})

// Get Engagement Table
router.get('/engagement-table', function (req, res, next) {
  server.getEngagementList().then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err)
  })
})

// Create an engagement type.
// localhost:3000/engagement-table
router.post('/engagement-table', function (req, res) {
  server.addEngagement(req.body).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err.message)
  })
})

// Delete an engagement type.
// localhost:3000/engagement-table/1000
router.delete('/engagement-table/:id', function (req, res) {
  server.deleteEngagement(req.params.id).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err)
  })
})

// Get service Table
// localhost:3000/services-table
router.get('/services-table', function (req, res, next) {
  server.getServicesList().then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err)
  })
})

// Create an service type.
// localhost:3000/services-table
router.post('/services-table', function (req, res) {
  server.addService(req.body).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err.message)
  })
})

// Get Services Table
router.delete('/services-table/:id', function (req, res, next) {
  server.deleteService(req.params.id).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err)
  })
})

// Get Keyword Table
router.get('/keyword-table', function (req, res, next) {
  server.getKeywordList().then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err)
  })
})

// Create an keyword type.
// localhost:3000/keyword-table
router.post('/keyword-table', function (req, res) {
  server.addKeyword(req.body).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err.message)
  })
})

// Delete a keyword.
// localhost:3000/keyword-table/1000
router.delete('/keyword-table/:id', function (req, res) {
  server.deleteKeyword(req.params.id).then(resp => {
    res.json(resp)
  }).catch(err => {
    res.status(500).send(err)
  })
})

// Create a presentation.
// localhost:3000/presentation
router.get('/presentation/:id', function (req, res) {
  server.createHITSlide(req.params.id).then(resp => {
    let filename = 'presentation.pptx'
    res.writeHead(200, { 'Content-Type': 'application/force-download', 'Content-disposition': 'attachment; filename=' + filename })
    res.end(new Buffer(resp, 'binary'))
  // res.json(resp)
  }).catch(err => res.status(500).json(err))
})

module.exports = router
