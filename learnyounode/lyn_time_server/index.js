let net=require('net')  
let date=new Date()
let month=date.getMonth()+1
let currentday=date.getDate()
if(currentday < 10){
  currentday='0'+date.getDate()
}
else{
  currentday=date.getDate()
}
//console.log(currentday)
let hrs=date.getHours()
if(hrs<10){
 hrs='0'+date.getHours()
}
else{
 hrs=date.getHours()
}
//console.log(hrs)
let minutes=date.getMinutes()
if(minutes<10){
 minutes='0'+date.getMinutes()
}
else{
 minutes = date.getMinutes()
}
//console.log(minutes)
let currentdaydate=date.getFullYear() + "-" + month  + "-" + currentday + " " + hrs + ":" + minutes 
let server=net.createServer(function (socket) {  
    socket.write(currentdaydate)
    socket.end("\n")
})  
server.listen(process.argv[2])  