let Fs=require("fs")
let data= Fs.readFileSync(process.argv[2])
let splitstr =data.toString().split('\n')
//console.log(splitstr)
let strlenght= splitstr.length-1
//console.log(strlenght)
console.log(strlenght)