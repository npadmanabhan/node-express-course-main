const Task = require('../models/tasks')

//Controller for getting all tasks (used for "GET /" route)
//Use async await and wrap it around a try/catch to handle exceptions gracefully
//There is a model called "Task" and we invoke a method called find to retrieve all documents in that collection (tasks)
const getAllTasks = async (req,res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({tasks})
    } catch (error) {
        res.status(500).json( {msg: error})
    }    
}

//Controller for creating a new task (used for "POST /" route)
//Use async await and wrap it around a try/catch to handle exceptions gracefully
//There is a model called "Task" and we invoke a method called create and pass in a schema (i.e. document) to create a document in the tasks collection
const createTask = async (req,res)=> {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({task})
    } catch (error) {
        res.status(500).json( {msg: error})
    }    
}

//Controller for getting a specific task (used for "GET /:id" route)
//Use async await and wrap it around a try/catch to handle exceptions gracefully
//There is a model called "Task" and we invoke a method called findOne and pass in an ID based on which a document needs to be retrieved from the tasks collection
const getTask = async (req, res) => {
    try {
        const { id: taskID} = req.params
        const task = await Task.findOne({_id: taskID})
        if(!task){
            return res.status(400).json( {msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task})
    } catch (error) {
        res.status(500).json( {msg: error})        
    }    
}

const updateTask = (req,res)=>{
    res.send('Update Task')
}

const deleteTask = (req,res)=>{
    res.send('Delete Task')
}

//Export controllers
module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask}