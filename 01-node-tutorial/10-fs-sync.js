const { readFileSync, writeFileSync } = require('fs')

console.log('Starting the process of reading files...')
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')
console.log('Files have been read...')

console.log('Starting the process of merging file contents...')

// If the file is not there, node will create one before writing the contents to it
// The third argument this function accepts is a options object and if you set this to {flag: 'a'}, node will append to the file and not override it
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('File contents have been merged...')


