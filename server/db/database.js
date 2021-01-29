'use strict'

const chalk = require('chalk')
const Sequelize = require('sequelize')
const pkg = require('../../package.json')

console.log(chalk.yellow('Opening database connection'))

// Creates the database instance that can be used in other database files
const db = new Sequelize(`postgres://localhost:5432/${pkg.name}`, {
  // Don't show SQL queries, makes the output more readable
  logging: false
})

module.exports = db
