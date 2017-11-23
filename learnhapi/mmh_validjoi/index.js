let hapi=require('hapi')
let inert=require('inert')
let joi=require("joi")
let server=new hapi.Server()
server.connection({
  host: 'localhost',
 port: Number(process.argv[2] || 8080)
})
server.register(inert, function (err) {  
  if (err) 
 return console.log(err)
  server.route({  
   method: 'POST',
   path: '/login',
    handler: function (request, response) {
    //console.log('12')
     response("login successful")
        },
 config: {
  validate: {
  payload: joi.object({
    accessToken: joi.string().alphanum(),
    isGuest: joi.boolean(),
 username: joi.string().when('isGuest', { is: false, then: joi.required() }),
  password: joi.string().alphanum()
    })
.options({allowUnknown: true})
.with('username', 'isGuest')
.without('password', 'accessToken')
 }
 }      
    })
})

server.start(function () {
    console.log('Server running at:', server.info.uri)
})