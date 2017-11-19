let htp=require('http')  
let url=require('url')
let server=htp.createServer( (request,response) => {  
  //console.log(request.url)
  let linkdata=url.parse(request.url, true)
  //console.log(linkdata)
  let patname=linkdata.pathname
 let querydate=linkdata.query.iso
  //console.log(querydate)
 let dateobjct=new Date(querydate)
  let respdata
  if(patname=='/api/parsetime'){
    respdata=dateformat(dateobjct)
  }
 if(patname=='/api/unixtime'){
 respdata={ 
    unixtime :dateobjct.getTime()
   }
}
if(respdata){
 //console.log(respdata)
 response.writeHead(200, { 'Content-Type': 'application/json' })
response.end(JSON.stringify(respdata))
}
   
   
})  
function dateformat(dateobjct){
  return {hour:dateobjct.getHours(),minute:dateobjct.getMinutes(),second:dateobjct.getSeconds()}
}
server.listen(process.argv[2])  