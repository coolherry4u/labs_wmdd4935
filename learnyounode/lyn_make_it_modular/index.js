let modul=require("./lyn_modular_module.js")
let direct=process.argv[2]
let ext=process.argv[3]
modul(direct,ext,function(err,list){
    if (err) 
        return console.log(err)

    //console.log(list)

});
