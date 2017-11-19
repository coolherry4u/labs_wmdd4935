let http=require("http");
let urls=[process.argv[2],process.argv[3],process.argv[4]];
let array=[];
let cont=0;
for(let i=0;i<=2;i++){  
http.get(urls[i],function(response){
let datastring = '';
response.setEncoding('utf8');
response.on('data',function(data){
       datastring= datastring+data;
    });
response.on('error',function(err){
        console.log(err);
 });
  response.on('end',function(){
  array[i] = datastring;
 cont++;
    if(cont >= 3){
      output();
    }
        
});
})
    
}
function output(){
    for(let j=0;j<3;j++){
        console.log(array[j]); 
    }
}