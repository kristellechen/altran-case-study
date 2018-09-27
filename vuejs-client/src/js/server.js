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
  }
}
