let axios = require('axios')

const baseURL = 'http://172.16.2.139:3000'
// const baseURL = 'http://localhost:3000'

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
  },

  // Request for powerpoint
  getPresentation: function (studyId) {
    var url = `${baseURL}/presentation/${studyId}`
    // axios download with response type "stream"
    return axios({
      method: 'get',
      url: url,
      responseType: 'blob'
    }).then(resp => {
      console.log(resp)
      return resp
    })
  },

  // Create a new engagement type
  // localhost:3000/engagement-table
  createEngagementType: function (tag) {
    var url = `${baseURL}/engagement-table`
    var engagement = {
      'engagementId': 999,
      'name': tag
    }
    return axios.post(url, engagement)
  },

  // Delete from keyword-table
  deleteEngagementType: function (id) {
    var url = `${baseURL}/engagement-table/${id}`
    return axios.delete(url)
  },

  // Create a new keyword type
  // localhost:3000/keyword-table
  createKeywordType: function (tag) {
    var url = `${baseURL}/keyword-table`
    var keyword = {
      'keywordId': 999,
      'name': tag
    }
    return axios.post(url, keyword)
  },

  // Delete from keyword-table
  deleteKeyword: function (id) {
    var url = `${baseURL}/keyword-table/${id}`
    return axios.delete(url)
  },

  // Create a new service type
  // localhost:3000/services-table
  createServiceType: function (tag) {
    var url = `${baseURL}/services-table`
    var serviceType = {
      'serviceId': 999,
      'name': tag
    }
    return axios.post(url, serviceType)
  },

  // Delete from service-table
  deleteService: function (id) {
    var url = `${baseURL}/services-table/${id}`
    return axios.delete(url)
  }
}
