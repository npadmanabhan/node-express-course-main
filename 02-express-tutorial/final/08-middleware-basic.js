const express = require('express')
const app = express()
const logger = require('../logger')

app.get('/', logger, (req, res) => {
  res.send('Welcome Home - By Nandu Padmanabhan')
})

app.get('/about', logger, (req,res)=>{
  res.send('About Nandu Padmanabhan')
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})