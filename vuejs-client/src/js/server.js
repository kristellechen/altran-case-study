let axios = require('axios')

const fs = require('@/js/studies')
const baseURL = 'http://localhost:3000'

export default {
  getStudies: function () {
    return fs.getStudies()
  },
  // Get Services Table
  getServicesList: function () {
    return new Promise((resolve, reject) => {
      resolve(fs.getServices())
    })
    // return axios.get(`${baseURL}/services-table`)
  },
  // Get Engagement Table
  getEngagementList: function () {
    return new Promise((resolve, reject) => {
      resolve(fs.getEngagementTypes())
    })
    // return axios.get(`${baseURL}/engagement-table`)
  },

  // Get the Keyword Table
  getKeywordList: function () {
    return new Promise((resolve, reject) => {
      resolve(fs.getKeywords())
    })
    // return axios.get(`${baseURL}/keyword-table`)
  }
}