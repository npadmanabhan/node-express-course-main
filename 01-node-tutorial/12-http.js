const http = require('http')

//Create a web server and get it up and running with node 12-http.js
//When this is done, the web server is running and is listening for requests on port 5000
//Navigate http://localhost:5000/ on your local machine to test this web server
//Ctrl C to stop the web server
const server = http.createServer((req, res) => {  
  if (req.url === '/') {
    res.end('Welcome to our home page')
  } else if (req.url === '/about') {
    res.end('Here is our short history')
  } else {
    res.end(`
      <h1>Oops!</h1>
      <p>We can't seem to find the page you are looking for</p>
      <a href="/">back home</a>
    `)
  }
})

server.listen(5000)
