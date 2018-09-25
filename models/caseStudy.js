const mongoose = require('mongoose')

// Case Study Schema
const caseSchema = new mongoose.Schema({
  caseId: {
    type: Number,
    required: true
  },
  client: {
    type: String,
    required: true
  },
  projectName: {
    type: String,
    required: true
  },
  year: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  industry: {
    type: String,
    required: true
  },
  sector: {
    type: String,
    required: true
  },
  services: {
    type: String,
    required: true
  },
  projectType: {
    type: String,
    required: true
  },
  engagementType: {
    type: String,
    required: true
  },
  discipline: {
    type: String,
    required: true
  },
  technologies: {
    type: String,
    required: true
  },
  keywordLookup: {
    type: String,
    required: true
  },
  challenges: {
    type: String,
    required: true
  },
  solution: {
    type: String,
    required: true
  },
  provenResults: {
    type: String,
    required: true
  },
  keywords: {
    type: String,
    required: true
  },
  summary: {
    type: String,
    required: true
  },
  team: {
    type: String,
    required: true
  },
  images: {
    type: String,
    required: true
  }
})

const CaseStudies = module.exports = mongoose.model('CaseStudies', caseSchema)

// load initial data
module.exports.loadCaseStudies = (callback) => {

}

// ADD case studies
module.exports.addCaseStudy = (study, callback) => {

}

// GET case studies
module.exports.getCaseStudies = (callback, limit) => {

}

// UPDATE case studies

// DELETE case studies