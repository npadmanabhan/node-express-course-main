const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
require('./db/connect')
const port = 3000

//Middlware
app.use(express.json())

app.get('/hello', (req, res) => {
    res.status(200).send('Task Manager App')
})

//Wire up base routes and route handlers
app.use('/api/v1/tasks', tasks)


console.log('Starting Task Manager App...')
app.listen(port, console.log(`Server is listening on port ${port}...`))

