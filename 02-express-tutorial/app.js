const express = require('express')
const app = express()

const people = require('./final/13-router-people')
const products = require('./final/16-router-products')
const auth = require('./final/14-router-auth')


// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({ extended: false }))
// parse json
app.use(express.json())

app.use('/api/v1/people', people)
app.use('/api/v1/products', products)

app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
