// let axios = require('axios')

const fs = require('@/js/studies')

module.exports = {
  getStudies () {
    return fs.getStudies()
  }
}
