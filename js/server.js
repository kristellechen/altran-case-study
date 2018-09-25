const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/AltranCaseStudies', {useNewUrlParser: true})
  .then(() => console.log('mongoDB connected'))
  .catch(err => console.log(err))

mongoose.Promise = Promise

EngagementTypes = require('../models/engagement')
Keywords = require('../models/keyword')
Services = require('../models/service')

//EngagementTypes.loadEngagementTypes()
//Keywords.loadKeywords()
//Services.loadServices()

module.exports = {

  // Get Services Table
  getServicesList() {
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
  getKeywordList() {
    return new Promise((resolve, reject) => {
      Keywords.getKeywords((keys) => {
        resolve(keys)
      })
    })
  }
}
