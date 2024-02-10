const { readFile, writeFile } = require('fs')

const getText = (path) => {
    return new Promise((resolve,reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
              reject(err)
            } else {
              resolve(data)              
            }
          })       
    })
}

console.log('Going to read files using the Promise object...')

console.log('First file going to be read...')
getText('./content/first.txt')
    .then((result) => {
        console.log('The first file was successfully read')
        console.log(result)             
    })    
    .catch((err) => {
        console.log('There was a problem reading the first file')
        console.log(err) 
    })
console.log('Received a Promise object for the first file...')

console.log('Second file going to be read...')
getText('./content/second.txt')
    .then((result) => {
        console.log('The second file was successfully read')
        console.log(result)
    })    
    .catch((err) => {
        console.log('There was a problem reading the second file')
        console.log(err)
    })
console.log('Received a Promise object for the second file...')