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

//   STEPS for DEPLOYMENT to NEW SERVER
//   1. Un-Comment the following to seed the initial set of data.
//   2. Run the server once, then stop the server.
//   3. Comment out the following lines before running server again
//      to prevent duplicating data!!
//   4. NO NEED TO un-comment these lines of code when restarting server
// EngagementTypes.loadEngagementTypes()
// Keywords.loadKeywords()
// Services.loadServices()
// CaseStudies.loadCaseStudies()

module.exports = {

  // Get Services Table
  getServicesList () {
    return Services.getServices()
  },

  addService (newService) {
    return Services.addService(newService)
  },

  deleteService (serviceId) {
    return Services.removeService(serviceId)
  },

  // Get Engagement Table
  getEngagementList () {
    return EngagementTypes.getEngagementTypes()
  },

  addEngagement (engagement) {
    return EngagementTypes.addEngagementTypes(engagement)
  },

  deleteEngagement (id) {
    return EngagementTypes.removeEngagementType(id)
  },

  // Get the Keyword Table
  getKeywordList () {
    return Keywords.getKeywords()
  },

  addKeyword (keyword) {
    return Keywords.addKeyword(keyword)
  },

  deleteKeyword (id) {
    return Keywords.removeKeyword(id)
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
        } else if (study.sector === 'HIT') {
          slidetype = 'HIT_TITLE_SLIDE'
        } else if (study.sector === 'AMH') {
          slidetype = 'AMH_TITLE_SLIDE'
        } else {
          slidetype = 'IE_TITLE_SLIDE'
        }
        SlideMaker.createSlide(pptx, study, slidetype, (presentation) => {
          resolve(presentation)
        })
      }).catch(err => {
        reject(err)
      })
    })
  }
}
