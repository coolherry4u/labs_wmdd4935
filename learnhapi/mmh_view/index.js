let hapi=require('hapi')
let handlebar=require('handlebars')
let server=new hapi.Server()
 server.connection({
 host: 'localhost',
 port: Number(process.argv[2] || 8080)
})
 server.register(require('vision'), (err) => {
  if (err) 
 return console.log(err)
 server.views({
 engines: {
 html: handlebar
 },
 relativeTo: __dirname,
 path: 'templates',
}
)
 server.route({
  method: 'GET',
  path: '/',
 handler : function(request,response){
    //console.log(request)
 response.view('index',{param : request.query.name})

 }
 })
})

server.start(function () {
console.log('Server running at:', server.info.uri)
})