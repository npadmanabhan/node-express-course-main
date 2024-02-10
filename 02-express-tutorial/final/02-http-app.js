const http = require('http')
const { readFileSync } = require('fs')
const { join } = require('path')

// get all files
// use the __dirname variable get the absolute path of the current module's directory. 
//const homePage = readFileSync('./navbar-app/index.html')
const homePagePath = join(__dirname, '../navbar-app/index.html');
const homePage = readFileSync(homePagePath, 'utf-8');

//const homeStyles = readFileSync('./navbar-app/styles.css')
const homeStylesPath = join(__dirname, '../navbar-app/styles.css');
const homeStyles = readFileSync(homeStylesPath, 'utf-8');

//const homeImage = readFileSync('./navbar-app/logo.svg')
const homeImagePath = join(__dirname, '../navbar-app/logo.svg');
const homeImage = readFileSync(homeImagePath, 'utf-8');

//const homeLogic = readFileSync('./navbar-app/browser-app.js')
const homeLogicPath = join(__dirname, '../navbar-app/browser-app.js');
const homeLogic = readFileSync(homeLogicPath, 'utf-8');

const server = http.createServer((req, res) => {
  // console.log(req.method)
  const url = req.url
  console.log(url)
  // home page
  if (url === '/') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  else if (url === '/index.html') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write(homePage)
    res.end()
  }
  // about page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.write('<h1>About Nandu Padmanabhan</h1>')
    res.end()
  }
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' })
    res.write(homeStyles)
    res.end()
  }
  // image/logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' })
    res.write(homeImage)
    res.end()
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' })
    res.write(homeLogic)
    res.end()
  }
  // 404
  else {
    res.writeHead(404, { 'content-type': 'text/html' })
    res.write('<h1>page not found</h1>')
    res.end()
  }
})

server.listen(5000)
