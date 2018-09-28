const mongoose = require('mongoose')
const pptxgenjs = require('pptxgenjs')

mongoose.connect('mongodb://localhost:27017/AltranCaseStudies', { useNewUrlParser: true })
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err))

mongoose.Promise = Promise

let EngagementTypes = require('../models/engagement')
let Keywords = require('../models/keyword')
let Services = require('../models/service')
let CaseStudies = require('../models/caseStudy')
let SlideMaker = require('../js/slidesMaker')

// EngagementTypes.loadEngagementTypes()
// Keywords.loadKeywords()
// Services.loadServices()
// CaseStudies.loadCaseStudies()

module.exports = {

  // Get Services Table
  getServicesList () {
    return new Promise((resolve, reject) => {
      Services.getServices((serviceList) => {
        resolve(serviceList)
      })
    })
  },

  // Get Engagement Table
  getEngagementList() {
    return new Promise((resolve, reject) => {
      EngagementTypes.getEngagementTypes((engagements) => {
        resolve(engagements)
      })
    })
  },

  // Get the Keyword Table
  getKeywordList () {
    return new Promise((resolve, reject) => {
      Keywords.getKeywords((keys) => {
        resolve(keys)
      })
    })
  },

  // Get case studies
  getCaseStudyList() {
    return new Promise((resolve, reject) => {
      CaseStudies.getCaseStudies((studies) => {
        resolve(studies)
      })
    })
  },

  getCaseStudyById(id) {
    return new Promise((resolve, reject) => {
      CaseStudies.getCaseStudyById(id, (study) => {
        resolve(study)
      })
    })
  },

  addCaseStudy(study) {
    return new Promise((resolve, reject) => {
      CaseStudies.addCaseStudy(study, (added) => {
        resolve(added)
      })
    })
  },

  updateCaseStudy(id, study) {
    return new Promise((resolve, reject) => {
      CaseStudies.updateCaseStudies(id, study, (updated) => {
        resolve(updated)
      })
    })
  },

  deleteCaseStudy(id) {
    return new Promise((resolve, reject) => {
      CaseStudies.removeCaseStudies(id, (deleted) => {
        resolve(deleted)
      })
    })
  },

  createHITSlide(id) {
    return new Promise((resolve, reject) => {
      var pptx = new pptxgenjs()
      SlideMaker.defineMasterSlideTemplate(pptx)
      pptx.setLayout('LAYOUT_WIDE')
      SlideMaker.createSlide(pptx, 'HIT_TITLE_SLIDE', (presentation) => {
        console.log('done')
        resolve(presentation)
        })
      })
  }
}
