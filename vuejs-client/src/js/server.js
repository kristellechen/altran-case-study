let axios = require('axios')

const baseURL = 'http://localhost:3000'

export default {
  getStudies: function () {
    return axios.get(`${baseURL}/studies`)
  },
  // Get Services Table
  getServicesList: function () {
    return axios.get(`${baseURL}/services-table`)
  },
  // Get Engagement Table
  getEngagementList: function () {
    return axios.get(`${baseURL}/engagement-table`)
  },

  // Get the Keyword Table
  getKeywordList: function () {
    return axios.get(`${baseURL}/keyword-table`)
  },

  // Update a case study.
  // localhost:3000/studies/1000
  updateCaseStudy: function (study) {
    var url = `${baseURL}/studies/${study._id}`
    return axios.put(url, study)
  },

  // Create a new case study.
  // localhost:3000/studies
  createCaseStudy: function (study) {
    var url = `${baseURL}/studies`
    return axios.post(url, study)
  },

  // Delete a case study.
  // localhost:3000/studies/1000
  deleteCaseStudy: function (studyId) {
    var url = `${baseURL}/studies/${studyId}`
    return axios.delete(url)
  }
}
