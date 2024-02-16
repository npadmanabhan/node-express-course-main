/*
-------------------------------------------------------
Based on how "authorize" function has been implemented:
-------------------------------------------------------
Below URLs will produce 401/Unauthorized
http://localhost:5000
http://localhost:5000?user=nandu
http://localhost:5000?user=john
http://localhost:5000?user=
http://localhost:5000/about
http://localhost:5000/api/products
http://localhost:5000/api/products?user=abc
http://localhost:5000/api/items


Below URLs will be ok
http://localhost:5000?user=Nandu
http://localhost:5000/about?user=Nandu
http://localhost:5000/api/products?user=Nandu
http://localhost:5000/api/items?user=Nandu
*/

const express = require('express')
const app = express()
const logger = require('../logger')
const authorize = require('../authorize')

app.use([logger, authorize])

app.get('/', (req, res) => {
  res.send('Home')
})

app.get('/about', (req, res) => {
  res.send('About')
})

app.get('/api/products', (req, res) => {
  res.send('Products')
})

app.get('/api/items', (req, res) => {
  console.log(req.user)
  res.send('Items')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})
