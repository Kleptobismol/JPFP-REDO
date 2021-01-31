'use strict'

const { models: { Student, Campus } } = require('../db/models')
const router = require('express').Router()

// Set up students route
router.get('/', async(req, res, next) => {
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

// Set up single student route
router.get('/:id', async(req, res, next) => {
    try {
      const student = await Student.findByPk(req.params.id, { include: { model: Campus }})
      res.send(student)
    }
    catch(ex) {
      next(ex)
    }
  })

// Set up add student route
router.post('/', async(req, res, next) => {
  try {
    const student = await Student.create(req.body)
    res.status(201).send(student)
  }
  catch(ex) {
    next(ex)
  }
})

module.exports = router;