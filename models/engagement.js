const mongoose = require('mongoose')

// Engagement Types Schema
const engagementSchema = new mongoose.Schema({
  engagementId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const EngagementTypes = module.exports = mongoose.model('EngagementTypes', engagementSchema)

// load initial factory data
module.exports.loadEngagementTypes = (callback) => {
  EngagementTypes.create({ engagementId: 1, name: 'Software Development' }, (err) => {
    if (err) console.log(err)
  })
  EngagementTypes.create({ engagementId: 2, name: 'Product Consulting' }, (err) => {
    if (err) console.log(err)
  })
  EngagementTypes.create({ engagementId: 3, name: 'System Development' }, (err) => {
    if (err) console.log(err)
  })
  EngagementTypes.create({ engagementId: 4, name: 'Process Consulting' }, (err) => {
    if (err) console.log(err)
  })
}

// ADD EngagementTypes
module.exports.addEngagementTypes = (engagement, callback) => {
  EngagementTypes.create(engagement, callback)
}

// GET EngagementTypes
module.exports.getEngagementTypes = (callback, limit) => {
  EngagementTypes.find().limit(limit).exec().then(callback)
}

// UPDATE EngagementTypes
module.exports.updateEngagementType = (name, engagement, options, callback) => {
  var query = { name: name }
  var update = { name: engagement.name }
  EngagementTypes.findOneAndUpdate(query, update, options, callback)
}

// DELETE EngagementTypes
module.exports.removeEngagementType = (name, callback) => {
  var query = { name: name }
  EngagementTypes.deleteOne(query, callback)
}
