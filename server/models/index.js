const Student = require('./Student');
const School = require('./School');
const {db, syncAndSeed} = require('./db')

module.exports = {
  model: {
    Student,
    School
  },
  db,
  syncAndSeed
}
