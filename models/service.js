const mongoose = require('mongoose')

// Services Schema
const serviceSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Services = module.exports = mongoose.model('Services', serviceSchema)

// ADD Services
module.exports.addService = (item, callback) => {
    Services.create(item, callback)
}

// GET Services
module.exports.getService = (callback, limit) => {
    Services.find().limit(limit).exec().then(callback)
}