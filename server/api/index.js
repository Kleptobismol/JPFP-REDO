'use strict'
const { models: { Campus, Student } } = require('../db/models')
const router = require('express').Router()

// Set up campuses route
router.use('/campuses', async(req, res, next) => {
  try {
    const campuses = await Campus.findAll({
      include: [ Student ]
    })
    res.send(campuses)
  }
  catch(ex) {
    next(ex)
  }
})

// Set up students route
router.use('/students', async(req, res, next) => {
  try {
    const students = await Student.findAll({
      include: [ Campus ]
    })
    res.send(students)
  }
  catch(ex) {
    next(ex)
  }
})

// Redirect errors to 404 message
router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

// Export router
module.exports = router
