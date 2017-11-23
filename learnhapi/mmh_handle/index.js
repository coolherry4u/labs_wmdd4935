let hapi=require('hapi')
let inert=require('inert')
let server=new hapi.Server()
server.connection({
  host:'localhost',
 port:Number(process.argv[2] || 8080)
})
server.register(inert, function (err) {  
  if (err) 
 return console.log(err)
  server.route({  
 method:'GET',
 path:'/',
 handler:{
  file:'index.html'
      }
  })
})
server.start(function () {
  console.log('Server running at:', server.info.uri)
})