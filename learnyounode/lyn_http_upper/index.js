let htp=require('http')
let server=htp.createServer(function (request,response) {  
if(request.method=='POST'){
 let showdata=''
  request.on('data',function(data){
  //console.log(data.toString())
  showdata=showdata+data.toString().toUpperCase()
})
  request.on('end',function(){
  //console.log(showdata)
   response.end(showdata)    
})
}
})  
server.listen(process.argv[2])  