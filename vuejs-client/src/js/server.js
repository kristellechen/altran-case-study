let axios = require('axios')

const fs = require('@/js/studies')
const baseURL = 'http://localhost:3000'

module.exports = {
  getStudies () {
    return fs.getStudies()
  },
  // Get Services Table
  getServicesList () {
    return axios.get(`${baseURL}/services-table`)
  },
  // Get Engagement Table
  getEngagementList () {
    return axios.get(`${baseURL}/engagement-table`)
  },

  // Get the Keyword Table
  getKeywordList () {
    return axios.get(`${baseURL}/keyword-table`)
  }
}
