const Task = require('../models/tasks')

const getAllTasks = (req,res)=>{
    res.send('Get All Tasks')
}

const createTask = async (req,res)=> {
    const task = await Task.create(req.body)
    res.status(201).json({task})
}

const getTask = (req,res) => {
    res.json({id: req.params.id})
}

const updateTask = (req,res)=>{
    res.send('Update Task')
}

const deleteTask = (req,res)=>{
    res.send('Delete Task')
}

//Export controllers
module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}