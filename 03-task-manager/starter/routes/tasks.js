const express = require('express')
const router = express.Router()

//controllers
const {getAllTasks, createTask, getTask, updateTask, editTask, deleteTask} = require('../controllers/tasks')

//Wire up routes and controllers
router.get('/', getAllTasks)
router.post('/', createTask)
router.get('/:id', getTask)
router.patch('/:id', updateTask)
router.put('/:id', editTask)
router.delete('/:id', deleteTask)

//Exports route handler
module.exports = router