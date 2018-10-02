const mongoose = require('mongoose')
const PPtxgenjs = require('pptxgenjs')

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
  getEngagementList () {
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
  getCaseStudyList () {
    return new Promise((resolve, reject) => {
      CaseStudies.getCaseStudies((studies) => {
        resolve(studies)
      })
    })
  },

  getCaseStudyById (id) {
    return CaseStudies.getCaseStudyById(id)
  },

  addCaseStudy (study) {
    return CaseStudies.addCaseStudy(study)
  },

  updateCaseStudy (id, study) {
    return CaseStudies.updateCaseStudy(id, study)
  },

  deleteCaseStudy (id) {
    return CaseStudies.removeCaseStudy(id)
  },

  createHITSlide (id) {
    return new Promise((resolve, reject) => {
      var pptx = new PPtxgenjs()
      SlideMaker.defineMasterSlideTemplate(pptx)
      pptx.setLayout('LAYOUT_WIDE')
      var slidetype = null
      CaseStudies.getCaseStudyById(id).then(study => {
        if (study.sector === 'MedTech') {
          slidetype = 'MedTech_TITLE_SLIDE'
        } else {
          slidetype = 'HIT_TITLE_SLIDE'
        }
        SlideMaker.createSlide(pptx, study, slidetype, (presentation) => {
          resolve(presentation)
        })
      })
    })
  }
}
