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
module.exports.addEngagementTypes = (item) => {
  var p1 = function (name) {
    return EngagementTypes.findOne({
      'name': {
        $regex: new RegExp('^' + item.name.toLowerCase(), 'i')
      }
    }).exec()
  }

  var p2 = function (resp) {
    if (resp) {
      throw new Error(`${item.name} already exists`)
    }
    return EngagementTypes.create(item)
  }

  return p1(item.name)
    .then(p2)
}

// FIND EngagementType
module.exports.findEngagementByName = (name, callback) => {
  var query = { name: name }
  return EngagementTypes.findOne(query).exec()
}

// GET EngagementTypes
module.exports.getEngagementTypes = () => {
  return EngagementTypes.find().exec()
}

// UPDATE EngagementTypes
module.exports.updateEngagementType = (id, engagement, options, callback) => {
  var query = { _id: id }
  var update = { name: engagement.name }
  EngagementTypes.findOneAndUpdate(query, update, options, callback)
}

// DELETE EngagementTypes
module.exports.removeEngagementType = (id, callback) => {
  var query = { _id: id }
  return EngagementTypes.findByIdAndRemove(query).exec()
}
