let hapi=require('hapi')
let vision=require('vision')
let handlebar=require('handlebars')
let server=new hapi.Server()
server.connection({
 host: 'localhost',
 port: Number(process.argv[2] || 8080)
})
server.register(vision, (err) => {
 if (err) 
  return console.log(err)
  server.views({
   engines: {
  html: handlebar
 },
  relativeTo: __dirname,
  path: 'templates',
  helpersPath: 'helpers'
})
server.route({
 method: 'GET',
 path: '/',
 handler : function(req,rep){
  rep.view('index1',{name : req.query.name,suffix : req.query.suffix})
   }
  })
})

server.start(function () {
    console.log('Server running at:', server.info.uri)
})