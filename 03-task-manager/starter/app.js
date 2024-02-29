const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

//Middlware
app.use(express.json())

app.get('/hello', (req, res) => {
    res.status(200).send('Task Manager App')
})

//Wire up base routes and route handlers
app.use('/api/v1/tasks', tasks)

const port = 3000
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

