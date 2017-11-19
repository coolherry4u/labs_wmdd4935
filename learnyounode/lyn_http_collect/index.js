let htp=require("http")
let link=process.argv[2]
let strg=''
htp.get(link,function(response){
response.setEncoding('utf8')
response.on('data',function(data){
    strg=strg+data
        //console.log(string)
    })
   response.on('error',function(err){
        console.log(err)
    })
    response.on('end',function(){
        console.log(strg.length)
    console.log(strg)
})
})