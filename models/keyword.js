const mongoose = require('mongoose')

// Keyword Schema
const keywordSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
})

const Keywords = module.exports = mongoose.model('Keywords', keywordSchema)

// ADD Keywords
module.exports.addKeyword = (keyword, callback) => {
    Keywords.create(keyword, callback)
}

// GET Keywords
module.exports.getKeywords = (callback, limit) => {
    Keywords.find().limit(limit).exec().then(callback)
}