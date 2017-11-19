let Fs=require('fs')
let path=require('path')
module.exports=function(direct,ext,callback){
    Fs.readdir(direct,function(err, data) {
        if (err) 
        return callback(err)
  else{    
    let filelist=[];
    //console.log(data);
    for (let i=0 ; i<data.length; i++ ) {
      //console.log(data[i]);
    if(path.extname(data[i])=='.'+ext){
        filelist.push(data[i])
        console.log(data[i])
      }
  }
  return callback(null, filelist)   
  }
})
}  