'use strict'

const router = require('express').Router()

// Connect parent router to campus and student routes
router.use('/campuses', require('./campuses'))
router.use('/students', require('./students'))

// Redirect errors to 404 message
router.use((req, res, next) => {
  const err = new Error('API route not found!')
  err.status = 404
  next(err)
})

// Export router
module.exports = router
