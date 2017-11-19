let Fs=require('fs')
let path= require('path')
Fs.readdir(process.argv[2], getdir)
//console.log(Fs);
function getdir(err, getata) {
  if (err) 
   return console.error(err);
  for (let i=0 ;i<getata.length;i++ ) {
  	//console.log(getata[i])
if(path.extname(getata[i])=='.'+process.argv[3])
  console.log(getata[i])
  }
  
}