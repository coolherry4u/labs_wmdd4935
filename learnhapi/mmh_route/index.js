let hapi=require('hapi')
let server=new hapi.Server()
server.connection({
 host:'localhost',
  port:Number(process.argv[2] || 8080)
})
 server.route({
	path: '/{name}',
	 method:'GET', 
	 handler: serverCallback
 	})
 function serverCallback(request, response) {
 	//console.log(request.params.name)
   response('Hello '+request.params.name)
    }
server.start(function () {
     console.log('Server running at:', server.info.uri)
    }) 