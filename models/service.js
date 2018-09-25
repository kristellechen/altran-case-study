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
    Services.create( {serviceId: 1, name: 'Development'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 2, name: 'Project Management'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 3, name: 'Requirements Definition'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 4, name: 'Design'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 5, name: 'Development'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 6, name: 'Verification'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 7, name: 'Test'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 8, name: 'Consulting'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 9, name: 'ESS'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 10, name: 'Software Development'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 11, name: 'Process Consulting'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 12, name: 'IoT'}, (err) => {
        if (err) console.log(err)
    })
    Services.create( {serviceId: 13, name: 'Analytics'}, (err) => {
        if (err) console.log(err)
    })
}


// ADD Services
module.exports.addService = (item, callback) => {
    Services.create(item, callback)
}

// GET Services
module.exports.getServices = (callback, limit) => {
    Services.find().limit(limit).exec().then(callback)
}

// UPDATE Services
module.exports.updateService = (name, item, options, callback) => {
    var query = {name: name}
    var update = {name: item.name}
    Services.findOneAndUpdate(query, update, options, callback)
}

// DELETE Services
module.exports.removeService = (name, callback) => {
    var query = {name: name}
    Services.deleteOne(query, callback)
}