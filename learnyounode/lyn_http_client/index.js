let htp=require("http")
let link=process.argv[2]
htp.get(link,function(response){
	response.setEncoding('utf8')
response.on('data',function(data){
    console.log(data)
})
response.on('error',function(err){
   console.log(err)
})
})