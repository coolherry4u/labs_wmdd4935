let mongo=require('mongodb').MongoClient
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(error, mongodb) {
if(error)
 return console.log(error)
 let parrots=mongodb.collection('parrots')
//console.log(parrots)
 parrots.find({
 age:{ 
 $gt:+process.argv[2] 
 }
 }).toArray(function(error, data){
 if(error) 
 return console.log(error)
 console.log(data)
 mongodb.close()
})
})