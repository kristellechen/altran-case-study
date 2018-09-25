const mongoose = require('mongoose')

// Engagement Types Schema
const engagementSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  }
})

const EngagementTypes = module.exports = mongoose.model('EngagementTypes', engagementSchema)

// ADD EngagementTypes
module.exports.addEngagementTypes = (engagement, callback) => {
  EngagementTypes.create(engagement, callback)
}

// GET EngagementTypes
module.exports.getEngagementTypes = (callback, limit) => {
  EngagementTypes.find().limit(limit).exec().then(callback)
}