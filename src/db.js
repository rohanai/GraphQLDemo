const mongoose = require('mongoose')

const connectToDB = (url = 'mongodb://localhost/done3') => {
  return mongoose.connect(url)
}

module.exports = connectToDB
