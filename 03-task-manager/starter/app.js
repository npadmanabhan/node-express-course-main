const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-found')

//Middlware
app.use(express.static('./public'))
app.use(express.json())

//Wire up base routes and route handlers
app.use('/api/v1/tasks', tasks)
app.use(notFound)

const port = 3000

//Define a function to establish database connectivity using connectDB function
const startDB = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Database connection established and server is listening on port ${port}...`))
    }
    catch {
        console.log('Database Connection Error...')
        console.log(error)
    }
}

console.log('Starting Task Manager App...')
startDB()

