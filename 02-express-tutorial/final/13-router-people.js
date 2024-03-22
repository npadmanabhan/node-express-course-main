const express = require('express')
const peopleRouter = express.Router()

const {
  getPeople,
  createPerson,
  updatePerson,
  deletePerson
} = require('./15-router-controller')

peopleRouter.route('/').get(getPeople).post(createPerson)
peopleRouter.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = peopleRouter