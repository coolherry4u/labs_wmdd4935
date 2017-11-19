let htp = require('http')  
let Fs = require('fs')
let server = htp.createServer(function (request,response) { 
  let filedata = Fs.createReadStream(process.argv[3])
//console.log(process.argv[3])
 filedata.on('open', function () {
  filedata.pipe(response)
 //console.log(resp)
})
   
})  
server.listen(process.argv[2])  