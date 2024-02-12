const express = require('express')
const path = require('path')

const app = express()

// setup static and middleware
app.use(express.static('../navbar-app'))

app.get('/', (req, res) => {
  const homePagePath = path.join(__dirname, '../navbar-app/index.html');
  res.sendFile(homePagePath)
})

app.all('*', (req, res) => {
  res.status(404).send('resource not found')
})

app.listen(3000, () => {
  console.log('server is listening on port 3000....')
  console.log(`The file path for a single dot is is ${path.resolve(__dirname, './navbar-app/index.html')}`)
  console.log(`The file path for a double dot is is ${path.resolve(__dirname, '../navbar-app/index.html')}`) 
})

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<IMPORTANT - PLEASE READ AND UNDERSTAND>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//NOTE: If you were to run the above code in app.js, which has the same parent directory as final (04-express.app.js parent directory), the use the following:
//app.use(express.static('./navbar-app'))
//res.sendFile(path.resolve(__dirname, './navbar-app/index.html')) 
//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>