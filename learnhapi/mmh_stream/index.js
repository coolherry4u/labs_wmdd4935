let hapi=require('hapi')
let inert=require('inert')
let fs=require("fs")
let rot13=require('rot13-transform')
let server=new hapi.Server()
server.connection({
 host: 'localhost',
 port: Number(process.argv[2] || 8080)
})
server.register(inert, function (err) {  
 if (err) 
 return console.log(err)
 server.route({  
  method: 'GET',
 path: '/',
  handler: function (request, reply) {
   let thisfile=fs.createReadStream('input.txt')
  reply(thisfile.pipe(rot13()))
   }
   })
})

server.start(function () {
    console.log('Server running at:', server.info.uri)
})