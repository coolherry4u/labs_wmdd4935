let mongo=require('mongodb').MongoClient
//console.log(mongo)
mongo.connect('mongodb://localhost:27017/learnyoumongo', function(error, mongodb) {
if(error)
  return console.log(error)
//console.log(mongodb)
})