const express = require('express')
const app = express()

const people = require('./13-router-people')
const auth = require('./14-router-auth')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

//You have imported the royter above and assigned it to const "people". Now you are using that below.
app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
