
//insert value array
db.getCollection('languageRate').update({"target.idlang" :ObjectId("5a488156b58bc840b80f099f")},{$push :{"target" : {"item_name" : "my_item_two" , "price" : 1 }} })

// find in array
db.getCollection('languageRate').find({"target.idlang" : ObjectId("5a488156b58bc840b80f099f") })

// update an value in object of array
db.getCollection('languageRate').update({"target.item_name" : "one"},{$set :{ "target.$.price" :"test" }})