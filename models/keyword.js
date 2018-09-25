const mongoose = require('mongoose')

// Keyword Schema
const keywordSchema = new mongoose.Schema({
    keywordId: {
        type: Number,
        required: true
    },
    name: {
        type: String,
        required: true
    }
})

const Keywords = module.exports = mongoose.model('Keywords', keywordSchema)

// load initial factory data
module.exports.loadKeywords = (callback) => {
    Keywords.create({ keywordId: 50, name: '3 Axis Stepper'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 128, name: '3D Mapping'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 92, name: '501 (k)'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 20, name: '62304'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 27, name: 'AC Box'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 94, name: 'Accuracy'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 62, name: 'Acquisition'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 17, name: 'ADA'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 24, name: 'AMAT'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 103, name: 'Analytics'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 58, name: 'Architecture Assessment'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 98, name: 'Architecture Definition'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 105, name: 'Architecture Platform'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 63, name: 'Architecture Strategy'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 97, name: 'Assessment'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 13, name: 'ATE'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 14, name: 'Automated Test Equipment'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 85, name: 'Beverage Filler Valve'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 77, name: 'Big Data'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 32, name: 'Biology'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 90, name: 'Cancer'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 118, name: 'Cardiac'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 15, name: 'Chip Design'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 49, name: 'Chromatography'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 2, name: 'Class II'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 29, name: 'Cloud'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 108, name: 'Cloud Based Portal'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 6, name: 'Code'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 36, name: 'Connectivity'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 115, name: 'Consulting'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 86, name: 'Consumer Goods'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 59, name: 'Control System'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 25, name: 'Cost Reduction'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 31, name: 'Cybersecurity'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 11, name: 'Data Analytics'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 104, name: 'Data Management'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 106, name: 'Design'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 41, name: 'Development'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 111, name: 'DFMA'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 28, name: 'Diabetes'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 51, name: 'Driven Sample'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 82, name: 'Drug Development'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 57, name: 'Dual Beam SEM'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 56, name: 'ECG'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 43, name: 'Electrical'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 99, name: 'Embedded'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 3, name: 'EMR'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 30, name: 'Enterprise'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 26, name: 'Etch Tool'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 22, name: 'FDA'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 68, name: 'Fleet Control Management'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 47, name: 'Fluidics'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 87, name: 'Food and Beverage'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 84, name: 'Hardware'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 4, name: 'HIS'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 1, name: 'HL7'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 55, name: 'HRV'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 91, name: 'Imaging'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 74, name: 'Implantable'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 112, name: 'Integration and Test'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 48, name: 'Ion-exchange'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 16, name: 'iOS'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 39, name: 'IoT'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 81, name: 'Lab & Test'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 93, name: 'Lens Surface'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 35, name: 'LIM'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 37, name: 'LIS'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 52, name: 'Loading Automation'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 88, name: 'Logistics Management'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 73, name: 'LVAD'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 119, name: 'Magnetic'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 65, name: 'Manufacturing'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 44, name: 'Mechanical'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 83, name: 'Metrics'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 5, name: 'Migration'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 102, name: 'Mobile'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 60, name: 'Motion Control'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 34, name: 'Neurology'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 72, name: 'Next-Generation Device'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 66, name: 'Off-Shore'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 127, name: 'Oncology'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 67, name: 'On-Shore'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 113, name: 'Package Analytics'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 124, name: 'Pharmacy'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 7, name: 'Platform'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 126, name: 'Platform Analytics'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 54, name: 'Portable EEG System'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 116, name: 'Predictive Maintenance'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 23, name: 'Process Gap Assessment'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 125, name: 'Product Architecture'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 40, name: 'Product Costs'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 61, name: 'Product Line'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 107, name: 'Product Platform'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 122, name: 'Radiation'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 21, name: 'Remediation'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 117, name: 'Remote Diagnostics'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 70, name: 'Retail Distribution'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 80, name: 'Roadmap'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 69, name: 'Robotics'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 109, name: 'Sanmina'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 53, name: 'Scalability'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 79, name: 'Scanning System'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 101, name: 'Security'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 12, name: 'Semiconductor'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 114, name: 'Sensors'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 123, name: 'Service Oriented Architecture'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 19, name: 'Software'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 45, name: 'SOM'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 100, name: 'Systems'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 121, name: 'Technology Strategy'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 96, name: 'Test Processes'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 71, name: 'Time to Market'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 46, name: 'Touchscreen'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 18, name: 'UI'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 8, name: 'Upgrade'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 120, name: 'Value Driven Analytics'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 110, name: 'Value Engineering'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 64, name: 'VDA'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 75, name: 'Warehouse Automation'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 89, name: 'WCS'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 10, name: 'Windows 7'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 9, name: 'Windows XP'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 76, name: 'Wireless'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 95, name: 'Workflow Management'}, (err) => {
        if (err) console.log(err)
    })
    Keywords.create({ keywordId: 78, name: 'X-Ray'}, (err) => {
        if (err) console.log(err)
    })
}

// ADD Keywords
module.exports.addKeyword = (keyword, callback) => {
    Keywords.create(keyword, callback)
}

// GET Keywords
module.exports.getKeywords = (callback, limit) => {
    Keywords.find().limit(limit).exec().then(callback)
}

// UPDATE Keywords
module.exports.updateKeyword = (name, keyword, options, callback) => {
    var query = {name: name}
    var update = {name: keyword.name}
    Keywords.findOneAndUpdate(query, update, options, callback)
}

// DELETE Keywords
module.exports.removeKeyword = (name, callback) => {
    var query = {name: name}
    Keywords.deleteOne(query, callback)
}