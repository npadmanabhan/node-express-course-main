const Task = require('../models/tasks')
const asyncWrapper = require('../middleware/async')

//Controller for getting all tasks (used for "GET /" route)
//Use async await and wrap it around a try/catch to handle exceptions gracefully
//There is a model called "Task" and we invoke a method called find to retrieve all documents in that collection (tasks)
const getAllTasks = asyncWrapper(async (req,res) => {   
    const tasks = await Task.find({})
    res.status(200).json({tasks})    
    //res.status(200).json( {status: "success", count: tasks.length, data: {tasks}} )    
})

//Controller for creating a new task (used for "POST /" route)
//Use async await and wrap it around a try/catch to handle exceptions gracefully
//There is a model called "Task" and we invoke a method called create and pass in a schema (i.e. document) to create a document in the tasks collection
const createTask = asyncWrapper(async (req,res)=> {        
    const task = await Task.create(req.body)
    res.status(201).json({task})        
})

//Controller for getting a specific task (used for "GET /:id" route)
//Use async await and wrap it around a try/catch to handle exceptions gracefully
//There is a model called "Task" and we invoke a method called findOne and pass in an ID based on which a document needs to be retrieved from the tasks collection
const getTask = asyncWrapper(async (req, res) => {    
    const { id: taskID} = req.params
    const task = await Task.findOne({_id: taskID})
    if(!task){
        return res.status(404).json( {msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({task})        
})

//Controller for updating a specific task (used for "PATCH /:id" route)
//NOTE: PATCH does a partial update of the resource (i.e. specific fields)
//Use async await and wrap it around a try/catch to handle exceptions gracefully
//There is a model called "Task" and we invoke a method called updateOne and pass in an ID based on which a document needs to be updated in the tasks collection
const updateTask = asyncWrapper(async (req, res) => {    
    const { id: taskID } = req.params        
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        new: true,
        runValidators: true
    })
    if(!task){
        return res.status(404).json( {msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({task, status: 'task update successful'})          
})

//Controller for updating a specific task (used for "PUT /:id" route)
//NOTE: PUT does a complete replace of the existing resource
//Use async await and wrap it around a try/catch to handle exceptions gracefully
//There is a model called "Task" and we invoke a method called updateOne and pass in an ID based on which a document needs to be updated in the tasks collection
const editTask = asyncWrapper(async (req, res) => {    
    const { id: taskID } = req.params        
    const task = await Task.findOneAndUpdate({_id: taskID}, req.body, {
        new: true,
        runValidators: true,
        overwrite: true
    })
    if(!task){
        return res.status(404).json( {msg: `No task with id: ${taskID}`})
    }
    res.status(200).json({task, status: 'task update successful'})           
})

//Controller for deleting a specific task (used for "DELETE /:id" route)
//Use async await and wrap it around a try/catch to handle exceptions gracefully
//There is a model called "Task" and we invoke a method called findOneAndDelete and pass in an ID based on which a document needs to be deleted from the tasks collection
//asyncWrapper function has not been used to highlight the use of try/catch directly as an alternative
const deleteTask = async (req, res) => {
    try {
        const { id: taskID} = req.params
        const task = await Task.findOneAndDelete({_id: taskID})
        if(!task){
            return res.status(404).json( {msg: `No task with id: ${taskID}`})
        }
        res.status(200).json({task: taskID, status: 'task deletion successful'})
        
    } catch (error) {
        res.status(500).json( {msg: error})        
    }   
}

//Export controllers
module.exports = {getAllTasks, createTask, getTask, updateTask, editTask, deleteTask}