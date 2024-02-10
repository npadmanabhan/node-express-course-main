const { readFile, writeFile } = require('fs')

console.log('Starting the process of reading files asynchronously...')

// Note: The below code is also an example of a nesting callback (callback inside a callback inside a callback...)
// Read the first file with the help of a callback
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log(err)
    return
  }
  console.log('Callback has been received and the first file has been read...');
  const first = result
  
  // Read the second file with the help of a callback
  readFile('./content/second.txt', 'utf8', (err, result) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Callback has been received and the second file has been read...');
    const second = result

    // Merge file contents with the help of a callback
    writeFile(
      './content/result-async.txt',
      `Here is the result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err)
          return
        }
        console.log('Callback has been received and file contents have been merged asynchronously...')
      }
    )
  })
})

console.log("Files are being read and will be merged shortly, waiting for callback...");
