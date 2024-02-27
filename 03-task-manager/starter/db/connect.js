const mongoose = require('mongoose')

const connectionString = 'mongodb+srv://app_user:onJa0V16Ay1MT0Fe@nodejs-task-manager.croec03.mongodb.net/?retryWrites=true&w=majority&appName=NodeJS-Task-Manager'

mongoose
.connect(connectionString)
.then(()=> console.log('Connected to the Database...'))
.catch((err)=> console.log(err))