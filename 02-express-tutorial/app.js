const express = require('express')
const path = require('path')

const app = express()

app.use(express.static('./navbar-app'))

// app.get('/', (req,res)=> {
//     console.log('user hit the home page resource')       
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))     
// })

app.all('*',(req,res)=> {
    console.log('user hit a 404 resource')
    res.status(404).send('<h1>Resource not found</h1>')
})

app.listen(5000, ()=> {
    console.log('Server is listening on port 5000')
    console.log(__dirname)
    console.log(`The file path for a single dot is is ${path.resolve(__dirname, './navbar-app/index.html')}`)
    console.log(`The file path for a double dot is is ${path.resolve(__dirname, '../navbar-app/index.html')}`) 
})