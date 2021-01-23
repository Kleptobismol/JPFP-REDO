'use strict'

const db = require('./database')
const { models: { Campus, Student } } = require('./models')

// Sets up relationship between Campus and Student Models:
// Campuses may contain many students
Student.belongsTo(Campus)
Campus.hasMany(Student)

// Export database and models
module.exports = {
  db,
  models: {
    Campus,
    Student
  }
}
