const mongoose = require('mongoose')

// Services Schema
const serviceSchema = new mongoose.Schema({
  serviceId: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

const Services = module.exports = mongoose.model('Services', serviceSchema)

// load initial factory data
module.exports.loadServices = (callback) => {
  Services.create({
    serviceId: 1,
    name: 'Development'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 2,
    name: 'Project Management'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 3,
    name: 'Requirements Definition'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 4,
    name: 'Design'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 5,
    name: 'Development'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 6,
    name: 'Verification'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 7,
    name: 'Test'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 8,
    name: 'Consulting'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 9,
    name: 'ESS'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 10,
    name: 'Software Development'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 11,
    name: 'Process Consulting'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 12,
    name: 'IoT'
  }, (err) => {
    if (err) console.log(err)
  })
  Services.create({
    serviceId: 13,
    name: 'Analytics'
  }, (err) => {
    if (err) console.log(err)
  })
}

// ADD Services
module.exports.addService = (item) => {
  var p1 = function (name) {
    return Services.findOne({
      'name': {
        $regex: new RegExp('^' + item.name.toLowerCase(), 'i')
      }
    }).exec()
  }

  var p2 = function (resp) {
    if (resp) {
      throw new Error(`${item.name} already exists`)
    }
    return Services.create(item)
  }

  return p1(item.name)
    .then(p2)
}

// GET Services
module.exports.getServices = (callback, limit) => {
  return Services.find().limit(limit).exec()
}

// UPDATE Services
module.exports.updateService = (id, item) => {
  var query = {
    _id: id
  }
  var update = {
    name: item.name
  }
  return Services.findOneAndUpdate(query, update).exec()
}

// DELETE Services
module.exports.removeService = (id, callback) => {
  var query = {
    _id: id
  }
  return Services.findByIdAndRemove(query).exec()
}
