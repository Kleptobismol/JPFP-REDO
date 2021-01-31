'use strict'

const { models: { Campus, Student } } = require('../db/models')
const router = require('express').Router()

// Set up all campuses route
router.get('/', async(req, res, next) => {
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

// Set up single campus route
router.get('/:id', async(req, res, next) => {
    try {
      const campus = await Campus.findByPk(req.params.id, { include: { model: Student }})
      res.send(campus)
    }
    catch(ex) {
      next(ex)
    }
  })

// Set up add campus route
router.post('/', async(req, res, next) => {
  try {
    const campus = await Campus.create(req.body)
    res.status(201).send(campus)
  }
  catch(ex) {
    next(ex)
  }
})

// Set up delete campus route
router.delete('/:id', async(req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id)
    await campus.destroy()
    res.send(campus)
  }
  catch(ex) {
    next(ex)
  }
})

module.exports = router;