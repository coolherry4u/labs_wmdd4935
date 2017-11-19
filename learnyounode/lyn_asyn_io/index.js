let Fs=require('fs')
Fs.readFile(process.argv[2], readfile)

function readfile(err, data) {
  if (err) 
  return console.log(err)
let spltstr=data.toString().split('\n')
//console.log(spltstr)
let splitlen=spltstr.length-1
console.log(splitlen)
}