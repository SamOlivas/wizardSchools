const Sequelize = require('sequelize');
const db = require('./db');

const Student = db.define('student', {
  id: {
    primaryKey: true,
    type: Sequelize.UUID,
    defaultValue: Sequelize.UUIDV4,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
     validate: {
       isEmail: true
     }
  },
  GPA: {
    type: Sequelize.FLOAT
  }
})

module.exports = Student;
